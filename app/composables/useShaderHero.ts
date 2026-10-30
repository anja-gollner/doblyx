// WebGL-Horizont: Blau → Orange-Glühen mit feinen Lichtstreifen (Markenfarben).
// Ohne WebGL oder bei reduzierter Bewegung greift der CSS-Fallback im Hero.
// options.hill = false blendet die orange Welle aus (nur blaue Lichtstreifen)
export function useShaderHero(canvasRef: MaybeRef<HTMLElement | null>, options: { hill?: boolean } = {}) {
  if (!import.meta.client) return

  let rafId = 0
  let renderer: any = null
  let material: any = null
  let geometry: any = null
  let observer: IntersectionObserver | null = null
  let visible = true
  let cleanup = () => {}

  onMounted(async () => {
    const container = unref(canvasRef)
    if (!container) return
    const showFallback = () => container.parentElement?.querySelector('.hero-fallback')?.classList.add('is-visible')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showFallback()
      return
    }

    const THREE = await import('three')

    const canvas = document.createElement('canvas')
    canvas.className = 'hero-canvas'

    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' })
    } catch {
      showFallback()
      return
    }
    container.appendChild(canvas)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.Camera()

    const vertexShader = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`
    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uHill;
      uniform vec3 uInk;
      uniform vec3 uDeep;
      uniform vec3 uBlue;
      uniform vec3 uOrange;

      float hash(float n){ return fract(sin(n) * 43758.5453123); }
      float noise(float x){ float i = floor(x); float f = fract(x); f = f*f*(3.0-2.0*f); return mix(hash(i), hash(i+1.0), f); }
      float noise2(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
        float a=hash(i.x+i.y*57.0), b=hash(i.x+1.0+i.y*57.0), c=hash(i.x+(i.y+1.0)*57.0), d=hash(i.x+1.0+(i.y+1.0)*57.0);
        return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }

      float hash2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

      float ramp(float v, float a, float b){ return clamp((v - a) / (b - a), 0.0, 1.0); }

      float bump(float u, float c, float w, float a){ return a * exp(-pow((u - c) / w, 2.0)); }

      // Oberkante der Lichtstreifen über die Breite (u = 0 links … 1 rechts),
      // nachgebaut nach der eingezeichneten Silhouette: Gruppen mit hohen Spitzen und Senken
      float skyline(float u){
        float h = 0.68;
        h += bump(u, 0.17, 0.029, 0.12);
        h += bump(u, 0.245, 0.045, 0.34);
        h += bump(u, 0.31, 0.035, 0.12);
        h += bump(u, 0.36, 0.032, 0.07);
        h += bump(u, 0.44, 0.056, 0.17);
        h += bump(u, 0.505, 0.064, 0.25);
        h += bump(u, 0.63, 0.040, 0.17);
        h += bump(u, 0.775, 0.048, 0.22);
        h += bump(u, 0.92, 0.048, 0.05);
        h += bump(u, 0.5, 0.075, 0.22); // Mitte reicht bis ganz nach oben
        h -= bump(u, 0.08, 0.048, 0.06);
        h -= bump(u, 0.58, 0.032, 0.04);
        h -= bump(u, 0.72, 0.035, 0.1);
        h -= bump(u, 0.825, 0.032, 0.09);
        return h;
      }

      // Eine Ebene senkrechter Lichtlinien; Höhe folgt der Silhouette, mit leichter Streuung je Linie
      float streakLayer(float x, float u, float y, float n, float seed, float jitter){
        float id = floor(x * n);
        float f = fract(x * n);
        float r = hash(id * 1.37 + seed * 17.0);
        float r2 = hash(id * 7.13 + seed * 31.0);
        float top = skyline(u) + (r - 0.5) * jitter;
        // nach oben ausblassend, aber bis knapp unter die Oberkante sichtbar
        float fade = pow(smoothstep(top + 0.03, top - 0.58, y), 1.8) * mix(1.0, 0.45, smoothstep(0.3, 1.0, y)) * mix(0.55, 1.0, smoothstep(top, 0.1, y));
        float line = pow(smoothstep(0.56, 0.0, abs(f - 0.5)), 1.15); // weich/verschwommen
        return fade * line * mix(0.55, 1.0, r2);
      }

      void main(){
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;
        float x = (uv.x - 0.5) * aspect + uMouse.x * 0.03;
        float y = uv.y; // 0 = unten, 1 = oben
        float t = uTime;

        // Intro „Sonnenaufgang“: erst steigt die orange Welle, dann wachsen die Lichtstreifen
        float eHill = 1.0 - pow(1.0 - clamp((t - 0.15) / 1.5, 0.0, 1.0), 3.0);
        float eLight = 1.0 - pow(1.0 - clamp((t - 0.45) / 1.9, 0.0, 1.0), 3.0);
        float yL = y / max(eLight, 0.02); // Licht wächst von unten nach oben

        // Farben direkt aus dem Vorbild (kein Violett/Pink)
        vec3 cTop    = vec3(0.012, 0.016, 0.045);  // fast Schwarz oben
        vec3 cNavy   = vec3(0.035, 0.09, 0.30);    // tiefes Blau
        vec3 cBlue   = vec3(0.04, 0.38, 0.86);     // Electric Blue
        vec3 cCyan   = vec3(0.36, 0.72, 1.0);      // Hellblau
        vec3 cWhite  = vec3(0.90, 0.95, 1.0);      // fast Weiß (Kern)
        vec3 cPeach  = vec3(1.0, 0.80, 0.66);      // Pfirsich
        vec3 cOrange = vec3(0.99, 0.47, 0.27);     // Cantaloupe

        // Grund: oben Midnight Black (#02070A), nach unten tiefes Navy
        vec3 cMidnight = vec3(0.008, 0.027, 0.039);
        vec3 col = mix(cNavy, cMidnight, smoothstep(0.08, 0.75, y));

        // Sterne: unregelmäßig verteilt, teils gehäuft; vor den Streifen gezeichnet, damit sie dahinter liegen
        float cellSize = 11.0;
        vec2 g = floor(gl_FragCoord.xy / cellSize);
        vec2 gf = fract(gl_FragCoord.xy / cellSize);
        vec2 spot = vec2(hash2(g + 3.1), hash2(g + 7.7));
        float d = length((gf - spot) * cellSize);
        float cluster = noise2(g * 0.09 + 4.0);
        float present = step(1.0 - 0.085 * (0.3 + 1.4 * cluster), hash2(g));
        float star = present * smoothstep(1.3, 0.0, d) * mix(0.18, 0.45, hash2(g + 11.0));

        // Linienraster (gleicher Abstand, statisch); jede Linie endet auf eigener Höhe
        float streak = streakLayer(x, uv.x, yL, 90.0, 2.0, 0.025);
        float s = clamp(streak, 0.0, 1.0);

        // Blau exakt nach den gemessenen Werten aus dem Vorbild:
        // Seiten-Verlauf (von unten nach oben) …
        float sky = skyline(uv.x);
        float ys = yL - (sky - 0.75) * 0.6 - 0.08; // höhere Streifengruppen sind auf gleicher Höhe heller
        vec3 side = vec3(0.25, 0.62, 0.78);
        side = mix(side, vec3(0.10, 0.55, 0.75), ramp(ys, 0.22, 0.30));
        side = mix(side, vec3(0.012, 0.40, 0.67), ramp(ys, 0.30, 0.38));
        side = mix(side, vec3(0.016, 0.255, 0.49), ramp(ys, 0.38, 0.46));
        side = mix(side, vec3(0.012, 0.137, 0.31), ramp(ys, 0.46, 0.54));
        side = mix(side, vec3(0.008, 0.063, 0.176), ramp(ys, 0.54, 0.62));
        side = mix(side, vec3(0.012, 0.031, 0.118), ramp(ys, 0.62, 0.70));
        side = mix(side, vec3(0.03, 0.016, 0.094), ramp(ys, 0.70, 0.78));
        side = mix(side, vec3(0.06, 0.012, 0.10), ramp(ys, 0.78, 0.90));

        // … und Verlauf der hellen Mitte (Lichtsäule über dem Hügel)
        vec3 mid = vec3(0.83, 0.835, 0.855);
        mid = mix(mid, vec3(0.54, 0.77, 0.86), ramp(yL, 0.46, 0.54));
        mid = mix(mid, vec3(0.42, 0.76, 0.87), ramp(yL, 0.54, 0.62));
        mid = mix(mid, vec3(0.012, 0.435, 0.733), ramp(yL, 0.62, 0.72));
        mid = mix(mid, vec3(0.008, 0.137, 0.37), ramp(yL, 0.72, 0.85));
        mid = mix(mid, vec3(0.004, 0.075, 0.255), ramp(yL, 0.85, 0.95));
        float beam = exp(-pow(x / 0.17, 2.0));

        col = mix(side, mid, beam * mix(0.25, 1.0, uHill));
        // Ohne Welle: Licht läuft nach unten ins Dunkel aus (schwebendes Polarlicht)
        col *= mix(mix(0.12, 1.0, smoothstep(0.0, 0.45, y)), 1.0, uHill);
        // Streifen sichtbar, Farbton bleibt wie im Original
        col *= 0.78 + 0.45 * s;

        // Sterne hinter den Streifen: nur im dunklen Bereich sichtbar
        col += star * smoothstep(0.3, 0.8, y) * (1.0 - beam) * (1.0 - 0.6 * s);

        // Orange Welle von unten: runde Glocke in der Mitte (Spitze ~58 % Höhe),
        // daneben zwei Täler, zu den Bildrändern wieder ansteigend; Kante wogt leicht
        float ax = abs(x);
        float bell = 0.43 * exp(-pow(ax / 0.23, 2.0));
        float rise = 0.15 * pow(clamp((ax - 0.5) / 0.42, 0.0, 1.0), 1.4);
        float h = (0.19 + bell + rise) * eHill;
        h += (0.012 * sin(x * 5.0 - t * 0.8) + 0.008 * sin(x * 11.0 + t * 0.6) + 0.01 * sin(t * 0.45)) * eHill;
        // Kante: an den Seiten scharf, oben an der Glocke weich ins Blau auslaufend
        float apex = exp(-pow(ax / 0.16, 2.0));
        float soft = mix(0.012, 0.07, apex);
        float inside = smoothstep(h + soft, h - 0.03 - soft * 0.6, y);
        float depth = clamp((h - y) / max(h, 0.001), 0.0, 1.0);

        // Heller Schimmer direkt über der Kante (Pfirsich-Weiß, kein Pink)
        float above = max(y - h, 0.0);
        float rim = exp(-above * mix(22.0, 8.0, apex)) * (1.0 - inside) * uHill;
        col = mix(col, mix(cWhite, cPeach, 0.45), clamp(rim * mix(0.7, 0.45, apex), 0.0, 1.0));

        // Innen: an der Spitze fast weiß, dann Pfirsich, Orange und unten Rot
        vec3 cRed = vec3(0.90, 0.22, 0.14);
        vec3 cDarkRed = vec3(0.45, 0.05, 0.05);
        vec3 warm = mix(cPeach, cOrange, smoothstep(0.0, 0.09, h - y));
        warm = mix(warm, mix(cWhite, cPeach, 0.6), apex * smoothstep(0.25, 0.0, depth) * 0.55);
        // Von unten Dunkelrot, über Rot ins Orange verlaufend
        warm = mix(warm, cRed, smoothstep(0.34, 0.08, y) * 0.8);
        warm = mix(warm, cDarkRed, smoothstep(0.16, 0.0, y));
        // Orange/Rot deckend; Streifen nur dezent an der durchsichtigen Hügelspitze
        warm *= mix(1.0, 0.97 + 0.04 * s, exp(-pow(ax / 0.26, 2.0)));
        // Nach oben zunehmend durchsichtig, die Streifen scheinen durch
        float hillTop = exp(-pow(ax / 0.26, 2.0)); // nur die mittlere Glocke
        float opacity = mix(1.0, mix(0.55, 1.0, smoothstep(h - 0.02, h - 0.22, y)), hillTop);
        col = mix(col, warm, inside * opacity * uHill);
        col += vec3(1.0, 0.9, 0.85) * s * 0.03 * inside * hillTop;


        gl_FragColor = vec4(col, 1.0);
      }
    `

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uMouse: { value: new THREE.Vector2() },
      uHill: { value: options.hill === false ? 0 : 1 },
      uInk: { value: new THREE.Color('#0a1238') },
      uDeep: { value: new THREE.Color('#13308a') },
      uBlue: { value: new THREE.Color('#0297DE') },
      uOrange: { value: new THREE.Color('#FC734D') },
    }

    geometry = new THREE.PlaneGeometry(2, 2)
    material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
    scene.add(new THREE.Mesh(geometry, material))

    const resize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height, false)
      uniforms.uResolution.value.set(rect.width, rect.height)
    }

    const mouse = new THREE.Vector2()
    const target = new THREE.Vector2()
    const onMove = (event: MouseEvent) => {
      target.set((event.clientX / window.innerWidth) * 2 - 1, -((event.clientY / window.innerHeight) * 2 - 1))
    }

    const clock = new THREE.Clock()
    const render = () => {
      rafId = window.requestAnimationFrame(render)
      if (!visible) return
      uniforms.uTime.value = clock.getElapsedTime()
      mouse.lerp(target, 0.03)
      uniforms.uMouse.value.copy(mouse)
      renderer.render(scene, camera)
    }

    observer = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting)
    })
    observer.observe(container)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', resize)
    cleanup = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }

    resize()
    render()
    container.classList.add('is-live')
  })

  onBeforeUnmount(() => {
    if (rafId) window.cancelAnimationFrame(rafId)
    cleanup()
    observer?.disconnect()
    geometry?.dispose()
    material?.dispose()
    renderer?.dispose()
  })
}

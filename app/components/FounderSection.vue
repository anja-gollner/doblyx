<script setup lang="ts">
const chapters = [
  { from: 'Leistungssport', to: 'Disziplin', text: 'Skirennlauf und Matura an der Skisportschule: jeden Tag trainieren, jedes Detail zählt.' },
  { from: 'Technik', to: 'Umsetzung', text: 'Heute: KI-Automatisierung, Softwareentwicklung und automatisierte Abläufe für Unternehmen.' },
]
</script>

<template>
  <section id="ueber" class="relative overflow-hidden bg-ink-800 py-20 sm:py-28 lg:py-36">
    <div class="container-site grid items-center gap-16 lg:grid-cols-12">
      <div class="reveal relative lg:col-span-5">
        <div class="relative overflow-hidden rounded-3xl border border-[var(--line)]">
          <img
            src="/eric.jpg"
            alt="Eric Dobler, Gründer von Doblyx AI"
            class="aspect-[4/5] w-full object-cover object-[48%_center]"
            loading="lazy"
            width="1080"
            height="1080"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden="true" />
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
            <div>
              <p class="font-serif text-3xl text-fg">Eric Dobler</p>
              <p class="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/70">Gründer & Geschäftsführer</p>
            </div>
            <a
              :href="site.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-ink/50 text-fg backdrop-blur transition-colors hover:border-electric hover:text-electric"
              aria-label="Eric Dobler auf LinkedIn"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 lg:pl-8">
        <p class="reveal eyebrow">Über Doblyx</p>
        <h2 class="reveal heading mt-6">
          Der Mensch <span class="accent">hinter Doblyx.</span>
        </h2>
        <p class="reveal mt-6 max-w-xl text-[15px] leading-7 text-fg/75">
          Eric Dobler kommt aus dem Leistungssport. Dort hat er gelernt, dass Ergebnisse nicht aus großen Worten entstehen, sondern aus Disziplin, Präzision und Wiederholung. Genau so baut er heute Automatisierungen: durchdacht, sauber umgesetzt und so, dass sie jeden Tag zuverlässig laufen.
        </p>

        <ol class="mt-10 space-y-3">
          <li v-for="chapter in chapters" :key="chapter.from" class="reveal glass-card grid gap-2 rounded-2xl p-5 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-6 sm:p-6">
            <p class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              {{ chapter.from }} <span class="text-cantaloupe" aria-hidden="true">→</span> <span class="text-fg">{{ chapter.to }}</span>
            </p>
            <p class="text-[14px] leading-6 text-fg/75">{{ chapter.text }}</p>
          </li>
        </ol>

        <blockquote class="reveal mt-10 border-l border-cantaloupe/70 pl-6">
          <p class="font-serif text-[1.6rem] italic leading-snug text-fg">
            „Ich verkaufe keine KI-Spielereien. Ich baue Systeme, die Ihrem Team jeden Tag Arbeit abnehmen und die Sie verstehen.“
          </p>
          <footer class="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Eric Dobler</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

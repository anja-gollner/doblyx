<script setup lang="ts">
// Weicher Lichthorizont als Übergang zwischen Abschnitten (Echo des Hero-Lichts)
withDefaults(defineProps<{ tone?: 'blue' | 'orange' | 'mix' }>(), { tone: 'blue' })
</script>

<template>
  <div class="horizon" :class="`horizon--${tone}`" aria-hidden="true">
    <div class="horizon-glow" />
    <div class="horizon-line" />
  </div>
</template>

<style scoped>
.horizon {
  pointer-events: none;
  position: absolute;
  inset: 0 0 auto;
  height: 460px;
  overflow: hidden;
}

.horizon-line {
  position: absolute;
  top: 0;
  left: 8%;
  right: 8%;
  height: 1px;
  opacity: 0.8;
}

.horizon-glow {
  position: absolute;
  top: -260px;
  left: 50%;
  width: min(1100px, 95%);
  height: 520px;
  transform: translateX(-50%);
  border-radius: 9999px;
  filter: blur(20px);
}

.horizon--blue .horizon-line {
  background: linear-gradient(90deg, transparent, rgba(2, 151, 222, 0.6) 25%, rgba(207, 236, 255, 0.95) 50%, rgba(2, 151, 222, 0.6) 75%, transparent);
}

.horizon--blue .horizon-glow {
  background: radial-gradient(closest-side, rgba(2, 151, 222, 0.3), rgba(2, 151, 222, 0.08) 60%, transparent);
}

.horizon--orange .horizon-line {
  background: linear-gradient(90deg, transparent, rgba(252, 115, 77, 0.6) 25%, rgba(255, 226, 210, 0.95) 50%, rgba(252, 115, 77, 0.6) 75%, transparent);
}

.horizon--orange .horizon-glow {
  background: radial-gradient(closest-side, rgba(252, 115, 77, 0.28), rgba(229, 56, 36, 0.08) 60%, transparent);
}

.horizon--mix .horizon-line {
  background: linear-gradient(90deg, transparent, rgba(2, 151, 222, 0.7) 22%, rgba(240, 240, 245, 0.95) 50%, rgba(252, 115, 77, 0.7) 78%, transparent);
}

.horizon--mix .horizon-glow {
  background:
    radial-gradient(closest-side at 35% 50%, rgba(2, 151, 222, 0.26), transparent 70%),
    radial-gradient(closest-side at 65% 50%, rgba(252, 115, 77, 0.24), transparent 70%);
}
</style>

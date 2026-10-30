<script setup lang="ts">
const benefits = [
  { title: 'Gründungskonditionen', text: 'Sonderkonditionen auf Ihr erstes Projekt, die es später so nicht mehr gibt.' },
  { title: 'Direkter Draht zum Gründer', text: 'Kein Account-Manager, kein Ticketsystem. Sie haben Eric direkt am Telefon.' },
  { title: 'Volle Priorität', text: 'Ihr Projekt bekommt unsere ungeteilte Aufmerksamkeit, bei Umsetzung und Support.' },
  { title: 'Mitgestalten', text: 'Ihr Feedback fließt direkt in unsere Lösungen ein. Sie prägen, wie wir arbeiten.' },
]

const free = site.foundingSlots - site.foundingTaken
</script>

<template>
  <section id="gruendungskunden" class="relative py-14 sm:py-20 lg:py-28">
    <HorizonGlow tone="mix" />
    <div class="container-site">
      <div class="reveal relative overflow-hidden rounded-[2rem] p-px">
        <!-- Verlaufsrahmen -->
        <div class="absolute inset-0 bg-gradient-to-br from-electric/70 via-[var(--line)] to-cantaloupe/70" aria-hidden="true" />
        <div class="grain relative overflow-hidden rounded-[calc(2rem-1px)] bg-ink-800 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div class="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cantaloupe/15 blur-3xl" aria-hidden="true" />
          <div class="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-electric/15 blur-3xl" aria-hidden="true" />

          <div class="relative grid gap-14 lg:grid-cols-12">
            <div class="lg:col-span-6">
              <p class="eyebrow">Gründungskunden-Programm</p>
              <h2 class="heading mt-6">
                Wir sind neu. <span class="accent">Das ist Ihr Vorteil.</span>
              </h2>
              <p class="mt-6 max-w-lg text-[15px] leading-7 text-fg/70">
                Doblyx ist ein junges Unternehmen, und das sagen wir offen. Statt geschönter Referenzen bieten wir unseren ersten {{ site.foundingSlots }} Kunden etwas, das große Agenturen nicht können: volle Aufmerksamkeit und besondere Konditionen.
              </p>
              <p class="mt-4 max-w-lg text-[14px] leading-6 text-muted">
                Unsere einzige Bitte: ehrliches Feedback und, wenn Sie zufrieden sind, eine kurze Fallstudie über unser gemeinsames Projekt.
              </p>

              <div class="mt-10 flex flex-wrap items-center gap-6">
                <a href="#kontakt" class="btn-primary" @click.prevent="useScrollTo('kontakt')">
                  Platz anfragen <span class="arrow" aria-hidden="true">→</span>
                </a>
                <div class="flex items-center gap-3">
                  <div class="flex gap-1.5" aria-hidden="true">
                    <span
                      v-for="n in site.foundingSlots"
                      :key="n"
                      class="h-2.5 w-2.5 rounded-full"
                      :class="n <= site.foundingTaken ? 'bg-[var(--line-strong)]' : 'bg-cantaloupe'"
                    />
                  </div>
                  <span class="font-mono text-[11px] uppercase tracking-[0.15em] text-fg/75">
                    {{ free }} von {{ site.foundingSlots }} Plätzen frei
                  </span>
                </div>
              </div>
            </div>

            <ul class="grid gap-3 self-center sm:grid-cols-2 lg:col-span-6">
              <li v-for="benefit in benefits" :key="benefit.title" class="glass-card rounded-2xl p-6 sm:p-7">
                <svg class="h-4 w-4 text-cantaloupe" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <h3 class="mt-4 text-[15px] font-medium text-fg">{{ benefit.title }}</h3>
                <p class="mt-1.5 text-[13.5px] leading-6 text-muted">{{ benefit.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

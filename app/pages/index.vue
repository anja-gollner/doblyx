<script setup lang="ts">
usePageMeta('/')
</script>

<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <div class="starfield">
        <PainSection />
        <ServicesSection />
        <UseCasesSection />
        <OfferSection />
        <PilotSection />
        <PromiseSection />
        <FaqListe :items="faqHome" />
        <ContactSection />
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }),
    },
  ],
})
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
        <ProcessSection />
        <FoundingSection />
        <FounderSection />
        <PromiseSection />
        <FaqSection />
        <ContactSection />
      </div>
    </main>
    <FooterSection />
  </div>
</template>

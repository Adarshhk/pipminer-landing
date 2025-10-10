<template>

  <VueLenis root>
    <div class="bg-custom-black text-white min-h-screen font-secondary m">
      <!-- Tabs Navigation -->
      <div
        class="flex fixed top-16 lg:top-28 w-[100vw] bg-custom-black overflow-auto justify-start lg:justify-center dgap-0 items-center lg:gap-6  border-b border-white/40">
        <a v-for="tab in tabs" :key="tab.id" :href="tab.id"
          class="px-4 lg:px-6 py-2 text-[13.33px] uppercase text-nowrap font-medium transition-all duration-300"
          :class="activeSection === tab.id ? 'bg-white text-black' : 'bg-transparent text-gray-300 hover:text-white'">
          {{ tab.label }}
        </a>
      </div>

      <!-- Sections -->
      <FixedSocials />
      <TermsSection id="terms" />
      <RefundSection id="refund" />
      <Privacy id="privacy" />
      <Disclaimer id="disclaimer" />
      <Footer />
    </div>
  </VueLenis>
</template>

<script setup>
import FixedSocials from '@/components/FixedSocials.vue';
import Footer from '@/components/Footer.vue';
import Disclaimer from '@/section/Disclaimer.vue';
import Privacy from '@/section/Privacy.vue';
import RefundSection from '@/section/RefundSection.vue';
import TermsSection from '@/section/TermsSection.vue';

import { VueLenis } from 'lenis/vue'

const tabs = [
  { id: '#terms', label: 'Terms & Conditions' },
  { id: '#refund', label: 'Refund Policy' },
  { id: '#privacy', label: 'Privacy Policy' },
  { id: '#disclaimer', label: 'Disclaimer' },
];

</script>

<style scoped></style>
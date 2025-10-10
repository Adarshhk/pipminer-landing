<template>
    <div class="items-center justify-center flex-col p-8 lg:p-24 bg-custom-black ">
        <p
            class="uppercase tracking-[23%] text-center font-secondary font-[500] text-[14px] lg:text-[19.2px] text-white">
            Trusted. Transparent. Verifiable.
        </p>

        <h1
            class="mt-8 text-center font-[400] max-w-6xl mx-auto text-[28px] lg:text-[36px] text-white leading-tight  font-primary">
            Every return, every number, every trade is transparent and verifiable. No hidden data, no inflated results —
            just real growth, backed by proof you can see.
        </h1>

        <!-- Section indicators -->
        <div class="flex gap-3 justify-center mt-8">
            <button v-for="(section, index) in sections" :key="index" @click="currentSection = index" :class="[
                'h-4 w-4 transition-all duration-300',
                currentSection === index ? 'bg-white scale-110' : 'bg-white/20 scale-90'
            ]">
            </button>
        </div>
        <!-- Changing sections -->
        <div class="relative w-full mx-auto h-[60vh] mt-8 lg:mt-0 lg:min-h-[90vh]">
            <div class="flex flex-col items-center justify-center overflow-hidden h-[60vh]  lg:h-[90vh]">
                <div v-if="currentSection === 0" class="h-full flex-1">
                    <Carousel :images="images" />
                </div>

                <div v-if="currentSection === 1" data-lenis-prevent
                    class="rounded-lg h-[80vh] overflow-auto cursor-pointer  grid grid-cols-2">
                    <img src="/screenshot2.webp" class="w-full object-contain" alt="Preview" />
                    <img src="/webp/screenshot.webp" class="w-full object-contain" alt="Preview" />
                </div>


            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/Carousel.vue';

const sections = [
    { title: 'Carousel Section' },
    { title: 'Screenshot 2 Section' },
];

const images = [
    '/webp/mt (1).jpeg',
    '/webp/mt (2).jpeg',
    '/webp/mt (3).jpeg',
    '/webp/mt (4).jpeg',
    '/webp/mt (5).jpeg',
    '/webp/mt (6).jpeg',
    '/webp/mt (7).jpeg',
    '/webp/mt (8).jpeg',
];


const currentSection = ref(0);
</script>

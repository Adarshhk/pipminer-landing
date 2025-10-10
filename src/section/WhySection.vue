<template>
    <div ref="containerRef"
        class="h-fit lg:h-[120vh] py-16 lg:py-0 flex flex-col w-[99vw] overflow-hidden justify-center items-center lg:gap-20 gap-8 bg-gradient-to-b from-[#0B3A19] to-black from-40%">
        <p class="uppercase tracking-[23%] font-secondary font-[500] text-[14px] lg:text-[19.2px] text-white">
            90% follow the crowd. We don’t.
        </p>

        <h1 class="text-center font-[400] text-[36px] lg:text-[81px] text-white leading-[84px] font-primary max-w-5xl">
            Why We’re Different
        </h1>

        <div class="flex lg:flex-row flex-col items-center justify-center gap-6">
            <!-- card-1 -->
            <div id="card1" class="bg-[#323D32] rounded-lg p-8 w-fit lg:p-10 space-y-2 -rotate-12 h-fit">
                <h2 class="text-white font-primary text-[24px] lg:text-[41px]">
                    others (90%)
                </h2>
                <p v-for="(item, i) in [
                    '-- Depend on luck',
                    '-- Use martingale & grid',
                    '-- Chase losses',
                    '-- Emotion-driven',
                    '-- Blind indicators',
                    '-- Short-term hype',
                ]" :key="i" class="text-[14px] lg:text-[19px] text-white font-[400] font-secondary">
                    {{ item }}
                </p>
            </div>

            <!-- card-2 -->
            <div id="card2"
                class="bg-white rounded-lg p-12 lg:p-16 overflow-hidden lg:-translate-x-5 space-y-2 z-10 rotate-12 relative">
                <img src="/svg/logo.svg" class="absolute -top-5 -right-2 w-28" alt="" />
                <h2 class="text-custom-black font-primary text-[41px]">us</h2>
                <p v-for="(item, i) in [
                    '-- Built on logic',
                    '-- Pure technical strategy',
                    '-- Control risk smartly',
                    '-- Data-driven',
                    '-- Market-structure based',
                    '-- Long-term consistency',
                ]" :key="i" class="text-[14px] lg:text-[19px] text-custom-black font-[400] font-secondary">
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref(null)
let timeline = null

onMounted(() => {
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 2,
            // pin: true, // optional if you want to hold the section while animating
        },
    })

    // Card 1 - from left
    timeline.from('#card1', {
        x: -300,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
    })

    // Card 2 - from right
    timeline.from(
        '#card2',
        {
            x: 300,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
        },
        '<'// starts at the same time as card1
    )
})
</script>

<style lang="scss" scoped></style>

<template>
    <div class="">
        <!-- Main Container -->
        <div ref="containerRef" class="w-full relative z-[20] overflow-hidden">
            <!-- Inner Container with Doors -->
            <div ref="innerContainerRef" class="w-full h-screen bg-black relative"
                style="perspective: 1000px; transform-origin: center center; will-change: transform">
                <!-- Background Image -->
                <img src="/webp/bg-hero.webp" alt="Background" class="w-full h-full object-cover relative z-[20]" />

                <!-- Front Text Content -->
                <div ref="frontContentRef"
                    class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[80%] p-4 flex flex-col justify-center items-center gap-6 text-center text-white z-[60]">
                    <h1 class="font-[400] text-[48px] lg:text-[80px] leading-tight font-primary">
                        those who automate, accumulate.
                    </h1>
                    <p class="font-secondary font-[500] text-[16px] lg:text-[20px] max-w-3xl">
                        if you can watch gold move then why aren't you letting it earn for you?
                    </p>
                </div>

                <!-- Scroll Down Indicator -->
                <div ref="scrollIndicatorRef"
                    class="absolute bottom-8 left-1/2 -translate-x-1/2 z-[70] flex flex-col items-center gap-2">
                    <span class="text-white text-sm font-secondary tracking-wider uppercase">Scroll</span>
                    <div class="scroll-indicator">
                        <div class="scroll-line"></div>
                    </div>
                </div>

                <!-- Left Door -->
                <img ref="leftDoorRef" src="/webp/1.webp" alt="Left Door"
                    class="w-[49%] lg:w-[14%] object-cover absolute top-36 right-[15px] lg:top-20 z-10 lg:right-[37%] "
                    style="transform-origin: right center" />

                <!-- Right Door -->
                <img ref="rightDoorRef" src="/webp/2.webp" alt="Right Door"
                    class="w-[46%]  lg:w-[14%] object-cover left-2 absolute top-36 lg:top-20 lg:left-[37%] z-10"
                    style="transform-origin: left center" />
            </div>

            <!-- Reveal Section -->
            <div ref="revealSectionRef" class="w-full h-screen absolute top-0 opacity-0 z-40 overflow-hidden">
                <!-- Gold Background -->
                <img src="/webp/gold_bg.webp" alt="Gold Background" class="w-full h-full object-cover" />

                <!-- Content Container -->
                <div ref="contentRef"
                    class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[80%] p-4 flex flex-col justify-end items-center gap-8 text-center text-white overflow-hidden">

                    <p class="uppercase tracking-[0.23em] font-secondary font-[500] text-[14px] lg:text-[19.2px]">
                        opportunities don't send reminders.
                    </p>

                    <h1
                        class="font-[400] text-[36px] lg:text-[72px] leading-tight lg:leading-[74px] font-primary max-w-5xl">
                        you've seen gold rise.<br />
                        you've seen it fall.<br />
                        but have you seen it move for you?
                    </h1>

                    <p class="font-secondary font-[500] text-[14px] lg:text-[19.2px]">
                        while most traders react, our strategy predicts.<br />
                        it's not about timing the market — it's about teaching it to work for you.
                    </p>

                    <!-- <Button title="watch video" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button.vue';

gsap.registerPlugin(ScrollTrigger);

const containerRef = ref(null);
const innerContainerRef = ref(null);
const leftDoorRef = ref(null);
const rightDoorRef = ref(null);
const revealSectionRef = ref(null);
const contentRef = ref(null);
const frontContentRef = ref(null);
const scrollIndicatorRef = ref(null);

let timeline = null;

onMounted(() => {
    // Initial animation for front content on page load
    gsap.from(frontContentRef.value.children, {
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        duration: 1.2,
        stagger: 0.2,
        delay: 0.3,
    });

    // Animate scroll indicator
    gsap.from(scrollIndicatorRef.value, {
        y: -20,
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
        delay: 1.5,
    });

    // Continuous bounce animation for scroll indicator
    gsap.to(scrollIndicatorRef.value, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
        delay: 2,
    });

    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.value,
            start: 'top top',
            end: 'bottom 0%',
            scrub: 2,
            pin: true,
        },
    });

    // Fade out scroll indicator
    timeline.to(scrollIndicatorRef.value, {
        opacity: 0,
        ease: 'power2.in',
    }, 0);

    // Fade out and move up front content
    timeline.to(frontContentRef.value, {
        y: -100,
        opacity: 0,
        ease: 'power2.in',
    }, 0);

    // Doors open
    timeline.to(leftDoorRef.value, {
        rotateY: -80,
        transformOrigin: 'right center',
        ease: 'none',
    }, 0);

    timeline.to(rightDoorRef.value, {
        rotateY: 80,
        transformOrigin: 'left center',
        ease: 'none',
    }, 0);

    // Zoom effect
    timeline.to(innerContainerRef.value, {
        scale: 5.4,
        transformOrigin: 'center center',
        ease: 'power4.inOut',
    }, 0.2);

    // Reveal gold section
    timeline.to(revealSectionRef.value, {
        opacity: 1,
        ease: 'power2.inOut',
    }, 0.3);

    // New content animation
    timeline.from(contentRef.value.children, {
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        duration: 1.2,
        stagger: 0.2,
    }, 0.9);
});

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (timeline) timeline.kill();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.scroll-indicator {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}

.scroll-line {
    width: 2px;
    height: 10px;
    background: white;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-animation 2s infinite;
}

@keyframes scroll-animation {
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(-10px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
    }
}
</style>
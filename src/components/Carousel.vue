<template>
    <div class="relative w-full h-full  max-w-4xl mx-auto py-10 px-4">
        <!-- Carousel Container -->
        <div class="relative h-full flex justify-center items-center overflow-visible" @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide">
            <div class="flex transition-transform duration-700 h-full ease-in-out gap-6" :style="carouselTransform">
                <!-- Extended slides for infinite loop -->
                <div v-for="(image, index) in extendedImages" :key="`slide-${index}`"
                    class="flex-shrink-0   transition-all h-full duration-700 ease-in-out"
                    :class="getSlideClasses(index)" :style="getSlideStyle(index)">
                    <div class="relative w-full h-full  overflow-hidden shadow-2xl">
                        <img :src="image" :alt="`Slide ${index}`" class="w-full h-full object-contain"
                            draggable="false" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Previous Button -->
        <!-- <button @click="prevSlide" class="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 
                   bg-white/90 hover:bg-white text-gray-800 
                   w-12 h-12 rounded-full shadow-lg
                   flex items-center justify-center
                   transition-all duration-300 hover:scale-110
                   backdrop-blur-sm" aria-label="Previous slide">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
        </button> -->

        <!-- Next Button -->
        <!-- <button @click="nextSlide" class="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 
                   bg-white/90 hover:bg-white text-gray-800 
                   w-12 h-12 rounded-full shadow-lg
                   flex items-center justify-center
                   transition-all duration-300 hover:scale-110
                   backdrop-blur-sm" aria-label="Next slide">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
        </button> -->

        <!-- Dots Indicator -->

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        required: true,
        validator: (value) => value.length > 0
    },
    interval: {
        type: Number,
        default: 1000
    },
    slideWidth: {
        type: String,
        default: '280px' // Width of each slide
    }
})

const activeIndex = ref(0)
const currentPosition = ref(2) // Start at position 2 (first real slide, with 2 clones before)
const isTransitioning = ref(false)
const isPaused = ref(false)
let timer = null

// Create extended array for infinite loop: [secondLast, last, ...images, first, second]
const extendedImages = computed(() => {
    if (props.images.length === 0) return []
    const len = props.images.length
    return [
        props.images[len - 2], // Second to last
        props.images[len - 1], // Last
        ...props.images,       // All original images
        props.images[0],       // First
        props.images[1]        // Second
    ]
})

// Calculate carousel transform
const carouselTransform = computed(() => {
    const slideWidth = parseInt(props.slideWidth)
    const gap = 24 // gap-6 = 24px
    const offset = currentPosition.value * (slideWidth + gap)
    return {
        transform: `translateX(calc(50% - ${offset}px - ${slideWidth / 2}px))`
    }
})

// Get slide classes based on position relative to active slide
const getSlideClasses = (index) => {
    const centerIndex = currentPosition.value
    const distance = Math.abs(index - centerIndex)

    return {
        'z-20': index === centerIndex,
        'z-10': index !== centerIndex
    }
}

// Get slide styles (scale and opacity based on position)
const getSlideStyle = (index) => {
    const centerIndex = currentPosition.value
    const isCenter = index === centerIndex

    return {
        width: props.slideWidth,
        aspectRatio: '3/4',
        transform: isCenter ? 'scale(1)' : 'scale(0.85)',
        opacity: isCenter ? '1' : '0.6'
    }
}

// Navigate to next slide
const nextSlide = () => {
    if (isTransitioning.value) return

    isTransitioning.value = true
    currentPosition.value++
    activeIndex.value = (activeIndex.value + 1) % props.images.length

    // Check if we've reached the first cloned slide
    setTimeout(() => {
        if (currentPosition.value === props.images.length + 2) {
            // Jump back to the real first slide without animation
            isTransitioning.value = false
            currentPosition.value = 2
        } else {
            isTransitioning.value = false
        }
    }, 700) // Match transition duration
}

// Navigate to previous slide
const prevSlide = () => {
    if (isTransitioning.value) return

    isTransitioning.value = true
    currentPosition.value--
    activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length

    // Check if we've reached the cloned slides at the beginning
    setTimeout(() => {
        if (currentPosition.value === 1) {
            // Jump forward to the real last slide without animation
            isTransitioning.value = false
            currentPosition.value = props.images.length + 1
        } else {
            isTransitioning.value = false
        }
    }, 700) // Match transition duration
}

// Go to specific slide
const goToSlide = (index) => {
    if (isTransitioning.value || activeIndex.value === index) return

    activeIndex.value = index
    currentPosition.value = index + 2 // +2 because first two positions are clones
    resetTimer()
}

// Pause auto-slide on hover
const pauseAutoSlide = () => {
    isPaused.value = true
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

// Resume auto-slide on mouse leave
const resumeAutoSlide = () => {
    isPaused.value = false
    startTimer()
}

// Start auto-slide timer
const startTimer = () => {
    if (timer) clearInterval(timer)
    timer = setInterval(nextSlide, props.interval)
}

// Reset timer (useful when manually navigating)
const resetTimer = () => {
    if (!isPaused.value) {
        startTimer()
    }
}

// Watch for position changes to disable transition temporarily when jumping
watch(currentPosition, (newVal, oldVal) => {
    // If jumping from clone to real (or vice versa)
    const isJump = Math.abs(newVal - oldVal) > 1
    if (isJump && !isTransitioning.value) {
        // Temporarily disable transition for instant jump
        const carousel = document.querySelector('.flex.transition-transform')
        if (carousel) {
            carousel.style.transition = 'none'
            setTimeout(() => {
                carousel.style.transition = ''
            }, 50)
        }
    }
})

onMounted(() => {
    startTimer()
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-transform {
    will-change: transform;
}

/* Prevent image dragging */
img {
    user-select: none;
    -webkit-user-drag: none;
}
</style>
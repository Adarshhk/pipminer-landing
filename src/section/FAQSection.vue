<template>
    <div>
        <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
        <div class="py-8">
            <button @click="showFaq = !showFaq" class="mx-auto flex items-center gap-2 justify-center ">
                <p class="uppercase tracking-[23%] font-secondary font-[500] text-[19.2px] text-custom-white">
                    FAQ'S
                </p>
                <img src="/svg/dropdown.svg" alt="" class="w-4 transition-all duration-300"
                    :class="{ 'rotate-180': showFaq }">
            </button>

            <!-- Smooth height animation -->
            <transition name="faq-dropdown" enter-active-class="transition-all duration-500 ease-out"
                leave-active-class="transition-all duration-500 ease-in">
                <div v-show="showFaq" class="overflow-hidden">
                    <div v-for="(faq, index) in faqs" :key="index" class="p-8 space-y-8">
                        <h2 class="font-bold text-white text-[32px]">{{ faq.question }}</h2>
                        <p class="font-normal text-white/60 text-[20px] whitespace-pre-line">{{ faq.answer }}</p>
                    </div>
                </div>
            </transition>
        </div>

        <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showFaq = ref(false)

const faqs = [
    {
        question: '1. What is PipMiner?',
        answer: 'PipMiner is a smart forex tool for the MT5 platform that automates your trading with great accuracy. We create strategies that aim for over 80% historical accuracy. It finds the best times to trade using strong, pre-set rules.'
    },
    {
        question: '2. Do I need coding or trading experience to use PipMiner?',
        answer: 'Not at all. PipMiner is a plug-and-play system, once connected to your MT5 account, it handles the analysis and trade execution for you.'
    },
    {
        question: '3. Does automating this strategy require a separate server?',
        answer: 'No, not at all. PipMiner is a fully managed, cloud-based platform. There is no need for you to configure or maintain any external servers. Our system runs 24/7, handling all the technical requirements seamlessly.'
    },
    {
        question: '4. What strategy does PipMiner follow?',
        answer: 'PipMiner focuses on smart market entries and controlled exits using trend behavior, volume logic, and price movement without risky grid or martingale systems.'
    },
    {
        question: '5. Is PipMiner an investment or advisory service?',
        answer: 'No. PipMiner is not a financial advisory or investment service. We only provide a technical trading strategy compatible with MT5 brokers.'
    },
    {
        question: '6. Do I need a specific broker to use PipMiner?',
        answer: 'No, PipMiner works with any broker available on the MT5 platform. You can use it with your existing MT5 account.'
    },
    {
        question: '7. Does PipMiner guarantee returns?',
        answer: 'Absolutely not. Trading involves risk, and past performance does not guarantee future results. PipMiner aims to deliver consistency, but outcomes may vary depending on market conditions.'
    },
    {
        question: '8. Is PipMiner safe to use?',
        answer: 'Yes. PipMiner only executes trades within your MT5 account under your full control. We never access your funds or personal credentials.'
    },
    {
        question: '9. How can I get support after purchase?',
        answer: 'You can reach our support team anytime at thepipsminer@gmail.com for setup help, troubleshooting, or general inquiries.'
    }
]
</script>

<style scoped>
/* Smooth dropdown using height transition */
.faq-dropdown-enter-from,
.faq-dropdown-leave-to {
    max-height: 0;
    opacity: 0;
}

.faq-dropdown-enter-to,
.faq-dropdown-leave-from {
    max-height: 1000px;
    opacity: 1;
}

.faq-dropdown-enter-active,
.faq-dropdown-leave-active {
    transition: max-height 0.5s ease, opacity 0.5s ease;
}
</style>

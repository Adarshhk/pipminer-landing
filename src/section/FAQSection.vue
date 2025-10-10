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
                        <p class="font-normal text-white/60 text-[20px]">{{ faq.answer }}</p>
                    </div>
                </div>
            </transition>
        </div>

        <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showFaq = ref(false);

const faqs = [
    {
        question: 'What is PipMiner?',
        answer: 'PipMiner is an advanced trading signal service that provides traders with high-probability trade ideas, detailed entry and exit points, and in-depth market analysis to help them make smarter and more informed manual trading decisions.'
    },
    {
        question: 'Is PipMiner an automated trading bot?',
        answer: 'No, PipMiner is not an automated bot. It’s a signal service that delivers real-time trade alerts and analysis directly to you, while you maintain full control over executing and managing trades on your brokerage platform.'
    },
    {
        question: 'What kind of strategy does PipMiner use?',
        answer: 'PipMiner uses a combination of technical analysis, price action, and market structure to identify high-quality setups with strong risk-to-reward ratios. It avoids risky, automated strategies and focuses on consistent, disciplined trading.'
    },
    {
        question: 'Why does PipMiner avoid Grid and Martingale strategies?',
        answer: 'Because safety comes first. Grid trading can lock up capital during volatility, and Martingale strategies increase risk after losses—both can lead to large drawdowns. PipMiner instead focuses on smart, calculated signals that protect your capital.'
    },
    {
        question: 'Is my capital at risk?',
        answer: 'Yes, all trading carries risk, and losses are possible. While profits can’t be guaranteed, PipMiner helps you manage risk effectively by avoiding dangerous strategies, providing clear Stop Loss levels with each signal, and focusing on quality over quantity.'
    },
    {
        question: 'How do I start using PipMiner?',
        answer: 'To get started, ensure you have a broker account (like start trader or other), use a trading platform such as MetaTrader 4, MetaTrader 5, or TradingView, subscribe to a PipMiner plan, and start receiving signals via Telegram or your chosen channel to execute manually.'
    },
    {
        question: 'Which trading platforms are supported?',
        answer: 'PipMiner signals can be used on all major platforms, including MetaTrader 4 (MT4), MetaTrader 5 (MT5), TradingView, cTrader, or any proprietary broker platform.'
    },
    {
        question: 'Do you offer a free trial?',
        answer: 'Yes, PipMiner occasionally offers a limited free trial or a few complimentary signals so traders can experience the service’s quality before subscribing. You can check the website for any active trial offers or promotions.'
    }
];

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
    /* large enough to fit content */
    opacity: 1;
}

.faq-dropdown-enter-active,
.faq-dropdown-leave-active {
    transition: max-height 0.5s ease, opacity 0.5s ease;
}
</style>

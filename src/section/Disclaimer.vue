<template>
    <div class="min-h-screen p-6 sm:p-12 font-primary" :style="{ backgroundColor: bg }">
        <div class="max-w-7xl mx-auto bg-opacity-60 rounded-2xl p-2 sm:p-16"
            :style="{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }">
            <header class="mb-6 mt-16 sm:mb-10">
                <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight" :style="{ color: accent }">
                    DISCLAIMER
                </h1>
                <p class="mt-2 text-sm sm:text-base text-white/80">
                    Please read this disclaimer carefully before using any PipMiners strategies or tools.
                </p>
            </header>

            <main class="space-y-6 font-secondary">
                <section v-for="(s, i) in sections" :key="i" class="bg-transparent p-4 rounded-lg">
                    <h2 v-if="s.title" class="text-lg sm:text-xl font-medium mb-2" :style="{ color: accent }">
                        {{ s.title }}
                    </h2>
                    <div class="text-sm leading-relaxed text-white/80 space-y-2">
                        <template v-if="Array.isArray(s.content)">
                            <p v-for="(p, idx) in s.content" :key="idx">{{ p }}</p>
                        </template>
                        <template v-else>
                            <p>{{ s.content }}</p>
                        </template>
                    </div>
                </section>
            </main>

            <footer class="mt-8 sm:mt-10 text-sm text-white/70">
                <div>📧 <a :href="`mailto:${contact.email}`" class="underline" :style="{ color: accent }">{{
                    contact.email }}</a></div>
                <div class="mt-1">🌐 <a :href="contact.website" target="_blank" rel="noopener" class="underline"
                        :style="{ color: accent }">{{ contact.website }}</a></div>
            </footer>
        </div>
    </div>
</template>

<script setup>
const bg = '#030504'
const accent = '#c0ed64'

const sections = [
    {
        content: [
            'PipMiners is a strategy seller that provides pre-built trading strategies compatible with MetaTrader platforms. We are not a broker, investment advisor, or SEBI-registered entity, and we do not provide any financial advice, investment recommendations, or trading signals.',
            'All strategies and tools offered by PipMiners are meant strictly for educational and informational purposes. Users are solely responsible for how they use these strategies in their trading accounts.',
            'Past performance of any strategy is not a guarantee of future results. Trading in the forex and financial markets carries a high level of risk.',
            'PipMiners shall not be held responsible or liable for any direct or indirect financial losses, damages, or consequences resulting from the use of our strategies or information.',
            'By purchasing or using any strategy from PipMiners, you acknowledge that you fully understand and accept all the associated risks involved in forex trading.'
        ]
    },
    {
        title: 'Contact Information',
        content: [
            'Email: thepipsminer@gmail.com',
            'Mob No.: 8016374064',
            'Website: www.thepipminers.com'
        ]
    }
]

const contact = {
    email: 'thepipsminer@gmail.com',
    website: 'https://www.thepipminers.com'
}
</script>

<style scoped>
button:focus {
    outline: 3px solid rgba(192, 237, 100, 0.15);
}
</style>

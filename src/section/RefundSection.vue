<template>
    <div class="min-h-screen p-6 sm:p-12 font-primary" :style="{ backgroundColor: bg }">
        <div class="max-w-7xl mx-auto bg-opacity-60 rounded-2xl p-2 sm:p-16"
            :style="{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }">
            <header class="mb-6 sm:mb-10 mt-16">
                <h1 class="text-3xl  sm:text-4xl font-semibold tracking-tight" :style="{ color: accent }">REFUND POLICY
                </h1>
                <p class="mt-2 text-sm sm:text-base text-white/80">Please read this Refund Policy carefully before
                    making a purchase.</p>
            </header>

            <main class="space-y-6">
                <section v-for="(s, i) in sections" :key="i" class="bg-transparent p-4 rounded-lg font-secondary">
                    <h2 class="text-lg sm:text-xl font-medium mb-2" :style="{ color: accent }">{{ i + 1 }}. {{ s.title
                        }}</h2>
                    <div class="text-sm leading-relaxed text-white/80 space-y-2">
                        <template v-if="Array.isArray(s.content)">
                            <p v-for="(p, idx) in s.content" :key="idx">{{ p }}</p>
                        </template>
                        <template v-else>
                            <p>{{ s.content }}</p>
                        </template>

                        <div v-if="s.list" class="mt-2 pl-4 list-inside">
                            <ul class="list-decimal text-white/80 space-y-1">
                                <li v-for="(li, lidx) in s.list" :key="lidx">{{ li }}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="mt-8 sm:mt-10 text-sm text-white/70">
                <div>📧 <a :href="`mailto:${contact.email}`" class="underline" :style="{ color: accent }">{{
                    contact.email }}</a>
                </div>
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
        title: 'Digital Product Policy',
        content: [
            'All our products are digital software-based strategy tools. Once an order is confirmed and the product license is delivered (via email or online access), the sale is considered final.',
            'As digital items cannot be returned, we do not offer refunds, replacements, or cancellations after the product has been delivered or activated.'
        ]
    },
    {
        title: 'No Guarantee of Performance',
        content: [
            'Our software is designed to assist users in systematic trading, but we do not guarantee specific outcomes or performance results.',
            'Market conditions, user settings, broker execution, and risk parameters may impact results. Refund requests based on trading performance, market losses, or user expectations will not be entertained.'
        ]
    },
    {
        title: 'Refund Eligibility (Exceptional Cases)',
        content: 'Refunds will only be considered under the following limited circumstances:',
        list: [
            'You were charged twice for the same order due to a technical error.',
            'You made a duplicate purchase by mistake within a short period.',
            'You did not receive the product access/license within 7 business days after successful payment.',
            'In such cases, please contact us within 7 days of purchase at thepipsminer@gmail.com with your order details. If your case qualifies, we will process the refund within 5–7 working days.'
        ]
    },
    {
        title: 'Responsibility of the User',
        content: [
            'It is the buyer’s responsibility to read all information, product details, and compatibility instructions before purchasing.',
            'Understand that all trading involves risk and our software is only a tool to assist decision-making.',
            'Ensure that MT5 and broker accounts are correctly set up and compatible with the software. We shall not be liable for issues caused by improper configuration, broker restrictions, or unsupported platforms.'
        ]
    },
    {
        title: 'Contact Us',
        content: [
            'If you believe your case qualifies for a refund or need clarification about this policy, please contact us:',
            '📧 thepipsminer@gmail.com',
            '🌐 www.thepipminers.com',
            'Note: By completing a purchase on our website, you acknowledge that you have read, understood, and agreed to this Refund Policy.'
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

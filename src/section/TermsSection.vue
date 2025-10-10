<template>
    <div class="min-h-screen p-6 sm:p-12  font-primary" :style="{ backgroundColor: bg }">
        <div class="max-w-7xl mx-auto bg-opacity-60 rounded-2xl p-2 sm:p-16"
            :style="{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }">
            <header class="mb-6 sm:mb-10">
                <h1 class="text-3xl mt-16 sm:text-4xl font-semibold tracking-tight" :style="{ color: accent }">TERMS
                    &amp;
                    CONDITIONS</h1>
                <p class="mt-2 text-sm sm:text-base text-white/80">PipMiner — Expert Advisor (MT5) software. Please read
                    these terms carefully.</p>
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

            <footer class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-sm text-white/70">
                    <div>Contact: <a :href="`mailto:${contact.email}`" class="underline" :style="{ color: accent }">{{
                        contact.email
                            }}</a> • {{ contact.phone }}</div>
                    <div class="mt-1">Website: <a :href="contact.website" target="_blank" rel="noopener"
                            class="underline" :style="{ color: accent }">{{ contact.website }}</a></div>
                </div>


            </footer>
        </div>
    </div>
</template>

<script setup>
const bg = '#030504'
const accent = '#c0ed64'

const sections = [
    {
        title: 'Nature of Service',
        content: [
            'PipMiner is an Expert Advisor (EA) / strategy software designed for use on the MetaTrader 5 (MT5) trading platform.',
            'We are only a provider of software tools and strategies that execute trading logic based on predefined conditions. We are not a broker, financial advisor, research analyst, or investment advisor, and we do not provide investment advice, tips, or recommendations. All trades executed using our product are fully controlled and managed by the user through their own broker accounts.'
        ]
    },
    {
        title: 'Disclaimer of Investment Advice',
        content: [
            'Nothing on our website, marketing materials, or communications should be construed as financial or investment advice.',
            'Any performance data, backtesting results, or trade examples shown are for educational and illustrative purposes only and do not guarantee future results. The user acknowledges that trading in financial markets, including Forex and commodities such as Gold (XAUUSD), involves substantial risk of loss and may not be suitable for all investors.'
        ]
    },
    {
        title: 'No Guarantee of Results',
        content: 'While PipMiner is developed with a focus on disciplined strategy execution, we do not guarantee profits, returns, or performance consistency. Market conditions vary and may significantly affect results. The user assumes full responsibility for any trading outcomes.'
    },
    {
        title: 'User Responsibility',
        content: 'Users must ensure they understand how the EA functions before applying it to live trading. Users are solely responsible for selecting brokers, setting lot sizes, risk parameters, and managing funds. We shall not be held responsible for any financial loss, hardware or software issues, connectivity problems, or user misconfiguration.'
    },
    {
        title: 'No Association with Brokers',
        content: 'PipMiner and its developers have no affiliation or partnership with any broker or trading platform. Compatibility with MT5 or other platforms does not imply endorsement or partnership.'
    },
    {
        title: 'Refund Policy',
        content: 'Due to the digital and intellectual nature of our product, all sales are final. Once the software is delivered, no refund, exchange, or cancellation will be provided.'
    },
    {
        title: 'Limitation of Liability',
        content: [
            'Under no circumstances shall PipMiner, its developers, or associates be held liable for:',
            '• Any direct or indirect loss or damage arising from the use or misuse of our software.',
            '• Financial losses, system errors, or account suspensions arising from user actions or broker decisions.',
            '• Any claims or disputes related to market behavior, broker execution, or third-party services.',
            'The user agrees to use the software entirely at their own risk.'
        ]
    },
    {
        title: 'Compliance',
        content: 'Users must comply with all applicable financial laws and regulations in their respective jurisdictions. PipMiner does not promote, encourage, or facilitate any form of unregulated trading or illegal financial activity.'
    },
    {
        title: 'Intellectual Property',
        content: 'PipMiner and all associated materials are the intellectual property of [Your Company Name]. No user may copy, resell, modify, or distribute the software without written consent.'
    },
    {
        title: 'Amendments',
        content: 'We reserve the right to modify or update these Terms at any time without prior notice. Continued use of the software or website after any changes constitutes acceptance of the updated Terms.'
    },
    {
        title: 'Contact',
        content: [
            'For any queries related to these Terms, contact:',
            'Email : thepipsminer@gmail.com',
            'Mob no. : 8016374064',
            'Website: www.thepipminers.com'
        ]
    }
]

function printPage() {
    window.print()
}

function accept() {
    alert('You accepted the Terms & Conditions')
}

const contact = {
    email: 'thepipsminer@gmail.com',
    phone: '8016374064',
    website: 'https://www.thepipminers.com'
}
</script>

<style scoped>
button:focus {
    outline: 3px solid rgba(192, 237, 100, 0.15);
}
</style>

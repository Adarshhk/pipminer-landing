<template>
    <div class="min-h-screen font-primary p-6 sm:p-12" :style="{ backgroundColor: bg }">
        <div class="max-w-7xl mx-auto bg-opacity-60 rounded-2xl p-2 sm:p-16"
            :style="{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }">
            <header class="mb-6 mt-16 sm:mb-10">
                <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight" :style="{ color: accent }">PRIVACY POLICY
                </h1>
                <p class="mt-2 text-sm sm:text-base text-white/80">This Privacy Policy outlines how PipMiners collects,
                    uses, and protects your information.</p>
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
        title: 'Introduction',
        content: 'This Privacy Policy describes how PipMiners ("we," "us," or "our") collects, uses, and protects your personal information when you access and use our trading strategy services. We are committed to safeguarding your privacy and ensuring transparency about our data practices.'
    },
    {
        title: 'Information We Collect',
        content: 'We collect information you provide directly to us, including your name, email address, and payment details when you purchase our trading strategies. We also automatically collect technical information such as your IP address, device type, and browser information when you visit our website. Additionally, we may collect information about your interactions with our services, including strategy downloads and customer support inquiries.'
    },
    {
        title: 'How We Use Your Information',
        content: 'We use your personal information to process your purchases and provide access to our trading strategies, communicate with you about our services and updates, improve our strategies and user experience, and comply with legal obligations and prevent fraudulent activities.'
    },
    {
        title: 'Information Sharing and Disclosure',
        content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, when required by law or to protect our rights, and in connection with business transfers such as mergers or acquisitions.'
    },
    {
        title: 'Data Security',
        content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.'
    },
    {
        title: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal information stored with us. You may also opt out of marketing communications at any time by using the unsubscribe link in our emails or contacting us directly.'
    },
    {
        title: 'Data Retention',
        content: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'
    },
    {
        title: 'Third-Party Links',
        content: 'Our website may contain links to third-party sites, including MetaTrader platforms and broker websites. We are not responsible for the privacy practices or content of these external sites.'
    },
    {
        title: 'Changes to This Policy',
        content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.'
    },
    {
        title: 'Contact Us',
        content: [
            'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
            'Email: thepipsminer@gmail.com',
            'Mob No.: 8016374064',
            'Website: www.thepipminers.com',
            'By using our services, you acknowledge that you have read and understood this Privacy Policy.'
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

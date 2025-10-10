<template>
    <footer class="bg-black text-white px-4 py-24  font-secondary">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-12 mb-12">
                <!-- Logo -->
                <div class="flex flex-col gap-4 items-start col-span-2 lg:col-span-3">
                    <div class="flex items-center gap-2">

                        <img src="/svg/logo-full.svg" class="min-w-24" alt="">
                    </div>
                    <p class="text-white/40 text-[12px]">

                        PipMiners is a strategy seller that provides pre-built trading strategies compatible with
                        MetaTrader
                        platforms. We are not a broker, investment advisor, or SEBI-registered entity, and we do not
                        provide
                        any financial advice, investment recommendations, or trading signals. All strategies and tools
                        offered by PipMiners are meant strictly for educational and informational purposes. Users are
                        solely
                        responsible for how they use these strategies in their trading accounts. Past performance of any
                        strategy is not a guarantee of future results. Trading in the forex and financial markets
                        carries a
                        high level of risk, and you may lose part or all of your invested capital. PipMiners shall not
                        be
                        held responsible or liable for any direct or indirect financial losses, damages, or consequences
                        resulting from the use of our strategies or information. By purchasing or using any strategy
                        from
                        PipMiners, you acknowledge that you fully understand and accept all the associated risks
                        involved in
                        forex trading.
                    </p>
                </div>

                <!-- Company -->

                <div>

                </div>
                <!-- Utilities -->
                <div>
                    <h3 class="text-[16px] font-semibold mb-4">Utilities</h3>
                    <ul class="space-y-3">
                        <li>
                            <RouterLink to="/" class="text-[16px] text-white/60 font-[400] hover:text-white">
                                Terms of Service
                            </RouterLink>
                        </li>
                        <li>
                            <a href="#" @click.prevent="goToSection('privacy')"
                                class="text-[16px] text-white/60 font-[400] hover:text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="goToSection('refund')"
                                class="text-[16px] text-white/60 font-[400] hover:text-white">
                                Refund Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="goToSection('disclaimer')"
                                class="text-[16px] text-white/60 font-[400] hover:text-white">
                                Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Social Media -->
                <div>
                    <h3 class="text-[16px] font-semibold mb-4">Follow Us on</h3>
                    <div class="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61581843548123" target="_blank"
                            class="text-[16px] text-white/60 font-[400]" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>

                        <a href="https://www.youtube.com/@thepipsminer" target="_blank"
                            class="text-[16px] text-white/60 font-[400]" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/thepipminers/" target="_blank"
                            class="text-[16px] text-white/60 font-[400]" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { nextTick, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

const goToSection = (sectionId) => {
    if (route.path !== '/about') {
        // Navigate to /about with hash
        router.push({ path: '/about', hash: `#${sectionId}` });
    } else {
        scrollToSection(sectionId);
    }
};

// Smooth scroll function
const scrollToSection = async (sectionId) => {
    await nextTick(); // wait for DOM update
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Handle direct access with hash (on /about)
onMounted(() => {
    const hash = route.hash.replace('#', '');
    if (hash) {
        scrollToSection(hash);
    }
});
</script>


<style scoped>
/* Additional styles if needed beyond Tailwind */
</style>
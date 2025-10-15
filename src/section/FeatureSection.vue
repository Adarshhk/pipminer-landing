<template>
    <div class="h-full lg:min-h-[120vh] flex items-center justify-center flex-col">
        <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
        <div
            class="h-[90%] lg:h-[80%] p-8 lg:p-0 lg:px-16 w-full  bg-gradient-to-r from-black via-[#131313] to-black grid lg:grid-cols-2 grid-cols-1">
            <div class="flex justify-center flex-col gap-8">
                <p
                    class="uppercase tracking-[23%] font-secondary font-[500] text-[14px] lg:text-[19.2px] text-custom-white">
                    Seamless with any broker.
                </p>

                <h1
                    class="font-[400] text-[44px] lg:text-[81px] text-custom-white leading-tight lg:leading-[84px] font-primary max-w-5xl">
                    No tech tantrums. <br />
                    No broker boundaries.<br />
                </h1>

                <p class=" font-secondary font-[500] text-[19.2px] text-custom-white">
                    Plug it in, and you’re good to go — trade without interruptions.

                </p>

                <Button @click="callPhone" title="book a call" />
            </div>

            <div class="hidden py-10 lg:flex justify-center items-center">
                <img class="w-[90%]" src="/webp/feature.webp" alt="">
            </div>

        </div>
        <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';

function callPhone() {
    window.open('https://calendly.com/thepipsminer/30min', '_blank')
}

</script>

<style lang="scss" scoped></style>
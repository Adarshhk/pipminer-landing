<template>

    <div class="h-[2px] w-full bg-gradient-to-r from-[#00000000] via-[#4A4444] to-[#00000000]" />
    <div class=" w-full min-h-[80vh] bg-black grid grid-cols-1 lg:grid-cols-2">
        <div class="flex justify-center flex-col gap-8 p-8 lg:p-16">


            <h1
                class="font-[400] text-[44px] lg:text-[81px] text-custom-white leading-tight lg:leading-[84px] font-primary max-w-5xl">
                Your capital deserves
                better returns
            </h1>

            <p class=" font-secondary font-[500] text-[19.2px] text-custom-white">
                Because smart investments don’t wait.
            </p>

            <Button @click="callPhone" title="begin now." />
        </div>

        <div class="object-contain h-full ">
            <img src="/webp/wealth.webp" class="object-cover h-full w-full" alt="">
        </div>

    </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';

function callPhone() {
    window.location.href = `tel:${8016374064}`;
}


</script>

<style scoped></style>
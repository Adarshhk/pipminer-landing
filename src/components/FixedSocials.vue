<template>
    <div class="fixed top-1/2 right-0 flex flex-col gap-4 z-[100]">
        <button @click="openWhatsApp" class="p-2 bg-green-500">
            <img src="/svg/whatsapp.svg" class="w-8" alt="">
        </button>
        <!-- <button class="p-2 bg-[#2da7e4]">
            <img src="/svg/telegram.svg" class="w-8" alt="">
        </button> -->
    </div>
</template>

<script setup>

const openWhatsApp = () => {
    window.open(`https://wa.me/${8016374064}`, '_blank');
};

</script>

<style lang="scss" scoped></style>
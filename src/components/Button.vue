<template>
    <button @click="emit('click')"
        class="bg-custom-yellow text-custom-black font-[500] font-secondary text-[19.2px] w-56 py-4"
        :class="props.class">
        {{ props.title }}
    </button>
</template>

<script setup>

const emit = defineEmits(['click']);
const props = defineProps({
    title: String,
    class: String
})

</script>

<style lang="scss" scoped></style>
<template>
  
</template>

<script setup>
    import {ref} from "vue"

    const props = defineProps({
        question: Object,
        index: Number,
    });

    const emit = defineEmits(["change", "addQuestion", "deleteQuestion"]);

    // Re-create the whole question data to avoid unintentional reference change
    const model = ref(JSON.parse(JSON.stringify(props.question)));
</script>

<style>

</style>
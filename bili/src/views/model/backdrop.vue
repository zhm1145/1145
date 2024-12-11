<!--模态框的展示的遮罩层-->
<template>
    <div class="backdrop"  @click="emits('closeModal')"  ></div>
</template>

<script setup>

   const  props = {
        showBackdrop: {
            type: Boolean,
            default: false
        }
    }
    const emits = defineEmits(['closeModal'])


</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明灰色背景 */
    z-index: 1001; /* 确保遮罩层在最顶层 */
}
</style>
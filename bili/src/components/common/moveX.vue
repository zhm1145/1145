<template>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default function useParallaxEffect() {
    const initX = ref(0); // 初始值
    const moveX = ref(0); // 偏移值

    function handleMouseOver(e) {
        initX.value = e.pageX;
    }

    function handleMouseMove(e) {
        moveX.value = e.pageX - initX.value;
        animate();
    }

    function animate() {
        const layers = document.querySelectorAll('.layer');
        layers.forEach(layer => {
            layer.style.transform = `translate(${moveX.value}px, 0)`;
        });
    }

    onMounted(() => {
        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseover', handleMouseOver);
    });

    onUnmounted(() => {
        document.body.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseover', handleMouseOver);
    });

    return {
        moveX
    };
}
</script>

<style scoped>

</style>
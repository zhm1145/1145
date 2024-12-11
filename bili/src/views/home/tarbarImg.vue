<!--仿bilibili的视差滚动到效果-->
<template>
    <div ref="imgApp" class="imgApp" style="display: none;">

    </div>
</template>

<script setup>
import {createVNode, onBeforeMount, onMounted, onUnmounted, ref} from 'vue';


const barnerImagesData = [
    {
        url: 'https://pic.imgdb.cn/item/64d89f131ddac507ccdb7db2.webp',
        transform: [1, 0, 0, 1, 0, 0],
        width: 1950,
        a: 0.01
    },
    {
        url: 'https://pic.imgdb.cn/item/64d89f821ddac507ccdc71e4.webp',
        transform: [1, 0, 0, 1, -240, -5],
        width: 457.5,
        deg: -Math.PI / 60000,
        a: 0.035,
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc10d9.webp',
        transform: [1, 0, 0, 1, -300, 45],
        width: 157.5,
        deg: -Math.PI / 15000,
        a: 0.03,
        g: -0.02
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f811ddac507ccdc715c.webp',
        transform: [1, 0, 0, 1, -180, 0],
        width: 314.3,
        a: -0.035
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc64c2.webp',
        transform: [1, 0, 0, 1, -300, 20],
        width: 571.2,
        deg: Math.PI / 40000,
        a: 0.05
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc65e6.webp',
        transform: [1, 0, 0, 1, 100, 0],
        width: 1446,
        a: 0.01
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc655c.webp',
        transform: [1, 0, 0, 1, 220, 0],
        width: 158.25,
        deg: Math.PI / 10000,
        a: 0.06,
        g: 0.045
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc6536.webp',
        transform: [1, 0, 0, 1, -240, 0],
        width: 1721.3,
        a: 0.01
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f811ddac507ccdc7133.webp',
        transform: [1, 0, 0, 1, 320, 0],
        width: 642.96,
        a: 0.075,
        g: -0.025
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc649b.webp',
        transform: [1, 0, 0, 1, 20, 0],
        blur: 1,
        width: 2131.5,
        a: 0.18
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f5c1ddac507ccdc1bbd.webp',
        transform: [1, 0, 0, 1, 400, 0],
        blur: 2.5,
        width: 299.52,
        deg: -Math.PI / 30000,
        a: 0.15,
        g: -0.02
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f571ddac507ccdc113d.webp',
        transform: [1, 0, 0, 1, 0, 10],
        width: 457.1,
        deg: Math.PI / 20000,
        f: 0.0001,
        a: 0.06,
        g: 0.01
    },
    {
        url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc10aa.webp',
        transform: [1, 0, 0, 1, -150, 0],
        width: 419.2,
        opacity: [0.1, 1],
        a: -0.02
    },
    {
        url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc1077.webp',
        transform: [1, 0, 0, 1, 40, 10],
        width: 816.9,
        blur: 1,
        a: 0.09
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc102a.webp',
        transform: [1, 0, 0, 1, 20, 0],
        blur: 3,
        width: 1805.6,
        a: 0.3
    }, {
        url: 'https://pic.imgdb.cn/item/64d89f821ddac507ccdc71c6.webp',
        transform: [1, 0, 0, 1, 0, 0],
        width: 2400,
        a: 0.25
    }
]
const initX = ref(0);
const moveX = ref(0);
const handleMouseOver = (e) => {
    initX.value = e.pageX;
};

const handleMouseMove = (e) => {
    moveX.value = e.pageX - initX.value;
    animate();
};
const animate = () => {
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        layer.style.transform = `translateX(${moveX.value}px)`;
    });
};



//banane Pic
const imgApp = ref(null)
const layers = ref([])
const initItems = () => {
    imgApp.value.style.display = 'none'
    barnerImagesData.forEach(item => {
        const layer = document.createElement('div')
        layer.classList.add('layer')
        const img = document.createElement('img')
        img.src = item.url;
        layer.appendChild(img);
        imgApp.value.appendChild(layer);
    })
    imgApp.value.style.display = '';
    layers.value = Array.from(imgApp.value.querySelectorAll('.layer'))
}
onMounted(() => {
    initItems()
    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
})

onUnmounted(() => {
    document.body.removeEventListener('mousemove', handleMouseMove);
    document.body.removeEventListener('mouseover', handleMouseOver);
});
</script>
<style scoped lang="scss">
.user-item {
  line-height: 30px;
  height: 30px;
}

.user-item:hover {
  background-color: rgb(242, 242, 242);
  cursor: pointer;
}

.imgApp {
  position: relative;
  overflow: hidden;
  min-width: 1000px;
  min-height: 155px;
  height: 10vw;
  max-height: 240px;
  z-index: 30;
}

.layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  width: 40px;
    display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
    background-color: indianred;
}

.layer img {
  /* 可能需要调整小图片的样式 */
  max-width: 100%;
  max-height: 100%;
    z-index: 110;

}
</style>
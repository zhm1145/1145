<!--走马灯，轮播图-->
<template>
    <a-carousel :after-change="onChange">
<!--        :style="{ 'background-image': 'url(' + item.url + ')' }"-->
        <div v-for="item in carouselList1" :key="item._id" style="">
            <img  :src="item.photo" style="width: 100%;height: 100%;object-fit: cover;aspect-ratio: 4/3" />
                <h3 style="letter-spacing: 2px">{{item.title}}</h3>
        </div>
    </a-carousel>
</template>
<script setup>
import {inject, provide, ref} from "vue";
import {getAllCarousel} from "../../api/modules/api.video.js";
const carouselList1 = ref([])
getAllCarousel().then(res=>{
    carouselList1.value = res.data.data
    // provide('carouselList',carouselList1)

}).catch(err=>{
    console.log(err)
})
const onChange = current => {
    console.log(current);
};
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
    text-align: center;
    min-height: 500px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
}
</style>
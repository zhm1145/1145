<template>
        <div class="video-container">

            <div class="carousel"   style="">
                <Carousel style=''  :carouselItems="carouselList1" />
            </div>

            <a-card hoverable  class="video-item" v-for="(item,index) in dataList" :key="item._id"  @click="gotoWatch(index,item._id)">

                <template #cover>
                    <SmallVideo :id="item._id" :url="item.url" :poster="item.poster" :video="item[index]"></SmallVideo>
                </template>
                <a-card-meta   :title="item.name" :description="item.description">
                    <template #avatar>
                        <a-avatar :src="item.url"/>
                    </template>
                </a-card-meta>
            </a-card>
        </div>
</template>
<script setup>
import {onMounted, ref, nextTick, onBeforeUnmount, reactive, inject, provide} from 'vue';
// import router from "../../router/index.js";
import SmallVideo from "../videoPage/smallVideo.vue";
import {useRouter} from "vue-router";
import Carousel from "../model/carousel.vue";
import {getAllCarousel} from "../../api/modules/api.video.js";

const count = 3;
const data = ref([]);
const router = useRouter()
const gotoWatch = (index,id) => {
    // provide('watchVideoIndex',index)
    console.log("index..."+index)

    console.log("id...",id)
    router.push({name:'watch',params:{videoIndex:index,videoId:id}})
}

const dataList = inject('videosData')
console.log(dataList.value)

</script>
<style scoped>
.carousel{
    grid-area: 1/1/3/3
}
@media (max-width: 900px) {
    .video-container{
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
}
@media (min-width: 901px) and (max-width: 1899px) {
    .video-container{
        display: grid;
        grid-template-columns: repeat(4,1fr);
    }
}
.video-container{
    display: grid;
    width: 100%;
    min-height: 120px;
    /*grid-template-columns: repeat(4,1fr);*/
    gap: 20px;
}
</style>
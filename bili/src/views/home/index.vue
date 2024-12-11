<template>
    <mainView ></mainView>
</template>

<script setup>
import MainView from "./mainView.vue";
import {onMounted, ref, provide, watch, nextTick} from "vue";
import {getAllCarousel, videoGetAllUser} from "../../api/modules/api.video.js";
import dbUtils from '../../libs/util.strotage.js'

const dataList = ref([
    {
        id:"664f28978fb995700808c0e9",
        name: 'Video1',
        url:"http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4",
        user:"664c8c7f2d990e54048fb04a",
        createAt: "2024-05-22T06:59:24.005Z",
        description: "This is a video03",
        favoriteNamesCount: 0,
    }
])
//轮播图的所有信息
let carouselList = ref([
    {
        title:"lii",
        photo:"",
        video:""
    }
])


const userInfo  = ref({})
const data = dbUtils.get('userInfo')
console.log("data...",data,typeof data)
userInfo.value = {...data}


// onMounted(()=>{
    // getUserInfo()
    // const data = dbUtils.get('userInfo')
    // console.log("data...",data,typeof data)
    // userInfo.value = {...data}
// })
// onMounted(()=>{


    // 并行执行两个请求
    Promise.all([
        videoGetAllUser({user:userInfo.value._id}),
        getAllCarousel()
    ]).then(([videoRes, carouselRes]) => {
        console.log(videoRes);
        console.log(carouselRes);

        // 分别处理两个请求的响应数据
        dataList.value = videoRes.data.data;
        carouselList.value = carouselRes.data.data;
    }).catch(error => {
        console.log(error);
    });
// })

provide('videosData',dataList)

</script>

<style scoped lang="scss">

</style>
<template>
<!--    <a-list item-layout="horizontal" :data-source="data" class="main">-->
<!--        <template #renderItem="{ item }">-->
<!--            <a-list-item>-->
<!--                <a-list-item-meta-->
<!--                >-->
<!--                    <template #title>-->
<!--                        <a-flex>-->
<!--                            <div class="itemOne">-->
<!--                                <SmallVideo :id="item.id" :url="item.url" :poster="item.poster"></SmallVideo>-->
<!--                                &lt;!&ndash;                            <div :id="'player_'+ item.id" style="min-width: 150px"></div>&ndash;&gt;-->
<!--                                &lt;!&ndash;                            <SmallVideo style="min-width: 150px" :data="data"   :id="'player_'+ item.id"></SmallVideo>&ndash;&gt;-->
<!--                                <div >{{ item.name }}</div>-->

<!--                            </div>-->


<!--                        </a-flex>-->

<!--                    </template>-->
<!--                </a-list-item-meta>-->
<!--            </a-list-item>-->
<!--        </template>-->
<!--    </a-list>-->
    <div class="video-container">
        <div class="video-item" v-for="(item,index) in data " :key="item.id" >
            <SmallVideo :id="item.id" :url="item.url" :poster="item.poster"></SmallVideo>
            <!--                            <div :id="'player_'+ item.id" style="min-width: 150px"></div>-->
            <!--                            <SmallVideo style="min-width: 150px" :data="data"   :id="'player_'+ item.id"></SmallVideo>-->
            <div >{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup>
import SmallVideo from "./smallVideo.vue";

const data = ref([
    {
        id: 'sse',
        name: "全网身上的撒旦",
        url: 'https://www.w3schools.com/html/movie.mp4',
        poster: "https://fastly.picsum.photos/id/318/200/300.jpg?hmac=WEC_ft7NGxXgRDHWhj1tz7_gmAOrnI9d5IiS98juw8I", //封面图
        description: "sdww"
    },
    {
        id: '2sse',
        name: "全网身上的撒旦",
        url: 'https://www.w3schools.com/html/movie.mp4',
        poster: "https://fastly.picsum.photos/id/318/200/300.jpg?hmac=WEC_ft7NGxXgRDHWhj1tz7_gmAOrnI9d5IiS98juw8I", //封面图
        description: "sdww"
    },
])

import {onMounted, onUnmounted, ref} from "vue";
import "xgplayer/dist/index.min.css";

import 'xgplayer/es/plugins/playbackRate/index.css'

</script>

<style scoped>
    .video-container{
        margin: 0;
        padding: 5px;
    }
    .video-item{
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 70% 30%;
        width: 100%;
    }
</style>
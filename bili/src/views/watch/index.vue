<template>
    <div class="bd-main">
        <div class="main">
            <mainView></mainView>
            <SideBar class="sideBarClass"></SideBar>
        </div>
    </div>
</template>

<script setup>
import MainView from "./mainView.vue";
import SideBar from "./sideBar.vue";
import {useRoute} from "vue-router";
import {provide, ref} from "vue";
const route = useRoute();
// console.log("route.params.videoIndex..."+route.params.videoIndex)
const videoIndex = route.params.videoIndex
const videoId = route.params.videoId
console.log("...",videoId,videoIndex)
// console.log("videoIndex..."+videoIndex+typeof videoIndex+JSON.stringify(videoIndex))
provide('videoIndex',videoIndex)
provide('videoId',videoId)
</script>

<style scoped lang="scss">
@media (max-width: 600px) {
  .sideBarClass {
    display: none;
  }
}
.sideBarClass{
  padding: 20px;
}
.bd-main {
  margin: 0 auto;
}
.main{
    display: grid;
    grid-template-columns:900px 380px;
  margin: 0;
  padding: 0;
}
</style>
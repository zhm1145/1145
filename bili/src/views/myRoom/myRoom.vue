<template>
  <div class="my-video">
      <div>
          <h4>我的视频-{{dataList.length}}</h4>
      </div>
      <div class="video-container">
          <a-card hoverable  class="video-item" @click="gotoWatch(index,item._id)" v-for="(item,index) in dataList" :key="index">
              <template #cover>
                  <SmallVideo :id="item.id" :url="item.url" :poster="item.footer"></SmallVideo>
              </template>
              <a-card-meta :title="item.name" :description="item.description">
              </a-card-meta>
          </a-card>
      </div>
      <div>
          <h4>我的收藏夹-{{favorList.length}}</h4>
      </div>
      <div class="favor-container">

          <div @click="gotoCollection"    v-for="(item,index) in favorList" :key="index" class="favor-item">

                    <img :src="item.videos[0].footer" />

                <p>{{item.name}}({{item.videos.length}})</p>
          </div>

      </div>
  </div>
</template>

<script setup>

import SmallVideo from "../videoPage/smallVideo.vue";
import router from "../../router/index.js";
import {onBeforeMount, onMounted, ref} from "vue";
import dbUtils from '../../libs/util.strotage.js'
import {getMyFavor} from "../../api/modules/api.favorites.js";
import {videoOwe} from "../../api/modules/api.video.js";
const gotoWatch = (index,id) => {
    // provide('watchVideoIndex',index)
    console.log("index..."+index)

    console.log("id...",id)
    router.push({name:'watch',params:{videoIndex:index,videoId:id}})
}
const emit = defineEmits(['chooseTab'])
const gotoCollection = (id) =>{
    emit('chooseTab','favorites')
}
const dataList = ref([


])
//TODO:默认收藏夹
const favorList = ref([


])
onBeforeMount(()=>{
    const userInfo = ref(dbUtils.get('userInfo'))

    getMyFavor({user:userInfo._id}).then(res=>{
        // console.log(res)
        favorList.value = res.favorites
    })
    videoOwe({user:userInfo._id}).then(res=>{
        console.log(res)
        dataList.value = res.videos
    })
})
onMounted(()=>{

})
</script>

<style scoped>

.my-video{
 h4{
     text-align: start;
 }
}
.favor-container{
    display: grid;
    grid-template-columns: repeat(5 ,200px);
    gap: 20px;
    /*grid-column-gap: 20px;*/

    img{
        max-width:100%;
        aspect-ratio: 4/3;
        /*max-height: 200px;*/
        border-radius: 10px;
    }
}
.favor-item{
    cursor: pointer;
}
.favor-item:hover{
    opacity: 0.9;
}
.video-container{
    display: grid;
    grid-template-columns: repeat(4 ,24%);
    gap: 10px;
    /*grid-column-gap: 20px;*/
    /*padding-left: 5px;*/
}
.video-item{
    max-width: 200px;
}
</style>
<template>
      <a-flex vertical  style="width: 100%;">
          <a-tabs v-model:activeKey="activeKey" :size="size" style="overflow-x: scroll;width: 100%;">
              <a-tab-pane class="item-style"
                          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                          tab="专栏投稿"  key="2" >
                  <WangEditor  />
              </a-tab-pane>
              <a-tab-pane class="item-style"
                          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                          tab="视频投稿"  key="1" >
                  <UploadVideoIndex />
              </a-tab-pane>
              <a-tab-pane class="item-style"
                          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                          tab="互动视频投稿"  key="3" >
              </a-tab-pane>
              <a-tab-pane class="item-style"
                          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                          tab="音频投稿"  key="4" >
              </a-tab-pane><a-tab-pane class="item-style"
                                       :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                                       tab="贴纸投稿"  key="5" >
          </a-tab-pane>
              <a-tab-pane class="item-style"
                          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' ,color:'rgb(0,161,214)',background:'rgb(0,161,214)',pointerEvents:'none'}"
                          tab="视频素材投稿"  key="6" >
              </a-tab-pane>


          </a-tabs>

      </a-flex>
</template>

<script setup>
import { ref } from 'vue';
import WangEditor from "./wangEditor.vue";
import UploadVideoIndex from "./uploadVideoIndex.vue";
const size = ref('large');
const activeKey = ref('1');

</script>

<style scoped lang="scss">
.item-style{
  text{
    font-weight: bolder;
    transition: all 0.8s linear;
    cursor: pointer;
    font-weight: 500;
    flex-direction: row;
  }
}
.item-style:hover :active{
  text{
    color:rgb(0,161,214);
    border-bottom: 5px solid rgb(0,161,214);
  }


}
.item-style:active{
    color:rgb(0,161,214);
}
</style>
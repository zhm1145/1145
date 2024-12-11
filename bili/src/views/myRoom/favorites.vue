<template>
    <div class="main1">
      <div class="left1">
          <a-menu
                  v-model:selectedKeys="state.selectedKeys"
                  style="max-width: 256px"
                  mode="inline"
                  :open-keys="state.openKeys"
                  :items="items"
                  @openChange="onOpenChange"
          ></a-menu>
      </div>
<!--        v-for="(item,index) in myFavorList"-->
      <div class="right1" >
          <div v-if="state.openKeys.includes('sub1')">
              <div style="display: grid;grid-template-rows:120px 1fr;gap: 20px ">
                  <div style="margin: 0 auto;justify-content: start;   align-items: center;  border-bottom: 2px rgba(240,240,240,0.6) solid">

                      <div style="grid-area: 1/2/2/4">

                          <h4>{{myFavorList[0].name}}</h4>
                          <span>创建者：{{userInfo.name}}</span>
                      </div>
                  </div>
                  <div  style="display: grid;grid-template-columns: repeat(4,20%);gap: 20px;justify-content: center;">
                      <div style="box-shadow: rgb(240,240,240) 2px 2px 2px;display: flex;flex-direction: column;min-width: 100px" v-for="(item,index) in myFavorList[0].videos">
                          <small-video style="min-height:40px "  :id="item._id" :url="item.url" :poster="item.poster" :video="item[index]"/>
                          <span style="">{{item.name}}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script setup>

import {h, onBeforeMount, reactive, ref, watch, watchEffect} from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import {getMyFavor} from "../../api/modules/api.favorites.js";
import dbUtils  from '../../libs/util.strotage.js'
import SmallVideo from "../videoPage/smallVideo.vue";

const userInfo = ref(dbUtils.get('userInfo'))

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
console.log(dbUtils.get('myFavorList'))
const myFavorList = dbUtils.get("myFavorList")
const items = reactive([
    getItem('我的创建', 'sub1', () => h(MailOutlined), [
        getItem('新建收藏夹 + ', '1'),
    ]),
    getItem('我的收藏和订阅', 'sub2', () => h(AppstoreOutlined), [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('稍后再看', 'sub4', () => h(SettingOutlined), [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
]);

// 使用 forEach 方法循环遍历 myFavorList 的每个元素并添加到 items 数组中
myFavorList.forEach(item => {
    items[0].children.push(getItem(item.name, item._id));
});
const state = reactive({
    rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
    openKeys: ['sub1'],
    selectedKeys: [],
});
const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
    } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
};

</script>

<style scoped>
.main1{
  display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;

}
.left1{
}
.right1{
}
</style>
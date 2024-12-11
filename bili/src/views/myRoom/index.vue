<!--仿bili的我的空间的页面，点击头像就会跳转到页面-->
<template>
    <div class="main">
        <div class="first">
            <div class="userInfo">
                <img src="../../../public/biliTop.png" />
            </div>
            <div class="first-first">
                <div class="footer_wrap">
                    <button :class="{ activeLink: currentTab === 'myRoom' }" @click="changeTab('myRoom')">主页</button>
                    <button :class="{ activeLink: currentTab === 'dynamic' }" @click="changeTab('dynamic')">动态</button>
                    <button :class="{ activeLink: currentTab === 'upload' }" @click="currentTab = 'upload'">投稿</button>
                    <button :class="{ activeLink: currentTab === 'collections' }" @click="currentTab = 'collections'">合集和列表</button>
                    <button :class="{ activeLink: currentTab === 'favorites' }" @click="currentTab = 'favorites'">收藏</button>
                    <button :class="{ activeLink: currentTab === 'watchlist' }" @click="currentTab = 'watchlist'">追番追剧</button>
                    <button :class="{ activeLink: currentTab === 'settings' }" @click="currentTab = 'settings'">设置</button>
                </div>
                <div></div>
                <div></div>
            </div>


        </div>

        <div class="top second">
<!--            <component :is="currentTab">-->
<!--                -->
<!--            </component>-->
            <keep-alive>
            <component
                @chooseTab="handleChooseTab"
                :valueProps="componentValue"
                :is="showTab" style="background: white;padding: 20px;margin: 0">

            </component>
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
import Upload from './upload.vue'
import Collections from './collections.vue'
import MyRoom from "./myRoom.vue";
import Dynamic from './dynamic.vue'
import Error404 from '../error/404.vue'
import {computed, onBeforeMount, reactive, ref} from 'vue';
import Favorites from "./favorites.vue";
import {getMyFavor} from "../../api/modules/api.favorites.js";
import dbUtils  from '../../libs/util.strotage.js'
const userInfo = dbUtils.get('userInfo')
console.log(userInfo)
var myFavorList = []
//收藏tar的数据
var myuploadList = []
//投稿tar的数据
onBeforeMount(()=>{

    getMyFavor({user:userInfo._id}).then(res=>{
        console.log(res)
        myFavorList = res.favorites
        dbUtils.set('myFavorList',JSON.stringify(res.favorites))
        console.log(dbUtils.get('myFavorList'))
        // dbUtils.set('userInfo', JSON.stringify(user.data.data))
    })
})
const list = ref([
    { id: 1, name:'myRoom', active: true,comp:MyRoom},
    { id: 2, name:'dynamic', active: false ,comp:Dynamic},
    { id: 3, name:'upload', active: false ,comp:Upload,value:myuploadList},
    { id: 4, name:'collections', active: false ,comp:Collections},
    { id: 5, name:'favorites', active: false ,comp:Favorites,value:myFavorList.value},

])
var componentValue = [];
const currentTab = ref('myRoom');
const showTab = computed(()=>{
    const tab = list.value.find(i => i.name === currentTab.value);
    if(tab.value){
        componentValue= tab.value
    }
    return tab ? tab.comp :Error404;
})
const handleChooseTab = (val) =>{
    currentTab.value = val
}
// 初始化显示第一个选项卡对应的内容
const changeTab = (str) =>{
    currentTab.value=str
}


</script>

<style scoped>
.right-container{
    display: grid;
    grid-template-rows: 280px 1fr ;
    h4{
        text-align: start;
    }

}
.userInfo{
    box-shadow: rgb(240,240,240)  2px 2px 10px;
    img{
        width: 100%;
        object-fit: cover;
    }
}
.first{
    display: grid;
    grid-template-rows: 110px 50px;
}
.first-first{
    display: grid;
    grid-template-columns: 60% 20% 20%;
    background: white;
    box-shadow:rgb(240,240,240) 2px 2px 12px;
}
.second{
    /*margin: 10px;*/
    display: grid;

    grid-template-columns: 100%;
    gap: 20px;
    background: rgb(244,245,247);
    width: 100%;
}
.main{
    /*position: absolute;*/
    /*padding: 0 20px;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    margin: auto;
    /*max-width: 90vw;*/
    /*width: 100vw;*/
    transform: translateY(-50px);
    display: grid;
    grid-template-rows:150px  1fr ;
    box-sizing: content-box;
    gap: 20px;
    background: rgb(244,245,247);
    /*min-width: 1269px;*/
}
.top{

    box-shadow: rgb(240,240,240)  2px 2px 10px;
}
a{
    text-decoration: none;
    color: black;
}
.activeLink{
    color: #747bff;
    border-bottom: #646cff 3px solid;
}
.footer_wrap{
    button{
        transition: 0.2s all ease-in-out;
        border-radius: 0;
        margin: 0;
        padding: 0;
        min-height: 50px;
        transform-origin: left;
        background: white;
    }
    max-width: 100%;
    color: white;
    /*border: 1px solid white;*/
    display: grid;
    min-height: 50px;
    line-height: 50px;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(7,14.3%);
}

</style>
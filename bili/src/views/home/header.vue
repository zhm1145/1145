<template>
    <div class="tarbar-container  " >
        <Login :showModal v-if="showModal"  @cancelModal="showModal=false"></Login>
        <div class="item-1">
            <a-space :size="size">
                <button type="text" class="flex-center btnItem" @click="gotoUrl('/index')">
                    <svg t="1715063115479" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1483" width="20" height="20">
                        <path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                              p-id="1484"></path>
                    </svg>
                    首页
                </button>
                <button  class="btnItem" type="text">番剧</button>
                <button class="btnItem"  type="text" @click="gotoUrl('/isLive')">直播</button>
                <button class="btnItem"  type="text" @click="gotoUrl('/test')">游戏中心</button>
            </a-space>
        </div>
        <div class="item-2">
            <div>
                <a-popover placement="bottom" trigger="hover" :width="380">
                    <a-avatar :size="50" style="background-color: rgb(38,90,196)">
                        <template #icon v-if="userInfo">
                            <UserOutlined/>
                        </template>
                        <template #icon v-else>
                            <text>登录</text>
                        </template>
                    </a-avatar>
                    <template #content v-if="userInfo" >
                        <a-flex vertical gap="small" style="min-width: 180px">
                            <div>
                                <a-flex vertical gap="small">
                                    <div class="user-item"
                                         style="line-height: 50px;height: 50px"
                                         v-for="(item, index) in panelList"
                                         :key="index"
                                         @click="gotoUrl(item.path)"
                                    >
                                        <a-popover placement="right" v-if="item.child" >
                                            <template #content>
                                                <a-flex vertical gap="small" style="min-width: 100px">
                                                    <div
                                                        v-for="(item1,index1) in item.child" :key="index1" class="user-item" >
                                                        {{ item1.name }}
                                                    </div>
                                                </a-flex>
                                            </template>
                                            <text>{{ item.name }}</text>
                                        </a-popover>
                                        <text v-else>{{ item.name }}</text>
                                    </div>
                                </a-flex>
                            </div>
                            <button @click="loginOut" class="logoutBtn">
                                退出登录
                            </button>
                        </a-flex>
                    </template>
                    <template #content v-else>
                        <a-flex vertical gap="large">
                            <div>
                                <a-flex vertical gap="middle">
                                    <a-popover placement="right" trigger="hover">
                                        登录后你可以：
                                        <a-flex>
                                            <a-row :gutter="[8,8]">
                                                <a-col :span="12">免费看高清视频</a-col>
                                                <a-col :span="12">发表弹幕/评论</a-col>
                                                <a-col :span="12">多端同步播放记录</a-col>
                                                <a-col :span="12">热门番剧影视看不停</a-col>
                                            </a-row>
                                        </a-flex>
                                    </a-popover>
                                    <a-button @click="login" type="primary" class="margin-center"
                                              style="min-width: 200px">
                                        立即登录
                                    </a-button>
                                </a-flex>
                            </div>
                        </a-flex>
                    </template>
                    <template #title>
                        <span v-if="userInfo.name">{{userInfo.name}}</span>
                        <span v-else>未命名</span>
                    </template>
                </a-popover>
            </div>
        </div>
        <div class="item-3">
            <a-popover placement="bottom">
                <template #content>
                    <a-flex >
                        <div  class="submitItem" @click="gotoUrl('/colomn')">
                            <a-flex justify="space-evenly" vertical align="center" >
                                <div class="flex-center" >
                                    <svg t="1715602141827"  class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7445" width="30" height="30"><path d="M174.327172 88.275862v847.448276h688.551725v-847.448276h-688.551725z m0-70.62069h688.551725a70.62069 70.62069 0 0 1 70.620689 70.62069v847.448276a70.62069 70.62069 0 0 1-70.620689 70.62069h-688.551725a70.62069 70.62069 0 0 1-70.620689-70.62069v-847.448276a70.62069 70.62069 0 0 1 70.620689-70.62069z" fill="#000000" p-id="7446"></path><path d="M333.223724 335.448276a35.310345 35.310345 0 1 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724zM333.223724 512a35.310345 35.310345 0 0 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724z" fill="#000000" p-id="7447"></path></svg>
                                </div><text style="margin-top: -10px" >专栏投稿</text>
                            </a-flex>
                        </div>
                        <div  class="submitItem">
                            <a-flex justify="space-evenly" vertical align="center" >
                                <div class="flex-center">
                                    <svg t="1715602817339" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14828" width="30" height="30"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m282.8 778.8c-75.6 75.6-176 117.2-282.8 117.2s-207.2-41.6-282.8-117.2S112 618.8 112 512s41.6-207.2 117.2-282.8S405.2 112 512 112s207.2 41.6 282.8 117.2S912 405.2 912 512s-41.6 207.2-117.2 282.8zM672 448c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m-320 0c35.4 0 64-28.6 64-64s-28.6-64-64-64-64 28.6-64 64 28.6 64 64 64z m388.8 128H283.2c-16.4 0-29 14-27 30 15 118.4 117.8 210 242.2 210h27.2c124.4 0 227.2-91.6 242.2-210 2-16-10.6-30-27-30z" fill="" p-id="14829"></path></svg>
                                </div><text style="margin-top: -10px"  @click="gotoUrl('/')" >贴纸投稿</text>
                            </a-flex>
                        </div>
                        <div  class="submitItem">
                            <a-flex justify="space-evenly" vertical align="center" >
                                <div class="flex-center">
                                    <svg t="1715602756315" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13825" width="30" height="30"><path d="M667.27936 113.93024 266.57792 113.93024c-26.90048 0-48.80384 21.92384-48.80384 48.82432l0 698.50112c0 26.9312 21.90336 48.82432 48.80384 48.82432l490.82368 0c26.94144 0 48.82432-21.89312 48.82432-48.82432L806.22592 264.89856 667.27936 113.93024zM678.79936 186.99264l60.91776 66.18112-60.91776 0L678.79936 186.99264zM765.2352 861.24544c0 4.31104-3.52256 7.8336-7.84384 7.8336L266.57792 869.07904c-4.3008 0-7.80288-3.52256-7.80288-7.8336L258.77504 162.75456c0-4.31104 3.50208-7.80288 7.80288-7.80288l371.22048 0 0 118.7328c0 11.30496 9.19552 20.46976 20.50048 20.46976L765.2352 294.15424 765.2352 861.24544zM418.4064 396.9024l229.4272-37.21216 0 310.96832c0 25.76384-19.2 46.29504-49.152 53.87264-32.8704 8.15104-64.62464-5.62176-70.92224-30.8224-6.2976-25.25184 15.21664-52.31616 48.09728-60.54912 14.848-3.66592 29.47072-2.9184 41.69728 1.40288L617.55392 447.20128l-168.11008 30.73024-0.77824 233.08288-0.03072 0c-0.1536 22.05696-20.04992 43.73504-48.67072 50.82112-32.48128 8.17152-66.51904-7.29088-70.18496-30.43328-6.23616-24.96512 15.0528-51.7632 47.60576-59.91424 14.65344-3.6352 28.96896-2.90816 41.00096 1.31072L418.38592 396.9024z" fill="#020202" p-id="13826"></path></svg>
                                </div><text style="margin-top: -10px" >音频投稿</text>
                            </a-flex>
                        </div>
                        <div  class="submitItem">
                            <a-flex justify="space-evenly" vertical align="center" >
                                <div class="flex-center">
                                    <svg t="1715602141827"  class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7445" width="30" height="30"><path d="M174.327172 88.275862v847.448276h688.551725v-847.448276h-688.551725z m0-70.62069h688.551725a70.62069 70.62069 0 0 1 70.620689 70.62069v847.448276a70.62069 70.62069 0 0 1-70.620689 70.62069h-688.551725a70.62069 70.62069 0 0 1-70.620689-70.62069v-847.448276a70.62069 70.62069 0 0 1 70.620689-70.62069z" fill="#000000" p-id="7446"></path><path d="M333.223724 335.448276a35.310345 35.310345 0 1 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724zM333.223724 512a35.310345 35.310345 0 0 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724z" fill="#000000" p-id="7447"></path></svg>
                                </div><text style="margin-top: -10px" >视频投稿</text>
                            </a-flex>
                        </div>
                        <div  class="submitItem">
                            <a-flex justify="space-evenly" vertical align="center" >
                                <div class="flex-center">
                                    <svg t="1715602141827" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7445" width="30" height="30"><path d="M174.327172 88.275862v847.448276h688.551725v-847.448276h-688.551725z m0-70.62069h688.551725a70.62069 70.62069 0 0 1 70.620689 70.62069v847.448276a70.62069 70.62069 0 0 1-70.620689 70.62069h-688.551725a70.62069 70.62069 0 0 1-70.620689-70.62069v-847.448276a70.62069 70.62069 0 0 1 70.620689-70.62069z" fill="#000000" p-id="7446"></path><path d="M333.223724 335.448276a35.310345 35.310345 0 1 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724zM333.223724 512a35.310345 35.310345 0 0 1 0-70.62069h391.662345a35.310345 35.310345 0 1 1 0 70.62069H333.223724z" fill="#000000" p-id="7447"></path></svg>
                                </div><text style="margin-top: -10px" >投稿管理</text>
                            </a-flex>
                        </div>
                    </a-flex>
                </template>
                <button class="submitBtn flex-center">
                    <svg t="1715600738836" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6390" width="15" height="15"><path d="M518.4 926.08a32 32 0 0 1-32-32V499.2a32 32 0 1 1 64 0v394.88a32 32 0 0 1-32 32z" p-id="6391" fill="#ffffff"></path><path d="M691.84 619.2a32 32 0 0 1-21.44-8.32l-152-138.88-151.68 138.88a32 32 0 0 1-43.2-47.36l173.44-158.4a32 32 0 0 1 43.2 0l173.12 158.4a32 32 0 0 1-21.44 55.68z" p-id="6392" fill="#ffffff"></path><path d="M721.92 793.6a32 32 0 0 1 0-64 180.16 180.16 0 0 0 53.12-352 32 32 0 0 1-21.44-23.68A248 248 0 0 0 513.92 160a247.68 247.68 0 0 0-239.36 195.2 32 32 0 0 1-21.44 23.68 179.84 179.84 0 0 0 52.8 352 32 32 0 0 1 0 64 244.16 244.16 0 0 1-89.6-469.44A312 312 0 0 1 513.92 96a312 312 0 0 1 297.92 228.8 244.16 244.16 0 0 1-89.92 468.8z" p-id="6393" fill="#ffffff"></path></svg>
                    投稿
                </button>
            </a-popover>
        </div>
    </div>

</template>

<script setup>
import {Modal} from "ant-design-vue";
import {createVNode, onBeforeMount, onMounted, reactive, ref} from 'vue';
import {useAuthStore} from "../../stores/auth.js";
import dbUtils from '../../libs/util.strotage.js'
import {UserOutlined, ExclamationCircleOutlined} from '@ant-design/icons-vue';
import router from "../../router/index.js";
import Login from '../login/index.vue';
import TarbarImg from "./tarbarImg.vue";
import {getMyFavor} from "../../api/modules/api.favorites.js";

//set my favorites
var myFavorList = []

const authStore = useAuthStore()
// let userInfo  = ref(false)
let userInfo = ref({});
let showUserInfo = ref(false)
onMounted(()=>{
    getUserInfo()
})

getMyFavor({user:userInfo.value._id}).then(res=>{
        console.log(res)
        myFavorList = res.favorites
        dbUtils.set('myFavorList',JSON.stringify(res.favorites))
        console.log(dbUtils.get('myFavorList'))
        // dbUtils.set('userInfo', JSON.stringify(user.data.data))
})




const getUserInfo =()=>{
    if(dbUtils.get('userInfo')===null){
        showModal.value = true
    }else{
        showUserInfo.value = true
        const data = dbUtils.get('userInfo')
        console.log("data...",data,typeof data)
        userInfo.value = {...data}
    }
}
const panelList = [
    {name: '个人中心',path:'/myRoom'},
    {name: '投稿管理'},
    {
        name: '推荐服务', child: [
            {name: '我的课程'},
            {name: '直播中心'},
            {name: 'B币钱包'},
            {name: '订单中心'},
        ]
    }
]
const gotoUrl = (url) =>{
    router.push(url)
}
let showModal = ref(false)
const login = () => {
    showModal.value = true
}


const loginOut = () => {
    Modal.confirm({
        title: '确认退出登录？',
        icon: createVNode(ExclamationCircleOutlined),
        onOk() {
            authStore.logout()
        }
    })
}
</script>
<style scoped lang="scss">
.item-3{
    justify-self: center;
}
.item-2{
    justify-self: end;
}
@media (max-width: 600px) {
    .item-3 {
        display: none;
    }
    .item-2{
        display: none;
    }
}
.logoutBtn:hover{
    background: rgb(240,240,240);
}
.tarbar-container{
    position: sticky;
    display: grid;
    grid-template-columns: 36% 32% 32%;
    //position: fixed;
    min-width: 100vw;
    box-shadow: rgb(242,242,242) 2px 2px 10px ;
    z-index: 1000;
    //left: 0;
    //top: 0;
    justify-content: center;
    //margin-top: -100px;
    min-height: 80px;
    background-color: white;
    align-items: center;
}
.icon1{
    margin-top: 15px;
}
.submitItem:hover{
    background-color: rgb(242,242,242);
    cursor: pointer;
}
.submitItem{
    border-radius: 10px;
    width: 70px;
    height: 70px;
}
.btnItem{
    min-width: 100px;
}
.btnItem:hover{
    border:1px solid rgb(242,242,242);
    animation: transformY2px .3s ;
}
@keyframes transformY2px  {
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-2px);
    }
    100%{
        transform: translateY(0);
    }
}
.icon{
    margin-right: 5px;
}
.submitBtn{
    background-color: rgb(251,122,157);
    color: rgb(255,255,255);
}
.submitBtn:hover{
    background-color: rgb(252,139,171);
    color: white;
    border:1px solid antiquewhite;
}
.user-item {
  line-height: 30px;
  height: 30px;
}

.user-item:hover {
  background-color: rgb(242, 242, 242);
  cursor: pointer;
}
</style>
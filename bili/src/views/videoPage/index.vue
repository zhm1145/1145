<template>
    <a-flex style="color: black; " vertical gap="small">
        <h2 style="height: 30px;line-height:30px;font-size: large;text-align: left;">
            {{theVideo.name}}
        </h2>
        <a-flex gap="middle" style="height: 50px;line-height: 50px">
            <div class="flex-center">
                <svg t="1715253901041" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2594" width="20" height="20">
                    <path d="M768 824.888889c79.644444 0 142.222222-62.577778 142.222222-142.222222V341.333333c0-79.644444-62.577778-142.222222-142.222222-142.222222H199.111111c-79.644444 0-142.222222 62.577778-142.222222 142.222222v341.333334c0 79.644444 62.577778 142.222222 142.222222 142.222222h568.888889m0 28.444444H199.111111c-93.866667 0-170.666667-76.8-170.666667-170.666666V341.333333c0-93.866667 76.8-170.666667 170.666667-170.666666h568.888889c93.866667 0 170.666667 76.8 170.666667 170.666666v341.333334c0 93.866667-76.8 170.666667-170.666667 170.666666z"
                          fill="#666666" p-id="2595"></path>
                    <path d="M384 625.777778c2.844444 0 5.688889 0 8.533333-2.844445l199.111111-99.555555c5.688889-2.844444 5.688889-5.688889 5.688889-11.377778s-2.844444-8.533333-5.688889-11.377778L389.688889 398.222222c-2.844444 0-5.688889-2.844444-8.533333-2.844444-2.844444 0-5.688889 0-8.533334 2.844444-5.688889 2.844444-5.688889 5.688889-5.688889 11.377778v201.955556c0 5.688889 2.844444 8.533333 5.688889 11.377777 5.688889 2.844444 8.533333 2.844444 11.377778 2.844445m0 28.444444c-8.533333 0-14.222222-2.844444-19.911111-5.688889-14.222222-8.533333-19.911111-19.911111-19.911111-36.977777v-201.955556c0-14.222222 8.533333-28.444444 19.911111-36.977778 5.688889-2.844444 11.377778-2.844444 19.911111-2.844444 8.533333 0 14.222222 2.844444 19.911111 5.688889l199.111111 99.555555c14.222222 8.533333 22.755556 22.755556 22.755556 36.977778s-8.533333 28.444444-19.911111 36.977778l-199.111111 99.555555c-8.533333 2.844444-17.066667 5.688889-22.755556 5.688889z"
                          fill="#666666" p-id="2596"></path>
                </svg>
            </div>
            <span>{{theVideo.playCount}}</span>
            <div class="flex-center">
                <svg t="1715254426192" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2588" width="20" height="20">
                    <path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v512z"
                          fill="#666666" p-id="2589"></path>
                    <path d="M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
                          fill="#666666" p-id="2590"></path>
                </svg>
            </div>
            <span v-if="theVideo.videoReviews">{{theVideo.videoReviews.length}}</span>
            <span>{{theVideo.createAt}}</span>
        </a-flex>

        <div :id="theVideo._id" class="mse"></div>
        <div>
            <a-flex style="height: 35px" class="flex-center">
                <a-input v-model:value="danmuValue" placeholder="发个友善的弹幕见证当下"/>
                <a-button type="primary" @click="sendDanmu">发送</a-button>
            </a-flex>
        </div>
        <div class="btn-click">
            <div class="first">
                <div>
<!--                    <svg   t="1716529301784" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3758" id="mx_n_1716529301787" data-spm-anchor-id="a313x.search_index.0.i5.36a13a81Ebly6g" width="20" height="20"><path d="M840.88 330H631.67c-11.17 0-19.3-10.6-16.41-21.38l23.16-86.43c14.45-53.93-17.55-109.36-71.48-123.81A98.616 98.616 0 0 0 541.36 95c-43.88 0-84.3 29.38-96.17 73.66l-19.8 73.88C411.57 294.12 364.82 330 311.41 330H150c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h618.88c30.8 0 57.23-21.94 62.9-52.21l72-384c7.39-39.38-22.82-75.79-62.9-75.79zM182 394h93.63L248.2 778H182V394z m586.88 384H312.37l27.6-386.39c69.97-11.15 128.47-62.44 147.25-132.51l19.8-73.88c4.07-15.2 18.52-26.22 34.35-26.22 3.01 0 6.04 0.4 9.01 1.2 19.76 5.29 31.52 25.68 26.23 45.43l-23.16 86.43c-6.57 24.52-1.47 50.13 13.98 70.26 15.45 20.14 38.87 31.69 64.25 31.69h209.21L768.88 778z" fill="#e89abe" p-id="3759" data-spm-anchor-id="a313x.search_index.0.i4.36a13a81Ebly6g" class=""></path></svg>-->
                    <svg   @mouseover="changeColor(0)"  @mouseout="resetColor(0)"  t="1716528269809" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3575" width="20" height="20"><path ref="myPath0"      d="M840.88 330H631.67c-11.17 0-19.3-10.6-16.41-21.38l23.16-86.43c14.45-53.93-17.55-109.36-71.48-123.81A98.616 98.616 0 0 0 541.36 95c-43.88 0-84.3 29.38-96.17 73.66l-19.8 73.88C411.57 294.12 364.82 330 311.41 330H150c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h618.88c30.8 0 57.23-21.94 62.9-52.21l72-384c7.39-39.38-22.82-75.79-62.9-75.79zM182 394h93.63L248.2 778H182V394z m586.88 384H312.37l27.6-386.39c69.97-11.15 128.47-62.44 147.25-132.51l19.8-73.88c4.07-15.2 18.52-26.22 34.35-26.22 3.01 0 6.04 0.4 9.01 1.2 19.76 5.29 31.52 25.68 26.23 45.43l-23.16 86.43c-6.57 24.52-1.47 50.13 13.98 70.26 15.45 20.14 38.87 31.69 64.25 31.69h209.21L768.88 778z" fill="#333333" p-id="3576"></path></svg>
                    <span>点赞{{}}</span>
                </div>
                <div>
<!--                    <svg t="1716529404227" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5912" width="20" height="20"><path d="M517.12 66.56c246.01088 0 445.44 199.42912 445.44 445.44s-199.42912 445.44-445.44 445.44-445.44-199.42912-445.44-445.44 199.42912-445.44 445.44-445.44z m0 64c-210.6624 0-381.44 170.7776-381.44 381.44s170.7776 381.44 381.44 381.44 381.44-170.7776 381.44-381.44-170.7776-381.44-381.44-381.44z m95.44704 144.64512l54.30784 54.30784-103.13216 103.12192L680.96 432.64v71.68h-133.12v61.44h133.12v71.68h-133.12V721.92H476.16v-84.48H343.04v-71.68h133.12v-61.44H343.04v-71.68h117.21216L357.12512 329.50784 411.43296 275.2 512 375.77216l100.56704-100.56704z" fill="#e89abe" p-id="5913"></path></svg>-->
                    <svg  @mouseover="changeColor(1)"  @mouseout="resetColor(1)" t="1716529404227" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5912" width="20" height="20"><path  ref="myPath1"     d="M517.12 66.56c246.01088 0 445.44 199.42912 445.44 445.44s-199.42912 445.44-445.44 445.44-445.44-199.42912-445.44-445.44 199.42912-445.44 445.44-445.44z m0 64c-210.6624 0-381.44 170.7776-381.44 381.44s170.7776 381.44 381.44 381.44 381.44-170.7776 381.44-381.44-170.7776-381.44-381.44-381.44z m95.44704 144.64512l54.30784 54.30784-103.13216 103.12192L680.96 432.64v71.68h-133.12v61.44h133.12v71.68h-133.12V721.92H476.16v-84.48H343.04v-71.68h133.12v-61.44H343.04v-71.68h117.21216L357.12512 329.50784 411.43296 275.2 512 375.77216l100.56704-100.56704z" fill="#000000" p-id="5913"></path></svg>
                    <span>投币</span></div>
                <div  @click="showFavorList=true" ref="btn3" >

<!--                    <svg t="1716529462893" class="icon1" viewBox="0 0 1067 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6960" width="20" height="20"><path d="M224.484689 1022.862437a33.454805 33.454805 0 0 1-33.454805-39.142772l56.53967-328.530081L10.035941 421.000951a33.454805 33.454805 0 0 1 18.734891-56.873667l328.196083-47.840721L503.50206 18.535302a33.454805 33.454805 0 0 1 59.88465 0l146.869142 298.755255 326.858091 48.175719a33.454805 33.454805 0 0 1 18.734891 56.874668L818.315221 656.527576l56.204672 328.531081a33.454805 33.454805 0 0 1-48.509717 35.127795L535.284874 863.950365 240.208597 1018.84746a33.454805 33.454805 0 0 1-15.723908 4.013977z m310.800185-230.171656a33.454805 33.454805 0 0 1 15.723908 4.013976l249.241545 131.479233-47.506723-279.016371a33.454805 33.454805 0 0 1 9.701943-29.440828l200.731828-197.720845-278.682372-40.815762a33.454805 33.454805 0 0 1-25.091854-18.399893l-124.119275-253.591519L409.157611 362.791291a33.454805 33.454805 0 0 1-25.090854 18.399893L105.049387 422.005946l200.731827 197.720845a33.454805 33.454805 0 0 1 9.701944 29.439828l-47.840721 279.018371 249.241544-131.479233a33.454805 33.454805 0 0 1 18.399893-4.014976z" :fill="colorActive" p-id="6961"></path></svg>-->
                    <svg  @mouseover="changeColor(2)"  @mouseout="resetColor(2)" t="1716529462893" class="icon2" viewBox="0 0 1067 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6960" width="18" height="18"><path   ref="myPath2"    d="M224.484689 1022.862437a33.454805 33.454805 0 0 1-33.454805-39.142772l56.53967-328.530081L10.035941 421.000951a33.454805 33.454805 0 0 1 18.734891-56.873667l328.196083-47.840721L503.50206 18.535302a33.454805 33.454805 0 0 1 59.88465 0l146.869142 298.755255 326.858091 48.175719a33.454805 33.454805 0 0 1 18.734891 56.874668L818.315221 656.527576l56.204672 328.531081a33.454805 33.454805 0 0 1-48.509717 35.127795L535.284874 863.950365 240.208597 1018.84746a33.454805 33.454805 0 0 1-15.723908 4.013977z m310.800185-230.171656a33.454805 33.454805 0 0 1 15.723908 4.013976l249.241545 131.479233-47.506723-279.016371a33.454805 33.454805 0 0 1 9.701943-29.440828l200.731828-197.720845-278.682372-40.815762a33.454805 33.454805 0 0 1-25.091854-18.399893l-124.119275-253.591519L409.157611 362.791291a33.454805 33.454805 0 0 1-25.090854 18.399893L105.049387 422.005946l200.731827 197.720845a33.454805 33.454805 0 0 1 9.701944 29.439828l-47.840721 279.018371 249.241544-131.479233a33.454805 33.454805 0 0 1 18.399893-4.014976z" fill="#2C2C2C" p-id="6961"></path></svg>
                    <span class="span1">{{ displayFavoriteInfo}}{{theVideo.favoriteNamesCount}}</span>
                </div>
                <div>
<!--                    <svg t="1716529511898" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9024" data-spm-anchor-id="a313x.search_index.0.i17.36a13a81Ebly6g" width="20" height="20"><path d="M209.92 839.68c-1.9968 0-4.0448-0.256-6.0416-0.7168a25.6256 25.6256 0 0 1-19.5584-24.832c-0.6144-345.9072 209.408-477.2864 332.5952-495.0528V209.92c0-10.24 6.0928-19.456 15.4624-23.5008s20.2752-2.1504 27.6992 4.864l271.5648 256.1536c5.12 4.8128 8.0384 11.5712 8.0384 18.6368s-2.9184 13.7728-8.0384 18.6368l-271.5648 256.1536a25.48736 25.48736 0 0 1-27.6992 4.864 25.58976 25.58976 0 0 1-15.4624-23.5008v-105.9328c-96.512 11.008-218.3168 82.5344-284.2624 209.5616A25.64608 25.64608 0 0 1 209.92 839.68z m358.1952-570.4192v73.3184c0 13.9776-11.1616 25.344-25.1392 25.6-35.328 0.6144-113.8176 20.5824-184.2176 91.2896-63.3856 63.6928-103.2704 152.7808-117.4528 260.8128 88.2176-107.0592 210.432-156.6208 301.2096-156.6208 14.1312 0 25.6 11.4688 25.6 25.6v73.6768l208.64-196.8128-208.64-196.864z" fill="#e89abe" p-id="9025"></path></svg>-->
                    <svg   @mouseover="changeColor(3)"  @mouseout="resetColor(3)" t="1716529511898" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9024" width="20" height="20"><path  ref="myPath3"     d="M209.92 839.68c-1.9968 0-4.0448-0.256-6.0416-0.7168a25.6256 25.6256 0 0 1-19.5584-24.832c-0.6144-345.9072 209.408-477.2864 332.5952-495.0528V209.92c0-10.24 6.0928-19.456 15.4624-23.5008s20.2752-2.1504 27.6992 4.864l271.5648 256.1536c5.12 4.8128 8.0384 11.5712 8.0384 18.6368s-2.9184 13.7728-8.0384 18.6368l-271.5648 256.1536a25.48736 25.48736 0 0 1-27.6992 4.864 25.58976 25.58976 0 0 1-15.4624-23.5008v-105.9328c-96.512 11.008-218.3168 82.5344-284.2624 209.5616A25.64608 25.64608 0 0 1 209.92 839.68z m358.1952-570.4192v73.3184c0 13.9776-11.1616 25.344-25.1392 25.6-35.328 0.6144-113.8176 20.5824-184.2176 91.2896-63.3856 63.6928-103.2704 152.7808-117.4528 260.8128 88.2176-107.0592 210.432-156.6208 301.2096-156.6208 14.1312 0 25.6 11.4688 25.6 25.6v73.6768l208.64-196.8128-208.64-196.864z" fill="#040000" p-id="9025"></path></svg>
                    <span>转发</span></div>
            </div>
            <div></div>
            <div></div>
        </div>


        <Backdrop v-if="showFavorList" :showBackdrop="showFavorList" @closeModal="closeModal" />
        <div class="favorite-ctn" v-if="showFavorList">
            <div class="title">
                <h4>添加到收藏夹
                    <div class="close" @click="showFavorList=false"> X </div>
                </h4>

            </div>
            <div style="position: static" >
                <a-flex vertical >

                    <div v-for="item in myFavorList" :key="item._id"  >
                        <label class="favor-item" >
                            <div>
                                <input type="checkbox" :value='item._id' v-model="selectedFavors" >
                            </div>
                            <div style="font-weight: 500" >
                                {{item.name}}
                            </div>
                            <span>{{item.videos.length}}/1000</span>
                        </label>
                    </div>

                </a-flex>
                <div style="letter-spacing: 2px" class="addFavorBtn" >
                    <button     style="font-weight: bold;min-width: 120px">+ 新建收藏夹</button>
                </div>
            </div>
            <button @click="addIntoFavor"  class="button1" style="min-width: 120px;background: rgb(0,174,236);color: white;letter-spacing: 2px">
                确定
            </button>
        </div>
    </a-flex>

</template>

<script setup>
import {onMounted, onUnmounted, ref, inject, watch, nextTick, computed, onBeforeMount} from "vue";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import Danmu from 'xgplayer/es/plugins/danmu'
import playbackRate from 'xgplayer/es/plugins/playbackRate'
import 'xgplayer/es/plugins/danmu/index.css'
import 'xgplayer/es/plugins/playbackRate/index.css'
import {addPlayCount, videoOneVideo, vreateVideoDanmu} from "../../api/modules/api.video.js";
import dbUtils from "../../libs/util.strotage.js";
import {utilTimeFormat} from '../../libs/util.timeFormat.js'
import {addVideoToMyFavorName, getMyFavor} from "../../api/modules/api.favorites.js";
import {JENotification} from "../../libs/util.toast.js";
import Backdrop from "../model/backdrop.vue";
import {useAuthStore} from "../../stores/auth.js";
const theVideo  = ref({})
const userInfo = ref({})

var myFavorList = []



// const colorActive = ref('#e89abe')
const danmuValue = ref('')
const watchVideoId = inject('videoId')


var selectedFavors = []
const ifFavor =ref(false)

onMounted(() => {
    getMyFavor({ user: userInfo.value._id }).then(res => {
        console.log(res);
        myFavorList = res.favorites;
        dbUtils.set('myFavorList', JSON.stringify(res.favorites));
        console.log(dbUtils.get('myFavorList'));
        console.log(myFavorList);
        const targetId = theVideo.value._id;


        const isVideoExist = myFavorList.some(favor => {
            return favor.videos.map(video => video._id).includes(watchVideoId);
        });
        nextTick(()=>{
            console.log(isVideoExist);

            if (isVideoExist) {
                console.log('已收藏该视频');
                ifFavor.value = true;
            } else {
                console.log('未收藏该视频');
                ifFavor.value = false;
            }
        })



    });
});

const btn3 = ref(null)

const displayFavoriteInfo = computed(() => {
    if(ifFavor.value){
        myPath2.value.setAttribute('fill','#e89abe')
        locked3.value = false
        btn3.value.classList.add('activeBtn-color')
        return '已收藏'
    }else{
        locked3.value = true //允许
        return '收藏'
    }
});

//send Danmu
const sendDanmu = () => {
    if (danmuValue.value.trim() !== '') {

        vreateVideoDanmu({video:watchVideoId,user: userInfo.value._id ,txt: danmuValue.value  ,start: player.currentTime * 1000}).then(res=>{
            console.log(res)

        }).catch(err=>{
            JENotification.error("发送弹幕失败")
        })
        player.danmu.sendComment({  //发送弹幕
            duration: 15000,
            id: 'id' + Math.random().toString(36).substr(2, 9),
            start: player.currentTime,
            txt: danmuValue.value,
            style: {
                color: '#FFFFFF',
                fontSize: '20px',
                // border: 'solid 1px #ff9500',
                // borderRadius: '50px',
                padding: '5px 11px',
                height: '20px',
                // backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
        })
        console.log(player.currentTime)
        danmuValue.value = ''; // 清空输入框
    }
}

const showFavorList = ref(false)
//if show FavoriteList
const addIntoFavor = ()=>{
    console.log(userInfo.value)
    console.log(selectedFavors)
    if(selectedFavors.length==0){
        JENotification.error("请选择收藏夹!")
    }else{
        selectedFavors.forEach((item,index)=>{
            addVideoToMyFavorName({user: userInfo.value._id ,favoriteId: item,videoId: theVideo.value._id }).then(res=>{
                console.log("res..."+res)
                JENotification.success("收藏成功!")

                theVideo.value.favoriteNamesCount += 1;
                showFavorList.value = false
            }).catch(err=>{
                JENotification.error("收藏失败",err)
            })
        })
    }


}
const myPath0 = ref(null)
const myPath1 = ref(null)
const myPath2 = ref(null)
const myPath3 = ref(null)
const locked3  = ref(false)
const changeColor = (index)=>{
    // myPath.value[index].setAttribute('fill','red')
    switch (index){
        case 0:myPath0.value.setAttribute('fill','#e89abe');break;
        case 1:myPath1.value.setAttribute('fill','#e89abe');break;
        case 2:if(locked3.value){
            myPath2.value.setAttribute('fill','#e89abe');
        }break;
        case 3:myPath3.value.setAttribute('fill','#e89abe');break;
    }
}
const resetColor = (index) =>{
    switch (index){
        case 0:myPath0.value.setAttribute('fill','#2c2c2c');break;
        case 1:myPath1.value.setAttribute('fill','#2c2c2c');break;
        case 2:if(locked3.value){
            myPath2.value.setAttribute('fill','#2c2c2c');
        }break;
        case 3:myPath3.value.setAttribute('fill','#2c2c2c');break;
    }
}

let player = null;

// 必须在onMounted 或 nextTick实例Xgplayer播放器
onMounted(() => {
    //  播放器
    if(player)player = null;
    const watchVideoIndex = inject('videoIndex')
    const watchVideoId = inject('videoId')
    console.log(watchVideoId,watchVideoIndex)
    const data = dbUtils.get('userInfo')
    console.log("data...",data,typeof data)
    userInfo.value = {...data}

    videoOneVideo({user:  userInfo._id , id:  watchVideoId}).then(res=>{
        console.log(res)

        theVideo.value = res.data.data
        // 在获取到视频信息后创建播放器实例
        theVideo.value.createAt = utilTimeFormat(theVideo.value.createAt)
        playerOpts.id = theVideo.value._id;
        playerOpts.url = theVideo.value.url;
        playerOpts.poster = theVideo.value.poster;
        playerOpts.danmu.comments = theVideo.value.danmus.map(item => {
            return { ...item, style:{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    padding: '5px 11px',
                    height: '20px',
                } };
        });
        // 使用 $nextTick 确保 DOM 元素已经渲染完毕
        nextTick(() => {
            player = new Player(playerOpts);
            addPlayCount({user:userInfo.value._id  ,videoId: theVideo.value._id}).then(res=>{
                console.log("add 1 PlayCount")
            }).catch(err=>{
                console.log(err)
            })
        });

    }).catch(error => {
        console.error('Failed to fetch video information:', error);
    });



});


const playerOpts = {
    plugins: [Danmu, playbackRate],
    lang: "zh-cn", //设置中文
    lastPlayTime: 0, //视频起播时间（单位：秒）
    lastPlayTimeHideDelay: 5, //提示文字展示时长（单位：秒）
    closeVideoClick: false, // true - 禁止pc端单击暂停，反之
    closeVideoTouch: true, // true - 禁止移动端单击暂停，反之
    videoInit: true,
    fluid: true, //填满屏幕
    autoplay: false, //自动播放
    loop: false, //循环播放
    pip: true,
    volume: 1, //音量 0 -  1
    controls: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
    rotateFullscreen: true,
    //popTxt
    danmu: {
        panel: true,
        area: {  //弹幕显示区域
            start: 0, //区域顶部到播放器顶部所占播放器高度的比例
            end: 1 //区域底部到播放器顶部所占播放器高度的比例
        },
        closeDefaultBtn: false, //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
        defaultOff: true //开启此项后弹幕不会初始化，默认初始化弹幕
    }
};

onUnmounted(() => {
    if (player) {
        player.destroy(); // 销毁播放器
    }
})
const closeModal = () =>{
    showFavorList.value = false
}


</script>
<style scoped>
.favor-item{
    display: grid;
    grid-template-columns: 1fr 7fr 2fr;
    transition: all 0.2s linear;
    cursor: pointer;
}
.favor-item:hover{
    color: rgb(0,173,236);
}
.favor-item:active{
    color: rgb(0,173,236);
}
.addFavorBtn{
        position: absolute;
      bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
}
.favorite-ctn{
  position: fixed;
  min-height: 400px;
    min-width: 400px;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1002;
    padding: 20px;
    border-radius: 5px;
    overflow-y: auto;
    box-shadow: rgb(210,210,210) 1px 1px 1px inset ,rgb(210,210,210) -1px -1px 1px inset;
    .button1{
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .title{
        position: relative;
    }
    .close{
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
        color: gray;
        font-weight: bold;
    }
}
.btn-click{
    display: grid;
    grid-template-columns: 5fr  4fr;
    .first{
        display: flex;
        flex-direction: row;

    }
    .first div{
        flex: 1;
        font-weight: normal;
        font-size: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.1rem;
        gap: 2px;
    }
    .first div:hover{
        color: #e89abe;
    }
}
.activeBtn-color{
    color: #e89abe;
}
body {
    display: flex;
}

.mse {
    flex: auto;
}

</style>



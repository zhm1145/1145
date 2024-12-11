<template>
    <a-list  class="comment-list"  item-layout="horizontal" :data-source="dataDanmu">
        <a-comment>
            <template #content>
                <a-form-item>
                    <a-textarea :style="inputStyle" v-model:value="value" :rows="rows" @focus="handleFocus"/>
                </a-form-item>
                <a-form-item v-if="isNowInputting">
                    <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                        发布
                    </a-button>
                </a-form-item>
            </template>
            <template #avatar>
                <a-avatar :src="userInfo.photo" :alt="userInfo.name"/>
            </template>

        </a-comment>
        <a-list
                v-if="videoReviews.length"
                :data-source="videoReviews"
                :header="`${videoReviews.length} ${videoReviews.length > 0 ? '条内容' : '暂无评论'}`"
                item-layout="horizontal"
        >
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-comment
                            :author="item.user.name"
                            :avatar="item.user.photo"
                            :content="item.review"
                            :datetime="item.createAt"
                    />
                </a-list-item>
            </template>
        </a-list>
    </a-list>

</template>
<script setup>
import {inject, nextTick, reactive, ref} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {videoOneVideo, vreateVideoReview} from "../../api/modules/api.video.js";
import {utilTimeFormat} from "../../libs/util.timeFormat.js";
import Player from "xgplayer";
import dbUtils from "../../libs/util.strotage.js";
import {JENotification} from "../../libs/util.toast.js";


const videoReviews = ref([]);
const userInfo = ref(null)
const theVideo = ref({})
const watchVideoId = inject('videoId')
const data = dbUtils.get('userInfo')

userInfo.value = {...data}
console.log(watchVideoId,userInfo.value)
videoOneVideo({user:  userInfo._id , id:  watchVideoId}).then(res=>{
    console.log(res)
    theVideo.value = res.data.data
    // 在获取到视频信息后创建播放器实例
    theVideo.value.createAt = utilTimeFormat(theVideo.value.createAt)
    // 对 videoReviews 数组中的每个项的 createAt 字段进行格式化处理
    theVideo.value.videoReviews = theVideo.value.videoReviews.map(item => {
        return {
            ...item,
            createAt: utilTimeFormat(item.createAt)
        };
    });
    videoReviews.value = theVideo.value.videoReviews

}).catch(error => {
    console.error('Failed to fetch video information:', error);
});

dayjs.extend(relativeTime);
const comments = ref([]);
const submitting = ref(false);
const value = ref('');
const rows = ref(1)
const isNowInputting = ref(false)
const inputStyle = ref(
    {
        backgroundColor: "rgb(242,242,242)"
    },
)



const handleFocus = () => {
    isNowInputting.value = true
    rows.value = 2
    inputStyle.value.backgroundColor = 'rgb(255,255,255)'
}
const handleSubmit = () => {
    if (!value.value) {
        return;
    }
    inputStyle.value.backgroundColor = 'rgb(242,242,242)'
    rows.value = 1
    isNowInputting.value = false
    submitting.value = true;
    vreateVideoReview({review:value.value,user:userInfo.value._id,video:watchVideoId}).then(res=>{
        console.log(res)
        submitting.value = false;
        videoReviews.value = [
            {
                user:{
                    name:userInfo.value.name,
                    photo:userInfo.value.photo,
                },
                review: value.value,
                createAt: dayjs().fromNow(),
            },
            ...videoReviews.value,
        ];
        console.log(dayjs().fromNow())
        value.value = '';
        JENotification.success("发布成功!")

    }).catch(err=>{
        JENotification.error("发表失败",err)
    })
};

const videoId = inject("videoId")
console.log(videoId)

const dataDanmu = reactive([
    {
        title: 'what',
        name: 'heoe',
        comment: 'seeaeHolo'
    }
])

</script>

<style scoped>
.comment-list{
    display: block;
}
</style>
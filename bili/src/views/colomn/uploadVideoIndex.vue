<template>
    <div class="main">
        <div
            class="dropzone"
            @dragover.prevent="handleDragOver"
            @drop.prevent="handleDrop"
        >
            将文件拖拽到此处上传
            <button class="btn" @click="selectFile">上传视频</button>
            <input type="file" ref="fileInputRef" style="display: none" @change="uploadFile" />
        </div>
        <a-progress  style="transition: width 0.3s linear"  :percent="100"  v-show="isUploaded"/>
        <div class="addVideoMsg" >
            <div>
                <h4>基本设置</h4>

            </div>

            <div >
                <div>封面</div>
                <div style="max-height: 150px">
                    <div class="imgctn">
                        <img  :src="videoUrl"  />
<!--                        <canvas ref="canvas" style="display: none"></canvas>-->
                        <div class="coverGray" style="" @click="selectTopPicFile"><span>更改封面</span>
                            <input type="file" ref="fileTopPicRef" style="display: none" @change="uploadFile1" />
                        </div>
                    </div>
                    <div class="showMainPic">
                        <img  v-show="topPic.url"  :src="topPic.url"   />
                    </div>
                </div>

            </div>

            <div>
                <div>标题</div>
                <div style="position: relative">
                    <input  ref="inputTitle"  class="inputbox" style="padding-right: 80px"  placeholder="请输入标题"   @input="updateTitleCount"/>
                    <p class="pstyle"  :style="[titleStyle]">{{ currentTitleCount }} / {{ maxTitleCount }}</p>
                </div>
            </div>
            <div>
                <div>简介</div>
                <div style="position: relative">
                    <input  ref="inputIntro"   class="inputbox" style="padding-right: 80px" placeholder="请输入视频简介"  @input="updateIntroCount" />
                    <p class="pstyle" :style="[introStyle]" >{{ currentIntroCount }} / {{ maxIntroCount }}</p>

                </div>
            </div>
            <div>
                <div>更多设置</div>
                <div></div>
            </div>
            <button class="btn" style="bottom: 10px" @click="addVideo">立即投稿</button>
    </div>
        </div>
</template>

<script setup>
import {onMounted, reactive, ref, watch} from 'vue';
import {uploadImg} from "../../api/modules/api.upload.js";
import {JENotification} from "../../libs/util.toast.js";
import {createOneVideo} from "../../api/modules/api.video.js";
import dbUtils from '../../libs/util.strotage.js'
import router from "../../router/index.js";

const topPic= ref({})
const fileTopPicRef = ref(null)

//something about the upload video
const videoUrl = ref("http://127.0.0.1:3000/upload/视频封面mobile-01-p3g.png")

//something about the upload video files
const files = ref([]);

const currentIntroCount = ref(0)
const currentTitleCount = ref(0)
const maxIntroCount = 250
const maxTitleCount = 80

const isUploaded = ref(false)
const fileInputRef = ref(null)


const inputTitle = ref(null)
const inputIntro = ref(null)

const titleStyle = ref({})
const introStyle = ref({})


/**
 * 新增视频，自己发布
 */

const userInfo = ref(dbUtils.get("userInfo"))
const addVideo = () =>{
    if(!theUploadVideo.value.url){
        JENotification.warning("请上传视频");
        return;
    }
    if(currentIntroCount.value > maxIntroCount ){
        JENotification.warning("字符超过，请修改");
        return;
    }
    if(currentTitleCount.value > maxTitleCount){
        JENotification.warning("字符超过，请修改");return;
    }
    if(currentTitleCount.value === 0){
        JENotification.warning("请输入标题");return;
    }
    if(!theUploadVideo.value){
        JENotification.warning("视频出错，请重试");return;
    }
    createOneVideo({name: inputTitle.value.value , url: theUploadVideo.value.url  ,description:  inputIntro.value.value ,user: userInfo.value._id ,footer:topPic.value.url ? topPic.value.url: videoUrl.value   }).then(res=>{

        console.log(res)
        JENotification.success("投稿成功")
        router.push('/myRoom')
    }).catch(err=>{
        JENotification.error("投稿失败",err.message)
    })
}
const selectFile =  ()=>{
    const fileInput = fileInputRef.value
    if(fileInput){
        fileInput.click();
    }
}
const selectTopPicFile =  ()=>{
    const fileInput = fileTopPicRef.value
    if(fileInput){
        fileInput.click();
    }
}
//set the count of the number of the character
const  updateTitleCount = () =>{
    currentTitleCount.value = inputTitle.value.value.length;
    if(currentTitleCount.value  > maxTitleCount){
        inputTitle.value = inputTitle.value.value.slice(0,maxTitleCount)
        currentTitleCount.value =  maxTitleCount
        titleStyle.value = {color:"red"}
    }
}
const  updateIntroCount = () =>{
    currentIntroCount.value = inputIntro.value.value.length;
    if(currentIntroCount.value  > maxIntroCount){
        inputTitle.value = inputIntro.value.value.slice(0,maxIntroCount)
        currentIntroCount.value =  maxIntroCount
        introStyle.value = {color:"red"}
    }
}



const theUploadVideo = ref({})
/**
 * 手动点击按钮上传视频
 * @param event
 */
const uploadFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('files', file);
    uploadImg(formData).then(res=>{
        console.log(res)
        JENotification.success("上传视频成功")
        //navigate to the videoMsgPage
        theUploadVideo.value = res.data.data
        isUploaded.value = true
    }).catch(err=>{
        JENotification.error("上传视频失败")
    })
    // 清空input的value，以便下次可以重复选择文件
    event.target.value = '';
};



//upload the topPic
const uploadFile1 = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('files', file);
    uploadImg(formData).then(res=>{
        console.log(res)
        JENotification.success("上传封面成功")
        //navigate to the videoMsgPage
        topPic.value = res.data.data

    }).catch(err=>{
        JENotification.error("上传封面失败")
    })
    // 清空input的value，以便下次可以重复选择文件
    event.target.value = '';
};
const handleDragOver = () => {
    // 这里可以添加拖拽样式
};

const handleDrop = (event) => {
    files.value = [...event.dataTransfer.files];
    uploadFiles(files.value);
};
/**
 * 拖拽上传视频
 * @param files
 */
const uploadFiles = (files) => {
    // 实现文件上传的逻辑
    // 例如使用 FormData 和 fetch API
    const formData = new FormData();
    files.forEach((file) => {
        formData.append('files', file);

    });
    uploadImg(formData).then(res=>{
        console.log(res)
    }).catch(err=>{
        JENotification.error("上传视频失败")
    })
};
</script>

<style>
.showMainPic{
    max-width: 180px;
    img{
        width: 100%;
        aspect-ratio: 4/3;
    }
}
.pstyle{
    position: absolute;font-size: small;right: 5px;
}
.inputbox{
    width: 100%;
    border: rgba(255,240,240,1) solid 1px;
}
.inputbox:focus{
    border: rgba(255,240,240,1) solid 1px;
    outline: none; /* 移除默认的聚焦样式 */
}
.addVideoMsg{
    display: flex;
    flex-direction: column;
    gap: 20px;
    div{
        display: flex;
        min-height: 50px;
        text-align: center;
        font-weight: normal;
        letter-spacing: 2px;
        font-size: large;
        gap: 40px;

    }
    div:nth-child(1){
        min-width: 80px;

    }
    .imgctn{
        width: 200px;
        position: relative;
        img{
            width: 200px;
            box-shadow: rgb(240,240,240) 2px 2px 2px;
            border-radius: 5px;
            object-fit: cover;
            aspect-ratio: 4/3;
            cursor: pointer;

        }
        .coverGray{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            min-height: 20px;
            z-index: 2;
            background: rgba(39,36,39,0.6);
            color: rgba(255,255,255,0.7);
            display: flex;
            justify-content: center;
            span{
                cursor: pointer;
            }
            span:hover{
                color: rgba(255,255,255,0.5);
            }
        }
    }
    div:nth-child(2){
        flex: 1;
    }
}
.dropzone {
    width: 100%;
    height: 200px;
    border: 2px dashed #ccc;
    line-height: 200px;
    text-align: center;
    color: #ccc;
    position: relative;
    cursor: pointer;

}
.btn{
    background: rgb(0,161,214);
    color: white;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}
.btn:hover{
    opacity: 0.8;
}
.main{
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
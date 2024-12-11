<template>
<!--    <div class="main"  style="background: rgb(243,244,246);width:100vw;height: 100vh;">-->
        <div  style="display: grid;grid-template-columns: 300px 1000px;gap: 10px;
    padding :10px;background: rgb(243,244,246)

      " >
            <div style=" background: white;box-shadow: 0 0 4px whitesmoke"></div>
            <div style="display: flex;flex-direction: row;padding: 0 20px ;background: white">
<!--                点击编辑按钮展示wangEditor-->
                <p  v-if="ifEditor"   style="display: flex;flex-direction: column;"   v-html="uploadItem.textHtml">

                </p>
                <WangEditor  v-else :columnData="uploadItem.textHtml"  :uploadId="uploadId"  />
            </div>

        </div>
<!--    </div>-->

</template>

<script setup>
import dbUtils from "../../libs/util.strotage.js";
import {useRoute} from "vue-router";
import { ref} from "vue";
const route = useRoute();
const uploadId = route.params.uploadId
const userInfo = dbUtils.get('userInfo')

import { columnsGetOne} from "../../api/modules/api.column.js";
import WangEditor from "../colomn/wangEditor.vue";
const uploadItem = ref(null)

//the props that will send to wangEditor Page.



const ifEditor = ref(false)
columnsGetOne({user:userInfo._id,id:uploadId}).then(res=>{
    console.log(res)
    uploadItem.value = res.data.data
    uploadItem.value.textHtml =   decodeEntities(uploadItem.value.textHtml)


}).catch(err=>{
    console.log(err)
})
// 辅助函数：将 HTML 实体字符解码为 HTML
function decodeEntities(encodedString) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    console.log(textArea.value)
    return textArea.value;

}
</script>

<style scoped lang="scss">


</style>
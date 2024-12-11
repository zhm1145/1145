<template>
<div class="uoloadColumnCtn" style="display: grid;grid-template-columns:repeat(4,25%)  ;gap: 10px;">
    <a-card
      class="cardItem"
        style="" v-for="item in uploadList" :key="item._id"  @click="gotoItem(item._id)">
<!--        <p>{{item.textHtml}}</p>-->

        <p v-html="item.textHtml"></p>
    </a-card>
</div>
</template>

<script setup>
import dbUtils from "../../libs/util.strotage.js";

const userInfo = dbUtils.get('userInfo')

const uploadList = ref([])
import {columnListMy} from "../../api/modules/api.column.js";
import {ref} from "vue";
import router from "../../router/index.js";

const gotoItem = (id) =>{

    router.push({name:'uploadItem',params:{uploadId:id}})
}
columnListMy({user:userInfo._id}).then(res=>{
    console.log(res)
    uploadList.value = res.columns.map(column => {
        // 对包含 HTML 实体字符的字符串进行解码
        return {
            ...column,
            textHtml: decodeEntities(column.textHtml)
        };
    });
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

<style scoped>
.cardItem{
    width: 250px;   cursor: pointer; display: grid;
    padding: 10px;
    align-items: center ;justify-content: center ;
    max-height: 200px; overflow: hidden;text-overflow: ellipsis
}
.cardItem:hover{
    background: rgb(247,247,247);
    box-shadow: 0 0 5px rgb(243,243,243);
}
</style>
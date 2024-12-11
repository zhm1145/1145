
<!--npm install @wangeditor/editor &#45;&#45;save-->
<!--npm install @wangeditor/editor-for-vue@next &#45;&#45;save-->

<!--# 下面是vue3单独的组件，上面两个是旧的-->

<!--npm install @wangeditor/editor wangeditor5-for-vue3-->

<template>
    <div style="border: 1px solid #ccc ; margin: 0 auto ;box-sizing: border-box;
    overflow-x: scroll;
    width: 50vw;
    /*max-width:800px;*/
    position: relative;
">
        <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                :mode="mode"
        />
        <Editor
                style="height:500px; overflow-x: hidden;"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="handleCreated"
                @onChange="handleChange"
                @customPaste="customPaste"
        />
        <button
            class="editedBtn"
            style=""
            @click="insertText" v-if="props.columnData">修改</button>
        <button
            class="deleteBtn"
            style=""
            @click="deleteFun" v-if="props.columnData">删除</button>

        <button  v-else  @click="insertText" class="btnSubmit">提交文章</button>

    </div>

</template>


<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, ref, shallowRef, onMounted, watchEffect} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {JENotification} from "../../libs/util.toast.js";
import {columnCreate, deletecolumn} from "../../api/modules/api.column.js";
import dbUtils from "../../libs/util.strotage.js";
import router from "../../router/index.js";

const props = defineProps({
    editorConfig:{
        default:()=>({
            placeholder:"请输入内容",
            withCredentials: true,//cookie
            MENU_CONF:{
                uploadImage:{
                    // form-data fieldName ，默认值 'wangeditor-uploaded-image'
                    fieldName: 'files',

                    // 单个文件的最大体积限制，默认为 2M
                    maxFileSize: 1 * 1024 * 1024, // 1M

                    // 最多可上传几个文件，默认为 100
                    maxNumberOfFiles: 10,
                    allowedFileTypes: ['image/*'],
                    base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb
                    // meta: { token: 'xxx', a: 100 },
                    metaWithUrl: true, // join params to url
                    // headers: {
                    // Accept: 'text/x-json' ,
                    // Origin: 'http://localhost:3090',
                    // Referer: 'http://localhost:3090/#/colomn',
                    // },
                    // 跨域是否传递 cookie ，默认为 false
                    withCredentials: true,
                    // 超时时间，默认为 10 秒
                    timeout: 5 * 1000, // 5 秒
                    // server:'/api/v1/uploadImage/test',//test
                    server:'/api/v1/uploadImage/uploadimg',//test
                    // 上传之前触发
                    onBeforeUpload(file) { // TS 语法
                        // file 选中的文件，格式如 { key: file }
                        console.log('onBeforeUpload', file)
                        return file

                        // 可以 return
                        // 1. return file 或者 new 一个 file ，接下来将上传
                        // 2. return false ，不上传这个 file
                    },

                    // 上传进度的回调函数
                    onProgress(progress) {  // TS 语法
                        // onProgress(progress) {       // JS 语法
                        // progress 是 0-100 的数字
                        console.log('progress', progress)
                    },

                    // 单个文件上传成功之后
                    onSuccess(file, res) {  // TS 语法
                        console.log(`${file.name} 上传成功`, res)
                    },

                    // 单个文件上传失败
                    onFailed(file, res) {   // TS 语法
                        console.log(`${file.name} 上传失败`, res)
                    },

                    // 上传错误，或者触发 timeout 超时
                    onError(file, err, res) {  // TS 语法
                        console.log(`${file.name} 上传出错`, err, res)
                    },
                    // 自定义插入图片

                    customInsert(res, insertFn) {
                        // res 即服务端的返回结果
                        const {url,alt,href}   = res.data.data
                        // 从 res 中找到 url alt href ，然后插入图片
                        insertFn(url, alt, href)
                    },
                }
            }
        })
    },

    columnData:{
        type:String,
        default:''
    },
    uploadId:{
        type:Number,

    }

})
// 上传前拦截，实现自定义上传，一定要返回false

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p></p>')
const mode = ref('default') //or 'simple'
// 模拟 ajax 异步获取内容
onMounted(() => {
    //set the originData.
    // valueHtml.value = props.columnData
    //TODO:草稿箱功能
    const userInfo = dbUtils.get('userInfo');
    console.log(userInfo,valueHtml.value)

    // console.log(editorRef)
    // editor.txt.html(valueHtml.value);
})
const toolbarConfig = {}

//now submit text
const userInfo = dbUtils.get('userInfo')

//submit function.
const insertText = () => {
    const editor = editorRef.value // 获取 editor 实例
    if (editor == null) return

    const textHtml = editor.getHtml()
    console.log("textHtml is::"+textHtml)
    // const textGet=editor.children[0].children[0].text//get the text content

    //before submit,check if blank use editor.isEmpty() and editor.getText()
    const text = editor.getText()

    const image = editor.getElemsByType('image')
    if(text.trim()===''){
        JENotification.warning("请输入内容")
        return;
    }


    //now submit image,use editor.getElemsByType('image') // 所有图片

    let imgList = editor.getElemsByType('image')
    console.log("imgList...",imgList)//is a Array

    //submit the text and imgList
    columnCreate({ user: userInfo._id ,textHtml:textHtml }).then(res=>{
        console.log(res)
        JENotification.success("专栏发布成功")
        //跳转到专栏详情页面
        router.push({name:'uploadItem',params:{uploadId:res.data.data.id}})
    }).catch(err=>{
        JENotification.error("发布失败",err)
    })

    //if want ,can show the progress,editor.showProgressBar(progress) // progress 为 0-100 的数字

    //navigate to somewhere

}

const deleteFun = () =>{
    //1.show model

    //2.delete the column
    deletecolumn({user:userInfo._id ,videoId:props.uploadId  }).then(res=>{
        console.log(res)
        JENotification.success("删除成功")
        router.push({name:'upload'})
    }).catch(err=>{
        console.log(err)
        JENotification.error("删除失败")
    })
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(()=>{
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const customPaste = (editor, event, callback) => {
    console.log('ClipboardEvent 粘贴事件对象', event)
    // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
    const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
    // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

    // 自定义插入内容
    editor.insertText(text)

    // 返回 false ，阻止默认粘贴行为
    // event.preventDefault()
    // callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

    // 返回 true ，继续默认的粘贴行为
    callback(true)
}
const isFirstTime = ref(true)
const handleChange = (editor) => {
    // if(isFirstTime){
    //     isFirstTime.value = false
    //     return;
    // }
    // valueHtml.value=editor.children[0].children[0].text//get the text content

    console.log('change:', valueHtml.value)
}

watchEffect(() => {

    valueHtml.value = "<p>" + props.columnData + "</p>"


});
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！

}
</script>

<style scoped>
.deleteBtn{
    position: absolute;
    height:50px;width: 80px;
    bottom: 10px;
    left: 10px;
    bordepxr-radius: 50%;
    line-height: 30px;background: rgb(247,247,247);
    color: black;
}
.editedBtn{
    position: absolute;
    height:50px;width: 80px;
    bottom: 65px;
    left: 10px;
    bordepxr-radius: 50%;
    line-height: 30px;background: rgb(55,200,247);
    color: white;
}
.editedBtn:hover{
    background-color: rgb(87,223,255);
    /*border: none;*/
}
.btnSubmit{
    background-color: rgb(55,200,247);
    color: white;
    min-width: 200px;
    border-radius: 18px;
    margin: 10px auto;
}
.btnSubmit:hover{
    background-color: rgb(87,223,255);
    /*border: none;*/
}
</style>

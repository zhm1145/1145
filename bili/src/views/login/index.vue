<template>
    <a-modal v-model:open="showModal" :model="formState"
             @cancel="$emit('cancelModal')"
             name="loginMsg"
             autocomplete="off"
             footer=""
             centered>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="注册">
                <a-form layout="vertical"   ref="formRefNew" :model="formState.newUserLoginForm"  @submit.prevent="handleRegister">
                    <a-form-item label="邮箱" name="email"
                                 :rules="[{ required: true, message: 'Please input your email!' }]">
                        <a-input v-model:value="formState.newUserLoginForm.email"/>
                    </a-form-item>
                    <a-form-item label="用户名" name="name"
                                 :rules="[{ required: true, message: 'Please input your name!' }]">
                        <a-input v-model:value="formState.newUserLoginForm.name"/>
                    </a-form-item>
                    <a-form-item label="密码" name="password"
                                 :rules="[{ required: true, message: 'Please input your password!' }]">
                        <a-input-password v-model:value="formState.newUserLoginForm.password"/>
                    </a-form-item>
                    <a-form-item label="确认密码" name="comfirmPassword"
                                 :rules="[{ required: true, message: 'Please input your comfirmPassword!' }]">
                        <a-input-password v-model:value="formState.newUserLoginForm.comfirmPassword"/>
                    </a-form-item>
                    <a-row class="flex-center">
                        <a-form-item>
                            <a-button type="primary" >注册</a-button>
                        </a-form-item>
                    </a-row>
                </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" tab="登录" force-render>
                <a-form layout="vertical"  ref="formRefOld" :model="formState.oldUserLoginForm" @submit.prevent="handleCodeLogin">
                    <a-form-item label="邮箱" name="email"
                                 :rules="[{ required: true, message: 'Please input your email!' }]">
                        <a-input v-model:value="formState.oldUserLoginForm.email"/>
                    </a-form-item>
                    <a-form-item label="密码" name="password"
                                 :rules="[{ required: true, message: 'Please input the password!' }]">
                        <a-input v-model:value="formState.oldUserLoginForm.password"/>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 8, span: 24 }">
                        <a-button type="primary" html-type="submit" >登录</a-button>
                    </a-form-item>
                </a-form>
            </a-tab-pane>
        </a-tabs>
    </a-modal>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {userCreate, userLogin} from "../../api/modules/api.users.js";
import {JENotification} from "../../libs/util.toast.js";
import dbUtils from '../../libs/util.strotage.js'
import {useAuthStore} from '../../stores/auth.js'

const activeKey = ref('2');
const formRefNew = ref();
const formRefOld = ref();
const formState = reactive({
    newUserLoginForm: {
        email: '',
        password: '',
        comfirmPassword:'',
        name:'',
    },
    oldUserLoginForm: {
        email: '',
        password: '',
    },
    remember: true,
});


const props = defineProps({
    showModal: {
        type: Boolean,
    },
});
const showModal = ref(props.showModal)
const emit = defineEmits(['cancelModal'])
const handleCodeLogin = async () => {
    try {
        // await formRefOld.value.validate();
        const res = await useAuthStore().login(formState.oldUserLoginForm);
        // JENotification.success("登录成功");
        const userInfo = res;
        console.log(JSON.stringify(userInfo));
        // const userDB = dbUtils.get('userInfo')
        // console.log(userDB)
        emit('cancelModal')
        // location.reload();
    } catch (err) {
        console.log("Failed", err);
    }
};

const handleRegister = async () => {
    // 处理注册按钮点击逻辑
    try{
        const values = await formRefNew.value.validateFields();
        userCreate(formState.newUserLoginForm).then(res=>{
            JENotification.success('注册成功,现在可以登录了!')
            emit('cancelModal')
        })
    }catch (err){
        console.log('Failed',err)
    }
};


</script>

<style scoped>
/* 样式 */
</style>

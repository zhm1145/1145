<template>
    <a-flex gap="small">
        <a-popover placement="bottom">
            <template #content>
                <a-flex>
                    <a-image></a-image>
                    <a-flex vertical style="color: black;" gap="small">
                        <a-flex gap="small">
                            <h4 style="height: 20px;line-height: 20px;text-align: left">{{userInfo.name}}</h4>
                        </a-flex>

                        <text style="height: 20px;line-height: 20px;text-align: left;font-weight: lighter;font-size: small">
                            争取更
                        </text>
                        <text style="height: 20px;line-height: 20px;text-align: left;font-weight: lighter;font-size: small">
                            23关注 23粉丝 22获赞
                        </text>
                        <a-flex gap="middle">
                            <a-button type="default">发消息</a-button>
                            <a-button type="primary">+关注 422</a-button>
                        </a-flex>
                    </a-flex>
                </a-flex>
            </template>
            <template #title>
<!--                <span>Title</span>-->
            </template>
            <a-avatar :size="40" style="min-width: 40px;border: white 1px solid;">
                <template #icon>
                    <img  :src="userInfo.photo" />
                </template>
            </a-avatar>
        </a-popover>
        <a-flex vertical style="color: black;" gap="small">
            <a-flex gap="small">
                <text style="height: 20px;line-height: 20px;text-align: left;font-weight: bold">{{userInfo.name}}</text>
                <div style="height: 20px;line-height: 20px;font-weight: lighter;font-size: small" class="hoverSendMsg">
                    <svg t="1715255448396" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4438" width="10" height="10">
                        <path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z"
                              fill="" p-id="4439"></path>
                        <path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z"
                              fill="" p-id="4440"></path>
                    </svg>
                    发消息
                </div>
            </a-flex>

            <text style="height: 20px;line-height: 20px;text-align: left;font-weight: lighter;font-size: small">争取更
            </text>
            <a-flex gap="middle">
                <a-button type="default">充电</a-button>
                <a-button type="primary">+关注 422</a-button>
            </a-flex>
        </a-flex>
    </a-flex>
</template>

<script setup>
import {UserOutlined} from '@ant-design/icons-vue';
import dbUtils from '../../libs/util.strotage.js'
import {ref} from "vue";
const userInfo = ref(dbUtils.get('userInfo'))


</script>

<style scoped>
.hoverSendMsg:hover {
    color: rgb(0, 174, 236);
    cursor: pointer;
}
</style>
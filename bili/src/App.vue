<script setup>
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import {useSettingStore} from "./libs/util.setting.js";
import {ref, watchEffect} from "vue";
import {ConfigProvider} from "ant-design-vue";
import Header from "./views/home/header.vue";


const locale = ref(zhCN);
const settingStore = useSettingStore();

watchEffect(() => {
    const theme = settingStore.theme
    const local = settingStore.local
    locale.value = local === 'en' ? enUS : zhCN
    ConfigProvider.config({
        theme: theme.value
    })
})



</script>

<template>
    <Header class="header"></Header>
    <a-config-provider      :locale="locale">
        <RouterView   style="margin-top: 130px"     />
    </a-config-provider>
</template>

<style scoped lang="scss">
    .header{
        position: fixed;
        left: 0;
        top: 0;
    }
</style>

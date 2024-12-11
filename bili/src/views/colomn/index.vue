<!--专栏投稿-->
<template>
    <div class="bd-main" >
        <div class="container">
            <a-layout-sider>
                <ColomnLeftMsg></ColomnLeftMsg>
            </a-layout-sider>
            <a-layout-content>
                <ColomnRightMsg></ColomnRightMsg>
            </a-layout-content>
        </div>
    </div>
</template>

<script setup>
import ColomnLeftMsg from './colomnLeftMsg.vue'
import ColomnRightMsg from './colomnRightMsg.vue'
import Header from "../home/header.vue";

</script>

<style scoped>
@media (max-width: 600px) {
    .sideBarClass {
        /*display: none;*/
    }
}
.container{
    display: grid;
    grid-template-columns: 250px 1fr;
    column-gap: 20px;
}
.bd-main {
    position: absolute;
    margin: 0 auto;
    min-width: 100vw;
    left: 0;
    top: 0;
    /*background-color: rgb(250,250,250);*/
}
</style>
<template>
    <div class="main">
        <VideoPage class="first1"></VideoPage>
        <CommentList class="second1" ></CommentList>
    </div>

</template>

<script setup>
import VideoPage from '../videoPage/index.vue'
import CommentList from '../videoPage/commentList.vue'

</script>

<style scoped>
    .main{
        display: grid;
        grid-template-rows: 800px 1fr;
        grid-template-columns: 100%;
        /*grid-template-rows: 60% 40%;*/
        grid-template-areas:
          "first"
          "second";
    }
    .first1{
        grid-area: first;
    }
    .second1{
        grid-area: second;
    }
</style>
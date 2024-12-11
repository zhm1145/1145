<template>
      <a-flex  vertical align="center" justify="start" class="leftMsg">
          <div  class="main">
              <button class="submitBtn">投稿</button>
          </div>

      </a-flex>

</template>

<script setup>

</script>

<style scoped>
.submitBtn{
    /*box-sizing: border-box;*/
    min-width: 150px;
    background-color: rgb(0,161,214);
    min-height: 40px;
    color: white;
    letter-spacing: 3px;
    font-size: larger;
}
.leftMsg{
    padding-top: 20px;
    overflow-y: scroll;
    min-height: 860px;
    background-color: white;
    border-right: 2px solid rgb(242,242,242);
    ::-webkit-scrollbar-button{
        display: none;
    }
    /*定义滚动条轨道
 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
        border-radius:10px;
        background-color:#F5F5F5;
    }
    ::-webkit-scrollbar
    {
        width:3px;
        height:16px;
        background-color:#F5F5F5;
    }

}
</style>
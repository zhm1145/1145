<template>
    <div :id="playerId"  v-if="playerId"></div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import playbackRate from 'xgplayer/es/plugins/playbackRate'
import 'xgplayer/es/plugins/playbackRate/index.css'

const props = defineProps({
    id: String,
    url: String,
    poster: {
        type:String,
    },
    width:{
        type:String,
        default:250
    },
    height:{
        type:String,
        default:150
    }
});

const playerId = 'player_' + props.id;

const playerOpts = {
    plugins: [playbackRate],
    id: playerId,
    url: props.url,
    poster: props.poster,
    lang: "zh-cn",
    lastPlayTime: 0,
    lastPlayTimeHideDelay: 5,
    closeVideoClick: false,
    closeVideoTouch: true,
    videoInit: true,
    fluid: true,
    autoplay: false,
    loop: false,
    pip: true,
    volume: 1,
    controls: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    rotateFullscreen: true,
    width:props.width,
    height:props.height
};

let player = null;

onMounted(() => {
    player = new Player(playerOpts);
});

onUnmounted(() => {
    if (player) {
        player.destroy();
    }
});
</script>

<style scoped>

</style>
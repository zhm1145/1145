<template>
    <div ref="playerRef">
    </div>
</template>
<script setup  >
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import FlvPlugin from 'xgplayer-flv'
import {onMounted, ref} from "vue";
const playerRef = ref();

const onLoad = () => {
    const player = new Player({
        el: playerRef.value,
        height: 400,
        width: 500,
        url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
        plugins: [FlvPlugin],//使用插件
        autoplayMuted: true,// 是否自动静音自动播放（默认false）
        screenShot: true,// 是否使用截图（默认false）
        videoAttributes: {// video扩展属性
            crossOrigin: 'anonymous',// 元素获取数据的 CORS 请求的配置
        },
        marginControls: false,// 是否开启画面和控制栏分离模式（默认false）
        isLive: true,// 是否是直播
        // flv 插件参数
        flv: {
            retryCount: 3, // 重试 3 次，默认值
            retryDelay: 1000, // 每次重试间隔 1 秒，默认值
            loadTimeout: 10000, // 请求超时时间为 10 秒，默认值
            fetchOptions: {
                // 该参数会透传给 fetch，默认值为 undefined
                mode: 'cors'
            }
        }

    });
    player.on('ready', () => {
        console.log('XGPlayer is ready');
    });

    player.on('ended', () => {
        console.log('Live stream ended');
    });
}

onMounted(() => {
    onLoad()
})
</script>
<style scoped></style>

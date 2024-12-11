import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

    ],
    // 反向代理配置
    server: {
        //本地服务器主机名 配置后可以使用本地网络访问
        host: '0.0.0.0',
        //指定启动端口号
        port: 3090,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
            }
        },
        // 如果资源是从与你的网站不同的位置提供的
        headers:{
            'Cross-Origin-Resource-Policy': 'cross-origin',
        }

    },
    // proxy: {
    //     '/api': {
    //         target: "http://suq6y5.natappfree.cc/",
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    // }
})

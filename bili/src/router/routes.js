
const frameIn = [
    {
        path:'/',
        redirect:{
            name:'index'
        },
        component:()=>import('../views/home/index.vue'),
        children:[
            {
                path:'/index',
                name:'index',
                meta:{
                    cache:true,
                    title:'首页',
                    requiredAuth:false
                },
                component:()=>import('../views/home/index.vue'),
            },


        ]
    },
    {
        // 直播页面
        path:'/isLive',
        name:'isLive',
        requiredAuth:false,
        component:()=>import('../views/home/isLive.vue'),
    },
    {
        // test
        path:'/test',
        name:'test',
        requiredAuth:false,
        component:()=>import('../assets/styles/beautifyPage/css3DCarousel.vue'),
    },
    {
        path:'/watch/:videoIndex/:videoId',
        name:'watch',
        component:()=>import('../views/watch/index.vue'),
        requiredAuth:false
    },
    {
        path:'/uploadItem/:uploadId',
        name:'uploadItem',
        meta:{
            cache:true,
            title:'投稿详情页面',

            requiredAuth:false
        },
        component:()=>import('../views/myRoom/uploadItem.vue')
    },
    {
        path:'/myRoom',
        name:'myRoom',
        component:()=>import('../views/myRoom/index.vue'),
        requiredAuth:false,
        children:[
            {
                path:'/dynamic',
                name:'dynamic',
                meta:{
                    cache:true,
                    title:'动态',

                    requiredAuth:false
                },
                component:()=>import('../views/myRoom/dynamic.vue')
            },
            {
                path:'/upload',
                name:'upload',
                meta:{
                    cache:true,
                    title:'投稿',

                    requiredAuth:false
                },
                component:()=>import('../views/myRoom/upload.vue')
            },

            {
                path:'/collections',
                name:'collections',
                meta:{
                    cache:true,
                    title:'合集和列表',

                    requiredAuth:false
                },
                component:()=>import('../views/myRoom/collections.vue')
            },

            {
                path:'/favorites',
                name:'favorites',
                meta:{
                    cache:true,
                    title:'收藏',

                    requiredAuth:false
                },
                component:()=>import('../views/myRoom/favorites.vue')
            },
            {
                path:'/myRoom',
                name:'myRoom',
                meta:{
                    cache:true,
                    title:'主页',

                    requiredAuth:false
                },
                component:()=>import('../views/myRoom/myRoom.vue')
            }

        ]
    },
    {
        path:'/colomn',
        name:'colomn',
        component:()=>import('../views/colomn/index.vue'),
        requiredAuth:false
    },
]
/**
 * 错误页面
 */
const errorPage =[
    {
        path:'/401',
        name:'401',
        component:()=>import('../views/error/401.vue'),
        meta:{
            title:'401',
        },

    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: '404',
    //     component: () => import('@/views/error/404.vue'),
    //     meta: {
    //         title: '404',
    //     },
    // }
]


export default [
    ...frameIn,

    ...errorPage
]
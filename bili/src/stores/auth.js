import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import {useDbStore} from './db.js'
import dbUtils from '../libs/util.strotage.js'


import {JENotification} from "../libs/util.toast.js";
import {userLogin, usersFindOne} from "../api/modules/api.users.js";


export const useAuthStore = defineStore('auth', () => {
    let router = useRouter()
    const db = useDbStore()

    function logout() {
        // 执行退出登录逻辑，例如清除用户凭证和重置用户状态等
        // ...
        // 清除所有缓存
        dbUtils.clear()
        db.removeAllInfo()
        // 导航到登录页或其他适当的页面
        router.replace('/index');
        if (router.currentRoute.value.path === '/index') {
            location.reload();
        }
    }

    async function login(value) {
        return new Promise((resolve, reject) => {
            userLogin(value).then(res => {
                // dbUtils.clear()
                // console.log(res.data.token)
                dbUtils.set('token', res.token)
                console.log("TOKEN...",res.token)
                console.log("RES..."+ JSON.stringify(res))
                usersFindOne({id: res.data.user._id}).then(user=>{
                    // 存储用户信息
                    console.log("USER..."+JSON.stringify(user))
                    dbUtils.set('userInfo', JSON.stringify(user.data.data))
                    // 导航到登录页或其他适当的页面
                    resolve({...res.data})
                    JENotification.success(`欢迎: ${res.data.user.name}`)
                    router.replace('/');
                })
                resolve(res)
                // rolesFindOne({id: res.data.roleId}).then(role => {
                //     console.log(role.data.permissions)
                //     // 暂存权限信息
                //     setPerm(role.data.permissions)
                //     // 导航到登录页或其他适当的页面
                //     resolve({...res.data, ...role.data})
                //
                //     ZyNotification.success(`欢迎: ${res.data.nickname}`)
                //     router.replace('/');
                // })
            }).catch(err => {
                reject(err)
            })
        })


    }


    // 获取用户的角色权限列表数据 并且存储本地
    async function setPerm(value) {
        dbUtils.set('perms', value)
    }

    return {
        setPerm,
        logout,
        login
    }
})
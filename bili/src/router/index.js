import {createRouter, createWebHashHistory} from "vue-router";
import routes from './routes.js'
import dbUtils from  '../libs/util.strotage.js'

const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),

    routes
})


function hasPermisson (permissionList,to){
    if(permissionList.includes('*'))return true
    if(to.meta && to.meta.perms){
        return permissionList.some(permissionList=>to.meta.includes(permissionList))

    }else{
        return true
    }
}



router.beforeEach(async (to,from,next)=>{


    //check if loggin

    if(to.meta.requiredAuth){
        const isLoggedIn = dbUtils.get('token')
        //if the user has logined

        if(isLoggedIn){
            if(to.name==='login'){
                //if logined,then go the homePage
                return next('/')
            }
            const permissionList = dbUtils.get('perms')
            //get the user's permission to check the auth
            if(!permissionList){
                //clear all the data
                dbUtils.clear()
                //redirect to the login page
                return next({name:'login'})
            }
            const hasRoles = hasPermisson(permissionList,to)
            if(hasRoles){
                //can goin the page
                return next()
            }
            //can't goin
            return next({name:'401'})
        }

        //no loginded
        dbUtils.clear()
        return next({name:'login'})
    }
    next()
})

router.onError((error)=>{
    console.error('路由错误:', error);
})

export default router
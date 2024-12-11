import {ref} from 'vue'
import{defineStore} from "pinia";
import setting from "../setting.js";
const setData = {
    defaultThemes:(setting.theme.list.find(theme=>theme.fixed===true)),
    defaultLocal:'zh',

}
export const useSettingStore = defineStore('setting',()=>{
    const theme = ref(setData.defaultThemes);
    const local = ref(setData.defaultLocal)
    //set the theme color
    function  themeSet(type){
        theme.value = setting.theme.list.find(theme=>theme.name===type)
    }
    //set the theme language
    function localSet(type){
        local.value = type;
    }

    return {
        theme,
        local,

        themeSet,
        localSet
    }
})
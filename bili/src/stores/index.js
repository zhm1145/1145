import {createStore} from "vuex";
const store = createStore({
    state(){
        return {
            //所有的video资源
            watchVideo:[]
        }
    },
    mutations:{
        updateWatchVideo(state,data){
            state.watchVideo  = data
        }
    },
    actions: {
        updateWatchVideo({ commit }, data) {
            commit("updateWatchVideo", data);
        },
    },
})

export default store;
import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        trendPolls: [],
        recentPolls: [],
    },
    mutations: {
    },
    getters:{
    },
    actions: {
        GET_RECENT_POLL({commit, state, getters}){
            // this.$axios.$get("api/theme/popular")
            //     .then((response) => {
            //         state.popularContents = response.data
            //     });
            state.recentPolls = [
                {
                    "id":1,
                    "title":"wdwdwd"
                }];
        },
        GET_TREND_POLL({commit, state, getters}){
            // this.$axios.$get("api/theme/popular")
            //     .then((response) => {
            //         state.popularContents = response.data
            //     });
            state.trendPolls = [
                {
                    "id":1,
                    "title":"aaaa"
                },
                {
                    "id":2,
                    "title":"aaaa2"
                },
                {
                    "id":3,
                    "title":"aaaa3"
                },
                {
                    "id":4,
                    "title":"aaa4a"
                },{
                    "id":5,
                    "title":"aaa55a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                },{
                    "id":6,
                    "title":"aaa666a"
                }
            ]
        }
    }
})

export default store

const moduleA = {
    namespaced: true,
    state: {
        counter: 0,
        userInfo: {}
    },
    getters: {
        time2(state) {
        return state.counter * 2;
        },
        userInfo() {
            return state.userInfo
        }
    },
    mutations: { 
        setCounter(state, value) {
            state.counter = value;
        }
    },
    actions: { 

    },
}
export default moduleA;
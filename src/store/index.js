import { createStore } from 'vuex';

export default createStore({
    state: {
        lang: ''
    },
    mutations: {
        setLang(state, lang) {
            state['lang'] = lang;
        }
    },
    actions: {},
    modules: {}
});

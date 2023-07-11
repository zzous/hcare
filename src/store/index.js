import { createStore } from 'vuex';
import moduleA from './modules/moduleA';

const store = createStore({
    modules: {
        moduleA
    }
});
  
export default store;
  
<template>
    <div class="layout" :style="'min-height:'+ state.winH +'px'">
        <MainHeader />
        <div class="maincontainer">
            <MainMenu />
            <div class="page_content">
                {{ $moment().format('YYYY-MM-DD HH') }}
                {{$t('validation.msgRequiredInput')}}
                <div>
                    {{ state.testapi }}
                    <span>가져오기{{ counter }}</span>
                    {{ test.times2 }}
                    <button @click="inc">inc</button>
                </div>
                <Location :pageMeta="state.pageMeta" v-if="state.navigation"/>
                <RouterView />
            </div>
        </div>
        <div class="footer">footer</div>
    </div>
</template>
<script>
import { reactive, onMounted, watch, computed } from 'vue'
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import MainMenu from "@/components/layout/MainMenu.vue";
import MainHeader from '@/components/layout/MainHeader.vue';
import Location from '@/components/layout/Location.vue';
import _ from 'lodash';

import { _getCategoryList } from '@/api/dashboard'

export default{
    components: { MainMenu, MainHeader, Location },
    
    setup () {
        const route = useRoute()
        const store = useStore();
        const counter = computed(() => store.state.moduleA.counter);
        const test = computed(() => store.getters);
        const inc = () => store.commit("setCounter", counter.value + 1);
        const state = reactive({
            winH:0,
            pageMeta:[],
            locations:[],
            navigation:false,
            array: ['a', 'b', 'c'],
            testapi: ''

        })
        watch(() => {
            route,
            state.pageMeta = route.meta.sublocation_depth
            console.log()
            state.navigation = Object.keys(route.meta).length > 0
        })
        onMounted(() => {
            state.winH=window.innerHeight
            console.log(_.indexOf(state.array, 'b'))

            testApi()
        })

        const testApi = async () => {
            try {
                const response = await _getCategoryList()
                console.log('test api', response)
                state.testapi = response
            } catch (error) {
                console.log(error)
            }
        }
        return {
            MainMenu,
            MainHeader,
            state,
            counter, 
            inc, 
            test
        }
      }
    }
</script>
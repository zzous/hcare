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
import { useRouter, useRoute } from 'vue-router'
import MainMenu from "@/components/layout/MainMenu.vue";
import MainHeader from '@/components/layout/MainHeader.vue';
import Location from '@/components/layout/Location.vue';

import { _getCategoryList } from '@/api/dashboard'

export default{
    components: { MainMenu, MainHeader, Location },
    
    setup () {
        const router = useRouter()
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
<style>
*{box-sizing: border-box;}
.layout{display: flex; flex-direction: column;}
.footer{margin-top: auto; background: #e5e5e5; padding:30px 0 30px 220px; text-align: left;}
.admin_header{height:50px; padding:0 20px; border-bottom:solid 5px #f5f5f6}
.top_area{display:flex; justify-content:space-between; align-items:center; height:100%}
.btn{border:solid 1px #d7dade; height:28px; background:#fff; color:#111111; line-height:28px; border-radius:4px; font-size:13px; padding:0 20px; text-align:center }
.maincontainer{padding:30px 30px 30px 250px;}
.admin_menu{width:200px; height:calc(100% - 50px);background:#f5f5f6;position:fixed; left:0; top:50px; padding-top:30px}
.menu > ul > li{border-bottom:solid 1px #ddd; text-align:left;position: relative; }
.menu > ul > li > span{display:block;font-size:14px;font-weight: 700; padding:0px 20px; position:relative; height:30px; line-height:30px;}
.menu > ul > li > span:before{content:""; display:block; width:3px; height:3px; background:#111; position:absolute; left:10px; top:13px;}
.menu > ul > li > span::after{content: "+"; display: block; position: absolute; right:20px; top:0px; font-size:14px; }
.menu > ul > li > ul{display: none;}
.menu > ul > li > ul > li > span{display:block;height:22px;padding-left:22px;font-size: 12px;line-height:22px;}
.menu > ul > li > ul > li > ul{display: none;}
.menu > ul > li > ul > li > ul > li > span{display:block;height:22px;padding-left:34px;font-size: 12px;line-height:22px; }

.menu > ul > li.isActive > span{color:#60584c; background:#f3f1ea; box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 7%);}
.menu > ul > li.isActive > ul{display: block;}
.menu > ul > li > ul > li.isActive > span{background:#dcd4c3; box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 7%);}
.menu > ul > li > ul > li.isActive > ul{display: block;}
.menu > ul > li > ul > li.isActive > ul > li.isActive > span{color:#f75e5e}

.pagelocationWrap{display:flex; justify-content: space-between; align-items: center; margin-bottom:30px;}
.pagetitle{font-size:20px; font-weight:700;color:#111}
.pagelocation{}
</style>
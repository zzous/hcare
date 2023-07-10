<template>
    <div class="admin_menu">
        <div class="menu">
            <ul>
                <!-- 1depth -->
                <li 
                    :class="[{'depth':item.depth},{'isActive':item.isActive}]"
                    v-for="(item, index) in state.menu" :key="index"
                >
                    <span @click="gnbOpen(index)">{{ item.label }}</span>
                    <!-- 2depth -->
                    <ul v-if="item.depth">
                        <li v-for="(sub, i) in item.depth_sub" :key="i" :class="[{'isActive':sub.isActive}]">
                            <span @click="gnbOpen(index, i)">{{ sub.label }}</span>
                             <!-- 3depth -->
                            <ul>
                                <li v-for="(depth, idx) in sub.menuitems" :key="idx" :class="[{'isActive':depth.isActive}]">
                                    <span @click="gnbOpen(index, i, idx, url)">{{ depth.label }}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { menuLists } from "@/data/menu.js";
export default {
    setup () {
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
            menu:menuLists,
            currentMenu:''
        })
        const gnbOpen =(depth1, depth2, depth3) =>{
            console.log(depth1, depth2, depth3)
            state.menu.forEach((item, index) => {
                //depth1
                if(index === depth1){
                    if(!item.depth){
                        console.log(item.url)
                    }
                    item.isActive=true
                    //depth2
                    item.depth_sub.forEach((item, i) =>{
                        if(i === depth2){
                            item.isActive=true
                            //depth3
                            item.menuitems.forEach((item, idx) =>{
                                if(idx===depth3){
                                    item.isActive=true
                                    router.push(item.url)
                                    console.log(item.url, router)
                                }else{
                                    item.isActive=false 
                                }
                            })
                        }else{
                            item.isActive=false
                        }
                    })
                }else{
                    item.isActive=false
                }
                
            })
        }
        watch(() => {
            //라우팅에 따른 메뉴 on 처리
            if(route.meta.sublocation_depth){
                router,
                route
                state.currentMenu = route.meta.sublocation_depth
                state.menu.forEach((item, index) => {
                    if(item.label === state.currentMenu[0]){
                        item.isActive = true
                        item.depth_sub.forEach((sub, index) => {
                            if(sub.label === state.currentMenu[1]){
                                sub.isActive = true
                                sub.menuitems.forEach((depth, index) => {
                                    if(depth.label === state.currentMenu[2]){
                                        depth.isActive =true
                                    }
                                });
                            }
                        });
                    }
                });

                console.log(state.currentMenu[1])
            }
        })
    
        
        return {
            state,
            menuLists,
            gnbOpen 
        }
    }
}
</script>
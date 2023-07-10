<template>
    <div class="admin_menu">
        <div class="menu">
            <ul>
                <template v-for="(item, index) in state.menuList" :key="index">
                    <li>
                        <span>{{ item.label }}</span>
                        <ul v-if="item.children">
                            <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
                                <li @click="linkTo(subItem.path)">{{ subItem.label }}</li>
                            </template>
                        </ul>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { menuList } from '@/data/menu.js';
export default {
    setup () {
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
            menuList: menuList,
            currentMenu: ''
        })

        /** @hooks */
        watch(() => route, () => {
            if(route.meta.children){
                state.currentMenu = route.meta.children
                state.menuList.forEach((item) => {
                    if(item.label === state.currentMenu[0]){
                        item.isActive = true
                        item.depth_sub.forEach((sub) => {
                            if(sub.label === state.currentMenu[1]){
                                sub.isActive = true
                                sub.menuitems.forEach((depth) => {
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

        /** @methods */
        const gnbOpen =(depth1, depth2, depth3) =>{
            console.log(depth1, depth2, depth3)
            state.menuList.forEach((item, index) => {
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

        const linkTo = (link) => {
            router.push(link)
        }
        
    
        
        return {
            state,
            menuList,
            gnbOpen,
            linkTo,
        }
    }
}
</script>
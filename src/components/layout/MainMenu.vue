<template>
    <div class="side-area" :class="{'isOpen': state.isOpen}">
        <div>
            사용자 정보
            <b-button>로그아웃</b-button>
            <button @click="toggleSideMenu">close</button>
        </div>
        <div class="menu">
            <ul>
                <template v-for="(item, index) in state.menuList" :key="index">
                    <li>
                        <span @click="item.path ? linkTo(item.path) : ''">{{ item.label }}</span>
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
import { onBeforeUnmount, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { menuList } from '@/data/menu.js';
export default {
    setup() {
        const router = useRouter();
        const state = reactive({
            isOpen: false,
            menuList: menuList,
            currentMenu: ''
        });

        /** @hooks */
        onMounted(() => {
            emitter.$on('openSideMenu', toggleSideMenu);
        });

        onBeforeUnmount(() => {
            emitter.$off('openSideMenu', toggleSideMenu);
        });

        /** @methods */
        
        const toggleSideMenu = () => {
            state.isOpen = !state.isOpen;
        };

        const linkTo = (link) => {
            router.push(link);
        };

        return {
            state,
            menuList,
            toggleSideMenu,
            linkTo
        };
    }
};
</script>

<style>
.side-area { position: fixed; top: 0; right: -200px; width: 200px; height: 100%; background: #ddd; }
.side-area.isOpen { right: 0; }
</style>
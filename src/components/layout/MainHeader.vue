<template>
    <header class="header">
        <div class="top-area">
            <div class="logo">LOGO</div>
            <div class="title">TITLE</div>
            <div class="menu">
                <span @click="openMenu">menu</span>
                <MainMenu />
            </div>
        </div>
    </header>
</template>

<script>
import MainMenu from './MainMenu.vue';
import { onMounted } from 'vue';
export default {
    components: {
        MainMenu
    },
    setup() {
        /** @hooks */

        /** @methods */
        
        /**
         * eventBus test
         */
        const openMenu = () => {
            emitter.$emit('openSideMenu');
        };

        return {
            openMenu
        };
    }
};
</script>

<style>
.header { position: relative; background: #ddd; }
.header .top-area { display: flex; align-items: center; justify-content: space-between; height: 40px; }
</style>
<template>
    <header class="admin_header">
        <div class="top_area">
            <MainMenu />
            <div>어드민 로고</div>
            <div style="display:flex; align-items:center">
                사용자 정보
                <b-button style="margin-left:10px">로그아웃</b-button>
            </div>
        </div> 
    </header>
</template>

<script>
import MainMenu from './MainMenu.vue'
export default {
    components: {
        MainMenu
    },
    setup() {
        // 
    }
}
</script>
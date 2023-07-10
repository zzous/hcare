<template>
    <div id="mainWrap">
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
    setup () {
        
        return {
            RouterView
        }
    }
}
</script>

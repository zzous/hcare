<template>
    <div class="pagelocationWrap">
        <div class="pagetitle">{{ state.pageTitle }}</div>
        <div class="location">
            <span>홈</span>
            <span v-for="(location, index) in state.locations" :key="index">
                &gt; {{ location }}
            </span>
        </div>
    </div>
</template>
<script>
import { reactive, watch } from 'vue'

export default {
    props: ['pageMeta'],
    setup (props) {
        const state = reactive({
            pageTitle: '',
            locations: []
        })
        watch(() => {
            if(props.pageMeta) {
                props.pageMeta,
                state.locations = props.pageMeta
                state.pageTitle = props.pageMeta[(state.locations.length-1)]
            }
        })

        return {
            state
        }
    }
}
</script>
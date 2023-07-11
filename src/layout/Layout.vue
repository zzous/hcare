<template>
    <MainHeader />
    <Location :pageMeta="state.pageMeta" v-if="state.navigation"/>
    <RouterView />
    <MainFooter />
</template>
<script>
/** @instance */
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
/** @components */
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import Location from '@/components/layout/Location.vue';

export default {
    components: {
        MainHeader,
        Location,
        MainFooter
    },
    
    setup() {
        const route = useRoute();
        const state = reactive({
            pageMeta: [],
            navigation: false
        });
        // watch(route, () => {
        //     console.log('>> watch route');
        //     state.pageMeta = route.meta.sublocation_depth;
        //     state.navigation = Object.keys(route.meta).length > 0;
        // });

        return {
            state
        };
    }
};
</script>
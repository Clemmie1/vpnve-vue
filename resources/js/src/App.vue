<template>
    <PHeader/>
    <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PHeader from "@/src/Components/PHeader.vue";

export default defineComponent({
    components: {PHeader},
    setup(){

    }
});
</script>

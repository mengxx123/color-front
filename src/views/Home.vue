<template>
    <my-page title="调色板">
        <!--<ui-color-picker v-model="color1" ></ui-color-picker>-->
        <ui-color-picker-ex v-model="color2" ></ui-color-picker-ex>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                color1: '#ff0000',
//                color1: 'rgba(19, 206, 102, 0.8)'
//                color1: null
                color2: '#ff0000'
            }
        },
        mounted () {
        },
        methods: {
        }
    }
</script>

<style scoped>
</style>

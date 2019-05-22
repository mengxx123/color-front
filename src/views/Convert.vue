<template>
    <my-page title="颜色转换">
        <div class="common-container container">
            <ui-text-field v-model="code" label="颜色代码" />
            <br>
            <ui-raised-button label="转换" primary @click="convert" />
        </div>
    </my-page>
</template>
 
<script>
    export default {
        data () {
            return {
                code: ''
            }
        },
        mounted() {
            this.bodyBgColor = document.body.style.backgroundColor
        },
        destroyed() {
            document.body.style.backgroundColor = this.bodyBgColor
        },
        methods: {
            convert() {
                console.log(document.body)
                document.body.style.backgroundColor = this.keyword
            }
        }
    }
</script>

<style lang="scss" scoped> 
    .search-box {
        display: inline-block;
        padding: 16px;
    }
</style>

<template>
    <my-page title="搜索">
        <div class="common-container container">
            <ui-paper class="search-box">
                <ui-text-field v-model="keyword" hintText="#f00" />
                <ui-raised-button label="搜索" primary @click="search" />
            </ui-paper>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                keyword: ''
            }
        },
        mounted() {
            this.bodyBgColor = document.body.style.backgroundColor
        },
        destroyed() {
            document.body.style.backgroundColor = this.bodyBgColor
        },
        methods: {
            search() {
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

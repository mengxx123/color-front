<template>
    <my-page title="调色板 - 设置" backable>
        <div class="common-container container">
            <h2 class="section-title">色板管理</h2>
            <ul class="palette-list">
                <li class="item" v-for="color in colors">
                    <div class="palette" :style="{'background-color': color}"></div>
                    <div class="code" @click="remove(color)">删除</div>
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                colors: ['#ff0000', '#0099cc', '#000000', '#ffffff']
            }
        },
        mounted() {
            this.colors = this.$storage.get('colors', this.colors)
        },
        methods: {
            remove(color) {
                for (let i = 0; i < this.colors.length; i++) {
                    if (this.colors[i] === color) {
                        this.colors.splice(i, 1)
                        break
                    }
                }
                this.$storage.set('colors', this.colors)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .section-title {
        margin-bottom: 16px;
        font-size: 24px;
    }
    .palette-list {
        max-width: 800px;
        @include clearfix;
        .item {
            float: left;
            margin-right: 16px;
            margin-bottom: 16px;
        }
        .palette {
            width: 40px;
            height: 40px;
            margin: 0 auto 8px auto;
            border-radius: 50%;
            border: 1px solid #999;
            cursor: pointer;
        }
        .code {
            cursor: pointer;
            text-align: center;
        }
    }
</style>

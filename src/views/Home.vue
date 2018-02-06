<template>
    <my-page title="调色板" :page="page">
        <!--<ui-color-picker v-model="color1" ></ui-color-picker>-->
        <ui-color-picker-ex class="color-picker" v-model="color2"></ui-color-picker-ex>
        <div class="btns">
            <ui-icon-button class="color-copy btn-copy" icon="content_copy" title="复制" :data-clipboard-text="color2" />
            <ui-icon-button class="btn" icon="add" title="添加到颜色面板" @click="add" />
        </div>

        <ul class="palette-list">
            <li class="item btn-copy" v-for="color in colors"
                :data-clipboard-text="color">
                <div class="palette" :style="{'background-color': color}"></div>
                <div class="code">{{ color }}</div>
            </li>
        </ul>
    </my-page>
</template>

<script>
    const Clipboard = window.Clipboard

    export default {
        data () {
            return {
                color1: '#ff0000',
//                color1: 'rgba(19, 206, 102, 0.8)'
//                color1: null
                color2: '#ff9c1d',
                colors: ['#ff0000', '#0099cc', '#000000', '#ffffff'],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/palette/help'
                        }
                    ]
                }
            }
        },
        mounted () {
            this.colors = this.$storage.get('colors', this.colors)

            this.clipboard = new Clipboard('.btn-copy')
            this.clipboard.on('success', function(e) {
//                console.info('Action:', e.action);
//                console.info('Text:', e.text);
//                console.info('Trigger:', e.trigger);
                e.clearSelection()
            })
            this.clipboard.on('error', function(e) {
            })
        },
        destroyed() {
            this.clipboard.destroy()
        },
        methods: {
            add() {
                this.colors.unshift(this.color2)
                this.$storage.set('colors', this.colors)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .color-copy {
        margin-bottom: 16px;
    }
    .color-picker {
        height: 300px;
    }
    .palette-list {
        @include clearfix;

        .item {
            float: left;
            margin-right: 16px;
            margin-bottom: 16px;
            cursor: pointer;
        }
        .palette {
            width: 40px;
            height: 40px;
            margin: 0 auto 8px auto;
            border-radius: 50%;
            border: 1px solid #999;
        }
        .code {
            text-align: center;
        }
    }
</style>

<template>
    <my-page title="调色板" :page="page">
        <!-- <ui-color-picker v-model="color1" ></ui-color-picker> -->
        <ui-color-picker-ex class="color-picker" v-model="color2"></ui-color-picker-ex>
        <div class="btns">
            <ui-icon-button class="color-copy btn-copy" icon="content_copy" title="复制" :data-clipboard-text="color2" />
            <ui-icon-button class="btn" icon="add" title="添加到颜色面板" @click="add" />
        </div>

        <ul class="palette-list">
            <li class="item" v-for="color in colors">
                <div class="palette" :style="{'background-color': color}" @click="setColor(color)"></div>
                <div class="code btn-copy" :data-clipboard-text="color" title="点击复制代码">{{ color }}</div>
            </li>
        </ul>
    </my-page>
</template>

<script>
    const Clipboard = window.Clipboard

    export default {
        data () {
            return {
                color1: '#ff9c1d',
                color2: '#ff9c1d',
                colors: ['#ff0000', '#0099cc', '#000000', '#ffffff'],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'settings',
                            to: '/palette/settings'
                        },
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
            setColor(color) {
//                this.color2 = color
            },
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
            /*cursor: pointer;*/
        }
        .code {
            cursor: pointer;
            text-align: center;
        }
    }
</style>

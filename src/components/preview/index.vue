<template>
    <div id="preview-box" class="preview-box" v-if="visiable" :style="{background: getBg()}">
        <ui-icon-button class="close" icon="close" @click="close" />
        <pre class="ui-pre css">{{ code }}</pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visiable: false,
                code: '',
                colors: ['#56CCF2', '#2F80ED']
            }
        },
        props: {
        },
        computed: {
        },
        watch: {
        },
        methods: {
            getBg: function () {
                return 'linear-gradient(to right, ' + this.colors.join(', ') + ')'
            },
            created: function () {
                this.visiable = false
            },
            show: function (colors) {
                this.colors = colors
                this.visiable = true
                this.code = 'background: ' + this.colors[0] + ';  /* fallback for old browsers */\n' +
                    'background: -webkit-linear-gradient(to right, ' + this.colors.join(', ') + ');  /* Chrome 10-25, Safari 5.1-6 */\n' +
                    'background: linear-gradient(to right, ' + this.colors.join(', ') + '); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */'
            },
            close: function () {
//                this.$comit('close')
                this.visiable = false
            }
        }
    }
</script>

<style lang="scss">
    .preview-box {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgb(217, 167, 199), rgb(255, 252, 220));
        .close {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: #fff;
        }
        .css {
            width: 480px;
            position: absolute;
            right: 16px;
            bottom: 16px;
        }
    }
</style>

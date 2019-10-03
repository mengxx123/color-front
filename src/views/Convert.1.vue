<template>
    <my-page title="颜色转换" :page="page">
        <div class="common-container container">
            <ui-text-field v-model="code" label="颜色代码" />
            <br>
            <ui-raised-button label="转换" primary @click="convert" />
            <div class="result" v-if="result">
                <div class="info btn-copy" :data-clipboard-text="result.hex">hex: {{ result.hex }}</div>
                <div class="info btn-copy" :data-clipboard-text="result.rgbCode">hex: {{ result.rgbCode }}</div>
                <div class="info btn-copy" :data-clipboard-text="result.rgbCode">hsl: {{ result.hslCode }}</div>
                <div class="info btn-copy" :data-clipboard-text="result.rgbCode">hsv: {{ result.hsvCode }}</div>
                <div class="info btn-copy" :data-clipboard-text="result.cmykCode">cmyk: {{ result.cmykCode }}</div>
            </div>
        </div>
    </my-page>
</template>
 
<script>
    const convert = require('color-convert')
    const Clipboard = window.Clipboard

    export default {
        data () {
            return {
                code: '#f00',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/e53fc1509b1511e99db4c5f911656178',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
            // this.bodyBgColor = document.body.style.backgroundColor
            this.clipboard = new Clipboard('.btn-copy')
            this.clipboard.on('success', e => {
//                console.info('Action:', e.action);
//                console.info('Text:', e.text);
//                console.info('Trigger:', e.trigger);
                e.clearSelection()
                this.$message({
                    type: 'success',
                    text: '已复制'
                })
            })
            this.clipboard.on('error', function(e) {
                console.log('错误')
            })

            this.debug()
        },
        destroyed() {
            this.clipboard.destroy()
            // document.body.style.backgroundColor = this.bodyBgColor
        },
        methods: {
            debug() {
                // this.code = '#f00'
                this.code = 'rgb(255, 0, 0)'
                this.convert()
            },
            convert() {
                this.result = {}
                let convertor
                let type

                if (this.code.includes('#')) {
                    type = 'hex'
                } else if (this.code.includes('rgb')) {
                    type = 'rgb'
                }
                convertor = convert[type]
                console.log('convertor', convertor)
                let hex = convertor.hex(this.code)
                this.result.hex = hex

                if (type !== 'rgb') {
                    let rgb = convertor.rgb(this.code)
                    this.result.rgb = rgb
                    this.result.rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` 
                }

                let hsl = convertor.hsl(this.code)
                this.result.hsl = hsl
                this.result.hslCode = `hsl(${hsl[0]}${hsl[0] ? '%' : ''}, ${hsl[1]}%, ${hsl[2]}%)`

                let hsv = convertor.hsv(this.code)
                this.result.hsv = hsv
                this.result.hsvCode = `hsv(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`

                let cmyk = convertor.cmyk(this.code)
                this.result.cmyk = cmyk
                this.result.cmykCode = `cmyk(${cmyk[0]}, ${cmyk[1]}, ${cmyk[2]})`

                console.log('this.result', this.result)
                // console.log(document.body)

                // document.body.style.backgroundColor = this.keyword
            }
        }
    }
</script>

<style lang="scss" scoped> 
    .search-box {
        display: inline-block;
        padding: 16px;
    }
    .result {
        margin-top: 16px;
        .info {
            font-size: 16px;
            margin-bottom: 16px;
        }
    }
    .btn-copy {
        cursor: pointer;
    }
</style>

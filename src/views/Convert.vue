<template>
    <my-page title="颜色转换" :page="page">
        <div class="common-container container">
            <ui-text-field v-model="code" label="颜色代码" />
            <br>
            <ui-raised-button label="转换" primary @click="make" />
            <div class="result" v-if="result">
                <div class="item btn-copy" :data-clipboard-text="result.hexCode">
                    <div class="badge-box">
                        <ui-badge class="badge" content="HEX" />
                    </div>
                    {{ result.hexCode }}
                </div>
                <div class="item btn-copy" :data-clipboard-text="result.hexSimple" v-if="result.hexSimple">
                    <div class="badge-box">
                        <!-- <ui-badge class="badge" content="HEX" /> -->
                    </div>
                    {{ result.hexSimple }}
                </div>

                
                <div class="item btn-copy" :data-clipboard-text="result.rgbCode">
                    <div class="badge-box">
                        <ui-badge class="badge" content="RGB" />
                    </div>
                    {{ result.rgbCode }}
                </div>
                <div class="item btn-copy" :data-clipboard-text="result.rgbCode">
                    <div class="badge-box">
                        <ui-badge class="badge" content="HSL" />
                    </div>
                    {{ result.hslCode }}</div>
                <div class="item btn-copy" :data-clipboard-text="result.rgbCode">
                    <div class="badge-box">
                        <ui-badge class="badge" content="HSV" />
                    </div>
                    {{ result.hsvCode }}</div>
                <div class="item btn-copy" :data-clipboard-text="result.cmykCode">
                    <div class="badge-box">
                        <ui-badge class="badge" content="CMYK" />
                    </div>
                    {{ result.cmykCode }}</div>
            </div>
        </div>
    </my-page>
</template>
 
<script>
    /* eslint-disable */
    const convert = require('color-convert')
    const Clipboard = window.Clipboard

    export default {
        data () {
            return {
                code: '',
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
            let { data } = this.$route.query
            console.log('daat', data)
            if (data) {
                this.code = data
                // this.code = 'rgb(255, 0, 0)'
                this.convert()
            }
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

            // this.debug()
        },
        destroyed() {
            this.clipboard.destroy()
            // document.body.style.backgroundColor = this.bodyBgColor
        },
        methods: {
            debug() {
                // this.code = '#f00'
                // this.code = 'f00'
                this.code = '255, 0, 0'
                // this.code = 'rgb(255, 0, 0)'
                this.convert()
                // console.log('调试', colorconv.HEX2RGB(this.code))
            },
            _convert(code, from, to) {
                // if (from === to) {
                //     return code
                // }
                let rgb = colorconv.parse(code)
                console.log('rgb', rgb)
                if (to === 'rgb') {
                    return rgb
                    // return `rgb(${rgb[0]}, ${rgb[0]}, ${rgb[0]})`
                }
                try {
                    // let method = `${from.toUpperCase()}2${to.toUpperCase()}`
                    let method = `RGB2${to.toUpperCase()}`
                    console.log('method', method)
                    return colorconv[method](code)
                } catch (err) {
                    console.error(err)
                }
            },
            make() {
                this.result = null
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请输入颜色代码'
                    })
                    return
                }
                this.$router.replace(`/convert?data=${encodeURIComponent(this.code)}`)
            },
            convert() {
                // this.convert()
                console.log('data', encodeURIComponent(this.code))
                this.result = {}

                if (this.code.match(/^[0-9a-f]{3}$/) || this.code.match(/^[0-9a-f]{6}$/)) {
                    this.code = '#' + this.code
                }

                let match = this.code.match(/^([\d.]+?)[^\d.]+?([\d.]+?)[^\d.]+?([\d.]+?)$/)
                if (match) {
                    console.log('匹配', match)
                    this.code = `rgb(${match[1]}, ${match[2]}, ${match[3]})`
                    // return
                    // this.code = '#' + this.code
                }


                let rgb = colorconv.parse(this.code)

                let hsl = colorconv.RGB2HSL(rgb)
                this.result.hsl = hsl
                this.result.hslCode = 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)'
                console.log('hsl', hsl)

                let hsv = colorconv.RGB2HSV(rgb)
                this.result.hsv = hsv
                this.result.hsvCode = 'hsv('+parseInt(hsv[0]*100,10)/100+', '+parseInt(hsv[1]*100,10)/100+', '+parseInt(hsv[2]*100,10)/100+')'

                let hex = colorconv.RGB2HEX(rgb)
                this.result.hexCode = '#' + hex
                if (hex.charAt(0) === hex.charAt(1) && hex.charAt(2) === hex.charAt(3) && hex.charAt(4) === hex.charAt(5)) {
                    console.log('可以化简')
                    this.result.hexSimple = `#${hex.charAt(0)}${hex.charAt(2)}${hex.charAt(4)}`
                }

                let cmyk = colorconv.RGB2CMYK(rgb)
                this.result.cmyk = cmyk
                this.result.cmykCode = 'cmyk('+cmyk[0]+', '+cmyk[1]+', '+cmyk[2]+')'

                this.result.rgb = rgb
                this.result.rgbCode = 'rgb('+rgb[0]+', '+rgb[1]+', '+rgb[2]+')'



        // 
        // document.getElementById('rgb').value = 
        // document.getElementById('hsl').value = 
        // document.getElementById('hsv').value = 
        // document.getElementById('hex').value = 
        // document.getElementById('cmyk').value = 

                // let convertor
                // let from
                // if (this.code.includes('#')) {
                //     from = 'hex'
                // } else if (this.code.includes('rgb')) {
                //     from = 'rgb'
                // }
                // let hex = this._convert(this.code, from, 'hex')
                // console.log('hex', hex)
                // this.result.hex = hex

                // let rgb = this._convert(this.code, from, 'rgb')
                // this.result.rgb = rgb
                // this.result.rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` 

                // let hsl = this._convert(this.code, from, 'hsl')
                // console.log('hsl', hsl)
                // this.result.hsl = hsl
                // this.result.hslCode = `hsl(${hsl[0]}${hsl[0] ? '%' : ''}, ${hsl[1]}%, ${hsl[2]}%)`

                // let hsv = this._convert(this.code, from, 'hsv')
                // this.result.hsv = hsv
                // this.result.hsvCode = `hsv(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`

                // let cmyk = convertor.cmyk(this.code)
                // this.result.cmyk = cmyk
                // this.result.cmykCode = `cmyk(${cmyk[0]}, ${cmyk[1]}, ${cmyk[2]})`

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
        .item {
            display: flex;
            height: 48px;
            align-items: center;
            font-size: 16px;
            // margin-bottom: 16px;
        }
        .badge-box {
            width: 64px;
        }
        .badge {
            margin-right: 8px;
        }
    }
    .btn-copy {
        cursor: pointer;
    }
</style>

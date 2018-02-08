<template>
    <my-page title="渐变">
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <section class="bezier-box">
                    <ul class="gradient-list">
                        <li class="gradient-item item-add" @click="selectColor('', $event)">
                            <div class="content"></div>
                        </li>
                        <li class="gradient-item" v-for="item in displayList" @click="selectColor(item.colors, $event)">
                            <div class="content" :style="{background: getBg(item.colors)}"></div>
                            <ul class="simple-color-list">
                                <li v-for="color in item.colors" :style="{'background-color': color}"></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="col-lg-4 col-md-4">
                <section id="type-box" class="editor-box">
                    <ul class="type-list">
                        <li class="type-item no-filter" @click="noFilter">
                            <ui-icon value="do_not_disturb_alt" size="36" />
                        </li>
                        <li class="type-item"
                            v-for="type in types"
                            :style="{'background-color': type}"
                            @click="filter(type)"></li>
                        <!--<li class="type-item" style="background-color: #fff" @click="filterWhite"></li>-->
                        <!--<li class="type-item" style="background-color: #000" @click="filterBlack"></li>-->
                    </ul>
                </section>
            </div>
        </div>
        <preview ref="preview"/>
        <!--<div :class="previewClass" v-if="previewVisible"-->
             <!--@click="previewVisible = false"-->
             <!--:style="previewStyle">-->
        <!--</div>-->
        <div class="all" :style="allStyle"
             :class="allClass"
             @click="close">
            <div class="all-content" :style="contentStyle"></div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */

//    import Vue from 'vue'
    import datas from './gradients.json'
    import HueSlider from '../components/color-picker/src/components/hue-slider.vue';
    console.log(datas)

    String.prototype.colorRgb = function(){
        var sColor = this.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i=1; i<4; i+=1) {
                    sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i=1; i<7; i+=2) {
                sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));
            }
            return sColorChange
        }
        return sColor;
    };

    export default {
        components: {
            HueSlider
        },
        data () {
            return {
                displayList: datas,
                previewVisible: false,
                isAnim: false,
                text: '',
                count: {
                    total: 0,
                    number: 0,
                    letter: 0,
                    char: 0,
                    chinese: 0,
                    totalChar: 0,
                    word: 0,
                    p: 0
                },
                list: datas,
                list2: [
                    {
                        'name': 'Blooker20',
                        'colors': ['#e65c00', '#F9D423']
                    },
                    {
                        'name': 'Sea Blue',
                        'colors': ['#2b5876', '#4e4376']
                    }

                    /*
                   ['rgb(57, 106, 252)', 'rgb(41, 72, 255)'],
                     ['rgb(217, 167, 199)', 'rgb(255, 252, 220)'],

                    ['rgb(12, 235, 235)', 'rgb(32, 227, 178)', 'rgb(41, 255, 198)'],
                     ['rgb(6, 190, 182)', 'rgb(72, 177, 191)'],
                     ['rgb(100, 43, 115)', 'rgb(198, 66, 110)'],
                     ['rgb(28, 146, 210)', 'rgb(242, 252, 254)'],
                     ['rgb(0, 0, 0)', 'rgb(15, 155, 15)'],
                     ['rgb(54, 209, 220)', 'rgb(91, 134, 229)'],
                     ['rgb(203, 53, 107)', 'rgb(189, 63, 50)'],
                     ['rgb(58, 28, 113)', 'rgb(215, 109, 119)', 'rgb(255, 175, 123)'],
                     ['rgb(40, 60, 134)', 'rgb(69, 162, 71)'],
                     ['rgb(239, 59, 54)', 'rgb(255, 255, 255)'],
                     ['rgb(192, 57, 43)', 'rgb(142, 68, 173)'],
                     ['rgb(21, 153, 87)', 'rgb(21, 87, 153)'],
                     ['rgb(0, 0, 70)', 'rgb(28, 181, 224)'],
                     ['rgb(0, 121, 145)', 'rgb(120, 255, 214)'],
                     ['rgb(86, 204, 242)', 'rgb(47, 128, 237)'],
                     ['rgb(242, 153, 74)', 'rgb(242, 201, 76)'],
                     ['rgb(235, 87, 87)', 'rgb(0, 0, 0)'],
                     ['rgb(228, 77, 38)', 'rgb(241, 101, 41)'],
                     ['rgb(74, 194, 154)', 'rgb(189, 255, 243)'],
                     ['rgb(178, 254, 250)', 'rgb(14, 210, 247)'],
                     ['rgb(48, 232, 191)', 'rgb(255, 130, 53)'],
                     ['rgb(214, 109, 117)', 'rgb(226, 149, 135)'],
                     ['rgb(32, 0, 44)', 'rgb(203, 180, 212)'],
                     ['rgb(195, 55, 100)', 'rgb(29, 38, 113)'],
                     ['rgb(247, 151, 30)', 'rgb(255, 210, 0)'],
                     ['rgb(52, 232, 158)', 'rgb(15, 52, 67)'],
                     ['rgb(97, 144, 232)', 'rgb(167, 191, 232)'],
                     ['rgb(68, 160, 141)', 'rgb(9, 54, 55)'],
                     ['rgb(32, 1, 34)', 'rgb(111, 0, 0)'],
                     ['rgb(5, 117, 230)', 'rgb(2, 27, 121)'],
                     ['rgb(69, 104, 220)', 'rgb(176, 106, 179)'],
                     ['rgb(67, 198, 172)', 'rgb(25, 22, 84)'],
                     ['rgb(9, 48, 40)', 'rgb(35, 122, 87)'],
                     ['rgb(67, 198, 172)', 'rgb(248, 255, 174)'],
                     ['rgb(255, 175, 189)', 'rgb(255, 195, 160)'],
                     ['rgb(240, 242, 240)', 'rgb(0, 12, 64)'],
                     ['rgb(232, 203, 192)', 'rgb(99, 111, 164)'],
                     ['rgb(220, 227, 91)', 'rgb(69, 182, 73)'],
                     ['rgb(192, 192, 170)', 'rgb(28, 239, 255)'],
                     ['rgb(219, 230, 246)', 'rgb(197, 121, 109)'],
                     ['rgb(52, 148, 230)', 'rgb(236, 110, 173)'],
                     ['rgb(103, 178, 111)', 'rgb(76, 162, 205)'],
                     ['rgb(243, 144, 79)', 'rgb(59, 67, 113)'],
                     ['rgb(238, 9, 121)', 'rgb(255, 106, 0)'],
                     ['rgb(167, 112, 239)', 'rgb(207, 139, 243)', 'rgb(253, 185, 155)'],
                     ['rgb(65, 41, 90)', 'rgb(47, 7, 67)'],
                     ['rgb(244, 196, 243)', 'rgb(252, 103, 250)'],
                     ['rgb(0, 195, 255)', 'rgb(255, 255, 28)'],
                     ['rgb(255, 126, 95)', 'rgb(254, 180, 123)'],
                     ['rgb(255, 252, 0)', 'rgb(255, 255, 255)'],
                     ['rgb(255, 0, 204)', 'rgb(51, 51, 153)'],
                     ['rgb(222, 97, 97)', 'rgb(38, 87, 235)'],
                     ['rgb(239, 50, 217)', 'rgb(137, 255, 253)'],
                     ['rgb(58, 97, 134)', 'rgb(137, 37, 62)'],
                     ['rgb(78, 205, 196)', 'rgb(85, 98, 112)'],
                     ['rgb(161, 255, 206)', 'rgb(250, 255, 209)'],
                     ['rgb(190, 147, 197)', 'rgb(123, 198, 204)'],
                     ['rgb(189, 195, 199)', 'rgb(44, 62, 80)'],
                     ['rgb(255, 216, 155)', 'rgb(25, 84, 123)'],
                     ['rgb(128, 128, 128)', 'rgb(63, 173, 168)'],
                     ['rgb(252, 234, 187)', 'rgb(248, 181, 0)'],
                     ['rgb(248, 80, 50)', 'rgb(231, 56, 39)'],
                     ['rgb(247, 157, 0)', 'rgb(100, 243, 140)'],
                     ['rgb(203, 45, 62)', 'rgb(239, 71, 58)'],
                     ['rgb(86, 171, 47)', 'rgb(168, 224, 99)'],
                     ['rgb(0, 4, 40)', 'rgb(0, 78, 146)'],
                     ['rgb(66, 39, 90)', 'rgb(115, 75, 109)'],
                     ['rgb(20, 30, 48)', 'rgb(36, 59, 85)'],
                     ['rgb(240, 0, 0)', 'rgb(220, 40, 30)'],
                     ['rgb(44, 62, 80)', 'rgb(253, 116, 108)'],
                     ['rgb(44, 62, 80)', 'rgb(76, 161, 175)'],
                     ['rgb(233, 100, 67)', 'rgb(44, 78, 149)'],
                     ['rgb(11, 72, 107)', 'rgb(245, 98, 23)'],
                     ['rgb(58, 123, 213)', 'rgb(58, 96, 115)'],
                     ['rgb(0, 210, 255)', 'rgb(146, 141, 171)'],
                     ['rgb(33, 150, 243)', 'rgb(244, 67, 54)'],
                     ['rgb(255, 95, 109)', 'rgb(255, 195, 113)'],
                     ['rgb(255, 75, 31)', 'rgb(255, 144, 104)'],
                     ['rgb(22, 191, 253)', 'rgb(203, 48, 102)'],
                     ['rgb(238, 205, 163)', 'rgb(239, 98, 159)'],
                     ['rgb(29, 67, 80)', 'rgb(164, 57, 49)'],
                     ['rgb(168, 0, 119)', 'rgb(102, 255, 0)'],
                     ['rgb(247, 255, 0)', 'rgb(219, 54, 164)'],
                     ['rgb(255, 75, 31)', 'rgb(31, 221, 255)'],
                     ['rgb(186, 83, 112)', 'rgb(244, 226, 216)'],
                     ['rgb(224, 234, 252)', 'rgb(207, 222, 243)'],
                     ['rgb(76, 161, 175)', 'rgb(196, 224, 229)'],
                     ['rgb(0, 0, 0)', 'rgb(67, 67, 67)'],
                     ['rgb(75, 121, 161)', 'rgb(40, 62, 81)'],
                     ['rgb(131, 77, 155)', 'rgb(208, 78, 214)'],
                     ['rgb(0, 153, 247)', 'rgb(241, 23, 18)'],
                     ['rgb(41, 128, 185)', 'rgb(44, 62, 80)'],
                     ['rgb(90, 63, 55)', 'rgb(44, 119, 68)'],
                     ['rgb(77, 160, 176)', 'rgb(211, 157, 56)'],
                     ['rgb(86, 20, 176)', 'rgb(219, 214, 92)'],
                     ['rgb(47, 115, 54)', 'rgb(170, 58, 56)'],
                     ['rgb(30, 60, 114)', 'rgb(42, 82, 152)'],
                     ['rgb(17, 67, 87)', 'rgb(242, 148, 146)'],
                     ['rgb(253, 116, 108)', 'rgb(255, 144, 104)'],
                     ['rgb(234, 205, 163)', 'rgb(214, 174, 123)'],
                     ['rgb(106, 48, 147)', 'rgb(160, 68, 255)'],
                     ['rgb(69, 127, 202)', 'rgb(86, 145, 200)'],
                     ['rgb(178, 69, 146)', 'rgb(241, 95, 121)'],
                     ['rgb(192, 36, 37)', 'rgb(240, 203, 53)'],
                     ['rgb(64, 58, 62)', 'rgb(190, 88, 105)'],
                     ['rgb(194, 229, 156)', 'rgb(100, 179, 244)'],
                     ['rgb(255, 183, 94)', 'rgb(237, 143, 3)'],
                     ['rgb(142, 14, 0)', 'rgb(31, 28, 24)'],
                     ['rgb(118, 184, 82)', 'rgb(141, 194, 111)'],
                     ['rgb(103, 58, 183)', 'rgb(81, 45, 168)'],
                     ['rgb(0, 201, 255)', 'rgb(146, 254, 157)'],
                     ['rgb(244, 107, 69)', 'rgb(238, 168, 73)'],
                     ['rgb(0, 92, 151)', 'rgb(54, 55, 149)'],
                     ['rgb(229, 57, 53)', 'rgb(227, 93, 91)'],
                     ['rgb(252, 0, 255)', 'rgb(0, 219, 222)'],
                     ['rgb(44, 62, 80)', 'rgb(52, 152, 219)'],
                     ['rgb(204, 204, 178)', 'rgb(117, 117, 25)'],
                     ['rgb(48, 67, 82)', 'rgb(215, 210, 204)'],
                     ['rgb(238, 156, 167)', 'rgb(255, 221, 225)'],
                     ['rgb(186, 139, 2)', 'rgb(24, 24, 24)'],
                     ['rgb(82, 82, 82)', 'rgb(61, 114, 180)'],
                     ['rgb(0, 79, 249)', 'rgb(255, 249, 76)'],
                     ['rgb(106, 145, 19)', 'rgb(20, 21, 23)'],
                     ['rgb(241, 242, 181)', 'rgb(19, 80, 88)'],
                     ['rgb(209, 145, 60)', 'rgb(255, 209, 148)'],
                     ['rgb(123, 67, 151)', 'rgb(220, 36, 48)'],
                     ['rgb(142, 158, 171)', 'rgb(238, 242, 243)'],
                     ['rgb(19, 106, 138)', 'rgb(38, 120, 113)'],
                     ['rgb(0, 191, 143)', 'rgb(0, 21, 16)'],
                     ['rgb(255, 0, 132)', 'rgb(51, 0, 27)'],
                     ['rgb(131, 58, 180)', 'rgb(253, 29, 29)', 'rgb(252, 176, 69)'],
                     ['rgb(254, 172, 94)', 'rgb(199, 121, 208)', 'rgb(75, 192, 200)'],
                     ['rgb(100, 65, 165)', 'rgb(42, 8, 69)'],
                     ['rgb(255, 179, 71)', 'rgb(255, 204, 51)'],
                     ['rgb(67, 206, 162)', 'rgb(24, 90, 157)'],
                     ['rgb(255, 161, 127)', 'rgb(0, 34, 62)'],
                     ['rgb(54, 0, 51)', 'rgb(11, 135, 147)'],
                     ['rgb(148, 142, 153)', 'rgb(46, 20, 55)'],
                     ['rgb(30, 19, 12)', 'rgb(154, 132, 120)'],
                     ['rgb(211, 131, 18)', 'rgb(168, 50, 121)'],
                     ['rgb(115, 200, 169)', 'rgb(55, 59, 68)'],
                     ['rgb(171, 186, 171)', 'rgb(255, 255, 255)'],
                     ['rgb(253, 252, 71)', 'rgb(36, 254, 65)'],
                     ['rgb(131, 164, 212)', 'rgb(182, 251, 255)'],
                     ['rgb(72, 85, 99)', 'rgb(41, 50, 60)'],
                     */
                ],
                preview: {
                    x: 0,
                    y: 0
                },
                colors: [], // 当前颜色
                types: ['#f36067', '#cf60f3', '#ffd200', '#159957', '#1cb5e0', '#155799', '#ef32d9', '#eaeaea']
            }
        },
        computed: {
            // x left
            allStyle() {
                let size = 3000
                return {
                    left: (this.preview.x - size / 2) + 'px',
                    top: (this.preview.y - size / 2) + 'px',
                    width: size + 'px',
                    height: size + 'px'
                }
            },
            contentStyle() {
                return {
                    'background-image': 'linear-gradient(to right, ' + this.colors.join(', ') + ')'
                }
            },
            allClass() {
//                'state-complete'
                let arr = []
                if (this.isAnim) {
                    arr.push('state-full')
                }
                return arr
            },
            previewStyle() {
                let size = 3000
                return {
                    'background-image': 'linear-gradient(135deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%)',
                    left: (this.preview.x - size / 2) + 'px',
                    top: (this.preview.y - size / 2) + 'px',
                    width: size + 'px',
                    height: size + 'px'
                }
            },
            previewClass() {
                'state-complete'
                let arr = ['full_gradient', 'js-full-gradient']
                if (this.isAnim) {
                    arr.push('state-full')
                }
                return arr
            }
        },
        mounted() {
//            this.compute()
        },
        methods: {
            noFilter() {
                this.displayList = this.list
            },
            filter(filterColor) {
                let hue = filterColor.colorRgb()[0]
                let offset = 20
                this.displayList = []
                for (let item of this.list) {
                    for (let color of item.colors) {
                        let h = color.colorRgb()[0]
                        let s = color.colorRgb()[1]
                        let l = color.colorRgb()[2]
                        if ((Math.abs(h - hue) < offset || Math.abs(h - hue) > 256 - offset) && (s > 255 / 2) && l < 255 / 2) {
                            console.log(h, hue)
                            this.displayList.push(item)
                            break
                        }
                    }
                }
            },
            filterWhite() {},
            filterBlack() {},
            getBg(item) {
                return 'linear-gradient(to right, ' + item[0] + ', ' + item[1] + ')'
            },
            selectColor(colors, e) {
                this.colors = colors
                this.previewVisible = true

                console.log(colors)
                console.log(e.clientX)
                console.log(e.clientY)
                this.preview = {
                    x: e.clientX,
                    y: e.clientY
                }
                let elem = event.currentTarget.childNodes[0]
                let rect = elem.getBoundingClientRect()
                this.preview = {
                    x: rect.x + (rect.width / 2),
                    y: rect.y + (rect.height / 2)
                }
                setTimeout(()=> {
                    this.isAnim = true
                }, 300)
//                this.$refs.preview.show(colors)
            },
            close() {
                this.previewVisible = false
                this.isAnim = false
            },
            compute() {
                this.$http.get('/data/gradients.json').then(function (response) {
                    this.list = response.body
                    this.list = this.list.reverse()
                    console.log(response.body)
                    /*
                    for (var item in list) {
                     this.list.push(item.colors)
                     }
                     */
                })
            },
            sort() {
                var newArr = []
                var arr = this.text.split('\n')
                newArr = arr.sort()
                this.text = newArr.join('\n')
            },
            clear() {
                this.text = ''
                this.compute()
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/var";

    .all {
        position: fixed;
        z-index: 100000;
        border-radius: 50%;
        overflow: hidden;
        transform: scale(0);
        transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92),height 0.2s ease,width 0.2s ease;
    }
    .all.state-full {
        transform: scale(2);
    }
    .all-content {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background-color: #999;
    }

    /**/
    .gradient-list {
        max-width: 750px;
        .gradient-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            float: left;
            width: 33.33%;
            height: 200px;
            padding: 8px;
            cursor: pointer;
            text-align: center;
            &:hover {
                .simple-color-list {
                    display: block;
                }
            }
            .content {
                flex-shrink: 0;
                width: 144px;
                height: 144px;
                /*margin-bottom: 16px;*/
                background-color: #f90;
                border-radius: 50%;
            }
            .simple-color-list {
                display: none;
                @include clearfix;
                li {
                    float: left;
                    width: 16px;
                    height: 16px;
                    margin-top: 16px;
                    margin-right: 8px;
                    border-radius: 50%;
                }
            }
        }
        .item-add {
            .content {
                width: 144px;
                height: 144px;
                border: 1px dashed #ccc;
                border-radius: 50%;
                background-color: transparent;
            }
        }
    }

    /**/
    .editor-box {}
    .editor-box .preview {
        width: 100%;
        height: 480px;
        background: linear-gradient(to right, rgb(217, 167, 199), rgb(255, 252, 220));
        border-radius: 8px;
    }
    /**/
    .type-list {
        margin-top: 16px;
        .type-item {
            width: 32px;
            height: 32px;
            margin: 0 16px 16px 0;
            border-radius: 16px;
            background-color: #fff;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .no-filter .mu-icon {
            // 修正像素差
            position: relative;
            top: -3px;
            left: -3px;
        }
    }
    /* preview */
    .full_gradient.state-complete {
        transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92),height 0.2s ease,width 0.2s ease;
        transform: none;
        border-radius: 0;
        height: 100vh !important;
        width: 100vw !important;
        left: 0 !important;
        top: 0 !important;
    }
    .full_gradient.state-full {
        transform: scale(2);
    }
    .full_gradient {
        z-index: 5000;
        position: fixed;
        border-radius: 50%;
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92);
        background-color: #86939e;
    }
</style>

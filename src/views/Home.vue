<template>
    <my-page title="颜色" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '分类',
                        apps: [
                            {
                                name: '颜色转换',
                                desc: '',
                                icon: '/static/img/color.svg',
                                to: '/convert'
                            },
                            {
                                name: '调色板',
                                desc: '',
                                icon: '/static/img/color_plete.svg',
                                to: '/palette'
                            },
                            {
                                name: '搜索',
                                desc: '',
                                icon: '/static/img/color.svg',
                                to: '/search'
                            },
                            {
                                name: '色相',
                                desc: '',
                                icon: '/static/img/color_filling.svg',
                                to: 'xxx',
                                href: 'http://hue.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '图片取色',
                                desc: '',
                                icon: '/static/img/image_pick_up_color.svg',
                                to: 'xxx',
                                href: 'https://imagetool.yunser.com/color',
                                target: '_blank'
                            },
                            {
                                name: '配色',
                                desc: '',
                                icon: '/static/img/color.svg',
                                to: '/colorScheme'
                            },
                            {
                                name: '渐变',
                                desc: '',
                                icon: '/static/img/gradient.svg',
                                to: '/gradient'
                            },
                            {
                                name: '传统色彩',
                                desc: '中国传统色彩、日本传统色彩',
                                icon: '/static/img/color_china.svg',
                                to: '/color/chinese'
                            },
                            // {
                            //     name: '日本传统色彩',
                            //     desc: '',
                            //     icon: '/static/img/color_japan.svg',
                            //     to: '/color/japen'
                            // },
                            {
                                name: 'Material Design',
                                desc: 'Material Design 颜色',
                                icon: '/static/img/color_maerial_design.svg',
                                to: '/color/materialDesign'
                            },
                            {
                                name: '颜色名称大全',
                                desc: '',
                                icon: '/static/img/color.svg',
                                to: '/color/all'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=color',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=color',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>

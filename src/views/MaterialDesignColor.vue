<template>
    <my-page title="Material Design 颜色2">
        <ul class="color-list">
            <li class="color-item" v-for="color in colors">
                <div class="header" :style="{'background-color': color.list[5]}">{{ color.name }}</div>
                <ul class="sub-color-list">
                    <li :style="{'background-color': item}" v-for="(item, index) in color.list">
                        <div class="name">{{ name(index) }}</div>
                        <div class="code">{{ item }}</div>
                    </li>
                </ul>
            </li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                colors: [
                    {
                        name: 'red',
                        list: ['#fde0dc', '#f9bdbb', '#f69988', '#f36c60', '#e84e40', '#e51c23', '#dd191d', '#d01716',
                            '#c41411', '#b0120a', '#ff7997', '#ff5177', '#ff2d6f', '#e00032']
                    },
                    {
                        name: 'pink',
                        list: ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b',
                            '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162']
                    },
                    {
                        name: 'purple',
                        list: ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2',
                            '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff']
                    },
                    {
                        name: 'deeppurple',
                        list: ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8',
                            '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea']
                    },
                    {
                        name: 'indigo',
                        list: ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f',
                            '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe']
                    },
                    {
                        name: 'blue',
                        list: ['#e7e9fd', '#d0d9ff', '#afbfff', '#91a7ff', '#738ffe', '#5677fc', '#4e6cef', '#455ede',
                            '#3b50ce', '#2a36b1', '#a6baff', '#6889ff', '#4d73ff', '#4d69ff']
                    },
                    {
                        name: 'lightblue',
                        list: ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1',
                            '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea']
                    },
                    {
                        name: 'cyan',
                        list: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7',
                            '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4']
                    },
                    {
                        name: 'teal',
                        list: ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b',
                            '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5']
                    },
                    {
                        name: 'green',
                        list: ['#d0f8ce', '#a3e9a4', '#72d572', '#42bd41', '#2baf2b', '#259b24', '#0a8f08', '#0a7e07',
                            '#056f00', '#0d5302', '#a2f78d', '#5af158', '#14e715', '#12c700']
                    },
                    {
                        name: 'lightgreen',
                        list: ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38',
                            '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17']
                    },
                    {
                        name: 'lime',
                        list: ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b',
                            '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00']
                    },
                    {
                        name: 'yellow',
                        list: ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d',
                            '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600']
                    },
                    {
                        name: 'amber',
                        list: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000',
                            '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00']
                    },
                    {
                        name: 'orange',
                        list: ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00',
                            '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00']
                    },
                    {
                        name: 'deeporange',
                        list: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19',
                            '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00']
                    },
                    {
                        name: 'brown',
                        list: ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037',
                            '#4e342e', '#3e2723']
                    },
                    {
                        name: 'grey',
                        list: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161',
                            '#424242', '#212121', '#000000']
                    },
                    {
                        name: 'bluegrey',
                        list: ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64',
                            '#37474f', '#263238']
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            name(index) {
                if (index === 0) {
                    return '50'
                }
                if (index <= 9) {
                    return index + '00'
                }
                return ['A100', 'A200', 'A400', 'A700'][index - 10]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .color-list {
        @include clearfix;
        .color-item {
            float: left;
            width: 240px;
            margin-right: 24px;
            margin-bottom: 24px;
        }
        .header {
            height: 132px;
            padding: 16px;
            color: #fff;
            font-size: 16px;
        }
    }
    .sub-color-list {
        li {
            height: 48px;
            padding: 16px;
            /*border: 1px solid #f1f1f1;*/
        }
        .name {
            float: left;
        }
        .code {
            float: right;
        }
    }
</style>

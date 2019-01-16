<template>
    <my-page title="传统色彩" :page="page">
        <ui-appbar class="search-bar" v-if="searchVisible">
            <ui-icon-button class="icon" icon="arrow_back_ios" slot="left" @click="close"/>
            <input class="input" id="input" v-model="keyword" slot="left" placeholder="搜索颜色">
            <ui-icon-button class="icon" icon="close" slot="right" @click="clear" v-if="keyword.length" />
        </ui-appbar>
        <div class="empty" v-if="!filterColors.length">
            没有搜索结果~
        </div>    
        <ul class="color-list">
            <li class="item" v-for="item in filterColors" :style="{'background-color': item.color}">
                <div class="color">{{ item.color }}</div>
                <div class="name">{{ item.name }}</div>
            </li>
        </ul>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import colors from './cc.json'

    export default {
        data () {
            return {
                colors,
                version: '',
                keyword: '',
                searchVisible: false,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            click: this.search,
                            title: '搜索'
                        },
                    ]
                }
            }
        },
        computed: {
            filterColors() {
                if (this.keyword) {
                    return this.colors.filter(item => {
                        return item.name.includes(this.keyword)
                    })
                }
                return this.colors
            }
        },
        mounted() {
            this.colors = colors
            for (let item of this.colors) {
                this.colors[i].rgb = '1'
            }
        },
        methods: {
            search() {
                this.searchVisible = true
                this.$nextTick(() => {
                    document.getElementById('input').focus()
                })
            },
            close() {
                this.searchVisible = false
                this.keyword = ''
            },
            clear() {
                this.keyword = ''
                this.$nextTick(() => {
                    document.getElementById('input').focus()
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000000;
    background-color: #fff;
    .icon {
        color: #999;
    }
    .input {
        height: 100%;
        border: none;
        outline: none;
    }
}
.color-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
    .item {
        width: 160px;
        height: 80px;
        margin-right: 16px;
        margin-bottom: 16px;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 8px;
        color: #fff;
        padding: 16px;
        text-shadow: 1px 1px 1px #555;
    }
}
.empty {
    text-align: center;
    padding: 160px 0;
    color: #999;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const All = resolve => require(['@/views/All'], resolve)
const Palette = resolve => require(['@/views/Palette'], resolve)
const PaletteHelp = resolve => require(['@/views/PaletteHelp'], resolve)
const PaletteSettings = resolve => require(['@/views/PaletteSettings'], resolve)
const Gradient = resolve => require(['@/views/Gradient'], resolve)
const ChineseColor = resolve => require(['@/views/ChineseColor'], resolve)
const JapenColor = resolve => require(['@/views/JapenColor'], resolve)
const MaterialDesignColor = resolve => require(['@/views/MaterialDesignColor'], resolve)
const ColorScheme = resolve => require(['@/views/ColorScheme'], resolve)
const Hue = resolve => require(['@/views/Hue'], resolve)
const Search = resolve => require(['@/views/Search'], resolve)
const Convert = resolve => require(['@/views/Convert'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/palette',
        component: Palette
    },
    {
        path: '/palette/help',
        component: PaletteHelp
    },
    {
        path: '/palette/settings',
        component: PaletteSettings
    },
    {
        path: '/hue',
        component: Hue
    },
    {
        path: '/gradient',
        component: Gradient
    },
    {
        path: '/color/chinese',
        component: ChineseColor
    },
    {
        path: '/color/japen',
        component: JapenColor
    },
    {
        path: '/color/materialDesign',
        component: MaterialDesignColor
    },
    {
        path: '/colorScheme',
        component: ColorScheme
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/color/all',
        component: All
    },
    {
        path: '/convert',
        component: Convert
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router

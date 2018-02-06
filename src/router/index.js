import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const PaletteHelp = resolve => require(['@/views/PaletteHelp'], resolve)
const PaletteSettings = resolve => require(['@/views/PaletteSettings'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Gradient = resolve => require(['@/views/Gradient'], resolve)
const ChineseColor = resolve => require(['@/views/ChineseColor'], resolve)
const JapenColor = resolve => require(['@/views/JapenColor'], resolve)
const MaterialDesignColor = resolve => require(['@/views/MaterialDesignColor'], resolve)
const ColorScheme = resolve => require(['@/views/ColorScheme'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
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
        path: '/about',
        component: About
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

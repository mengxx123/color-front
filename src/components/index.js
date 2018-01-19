import header from './header'
import footer from './footer'
import page from './page'
import colorPicker from './color-picker'
import colorPickerEx from './color-picker-ex'
// import colorPicker2 from './color-picker/index2'
// import colorPicker3 from './picker'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('my-page', page)
        Vue.component('ui-color-picker', colorPicker)
        Vue.component('ui-color-picker-ex', colorPickerEx)
        // Vue.component('my-color-picker2', colorPicker2)
        // Vue.component('my-color-picker3', colorPicker3)
    }
}

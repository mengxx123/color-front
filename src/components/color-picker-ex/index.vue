<template>
    <div>
        <div class="ui-color-picker__display" :class="{ 'is-alpha': showAlpha }">
            <div class="ui-color-picker__color" :style="{backgroundColor: displayedColor}">
                <div class="ui-color-picker__close" v-if="!value && !showPanelColor">x</div>
            </div>
        </div>
        <picker-dropdown
                ref="dropdown"
                :class="['el-color-picker__panel', popperClass || '']"
                v-model="showPicker"
                @pick="confirmValue"
                @clear="clearValue"
                :color="color"
                :show-alpha="showAlpha">
        </picker-dropdown>
    </div>
</template>

<script>
    /* eslint-disable */
    import Color from '../color-picker/src/color';
    import PickerDropdown from '../color-picker/src/components/picker-dropdown2.vue';

    export default {
        name: 'ElColorPicker',
        data() {
            const color = new Color({
                enableAlpha: this.showAlpha,
                format: this.colorFormat
            });
            return {
                color,
                showPicker: false,
                showPanelColor: false,
                pickerVisible: false
            };
        },
        props: {
            value: String,
            showAlpha: Boolean,
            colorFormat: String,
            disabled: Boolean,
            size: String,
            popperClass: String
        },
        computed: {
            displayedColor() {
                if (!this.value && !this.showPanelColor) {
                    return 'transparent';
                } else {
                    const {r, g, b} = this.color.toRgb();
                    return this.showAlpha
                            ? `rgba(${ r }, ${ g }, ${ b }, ${ this.color.get('alpha') / 100 })`
                            : `rgb(${ r }, ${ g }, ${ b })`;
                }
            }
        },
        watch: {
            value(val) {
                this.$emit('input', this.color.value);
                if (!val) {
                    this.showPanelColor = false;
                } else if (val && val !== this.color.value) {
                    this.color.fromString(val);
                }
            },
            color: {
                deep: true,
                handler() {
                    this.showPanelColor = true;
                }
            },
            displayedColor(val) {
                this.$emit('input', val);
                this.$emit('active-change', val);
            },
            pickerVisible(val) {
                if (val === true) {
                    this.$nextTick(() => {
                        console.log(this.$refs.button2)
                        this.$refs.dropdown.update()
                    });
                }
            }
        },
        methods: {
            toggle () {
                this.pickerVisible = !this.pickerVisible
            },
            handleClose (e) {
                this.resetColor();
                this.pickerVisible = false
            },
            confirmValue(value) {
                this.$emit('input', this.color.value);
                this.$emit('change', this.color.value);
                this.pickerVisible = false;
            },
            clearValue() {
                this.$emit('input', null);
                this.$emit('change', null);
                this.showPanelColor = false;
                this.pickerVisible = false;
                this.resetColor();
            },
            resetColor() {
                this.$nextTick(_ => {
                    if (this.value) {
                        this.color.fromString(this.value);
                    } else {
                        this.showPanelColor = false;
                    }
                });
            }
        },
        mounted() {
            const value = this.value;
            if (value) {
                this.color.fromString(value);
            }
        },
        components: {
            PickerDropdown
        }
    };
</script>

<style lang="scss">
    .ui-color-picker__display {
        position: relative;
        display: inline-block;
        width: 24px;
        height: 24px;
        /*margin-right: 8px;*/
        border: 1px solid #eee;
        &.is-alpha {
             background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)
        }
        .ui-color-picker__color {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .ui-color-picker__close {
            color: #999;
            font-size: 14px;
            line-height: 22px;
        }
    }

</style>

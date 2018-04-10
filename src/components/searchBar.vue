<template>
    <div class="ui-searchbar-wrap" :style="barStyle" :class="wrapClass">
        <div class="ui-searchbar" :class="classes" @click="ontap">
            <i class="ui-icon-search icon iconfont icon-sousuo"></i>
            <div class="ui-searchbar-text">搜索关键词</div>
            <i class="ui-icon-close"></i>
            <input class="ui-searchbar-input" ref="input" placeholder="搜索关键词" autocapitalize="off">
        </div>
        <button class="ui-searchbar-cancel" @click="canclsearch">取消</button>
        <div class="ui-search-result" v-if="focus && box">
            <p>搜索历史</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bg: String,
        box: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        border: String
    },
    data () {
        return {
            focus: false
        }
    },
    methods: {
        ontap () {
            this.focus = true
            setTimeout(() => {
                this.$refs['input'].focus()
            })
        },
        canclsearch () {
            this.focus = false
        }
    },
    computed: {
        wrapClass () {
            return [
                this.focus ? 'focus' : '',
                this.border ? `ui-border-${this.border}` : ''
            ]
        },
        barStyle () {
            if (this.bg) {
                return {
                    background: `${this.bg}`,
                    color: '#FFFFFF'
                }
            }
        },
        classes () {
            return [
                this.bg ? 'ui-searchbar-light' : ''
            ]
        }
    }
}

</script>

<style lang="scss">
    .ui-searchbar-wrap {
        display: flex;
        padding: 7px 15px;
        height: 30px;
        .ui-searchbar {
            flex: 1;
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
            padding: 0 10px;
            display: flex;
            justify-content: center;
        }
        .ui-searchbar-input {
            flex: 1;
            background: transparent;
            border: none;
            line-height: 28px;
            padding-left: 5px;
            color: #fff;
            font-size: 14px;
            font-weight: 200;
            &::-webkit-input-placeholder {
                color: rgba(255, 255, 255, .5);
                font-size: 14px;
                font-weight: 200;
            }
        }
        .ui-searchbar-cancel {
            margin: 0;
            padding: 0;
            color: #fff;
            padding-left: 12px;
            font-size: 14px;
            font-weight: 150;
            border: none;
            background: transparent;
        }
        .ui-searchbar-input, button, .ui-icon-close {
            display: none;
        }
        .ui-searchbar-text {
            display: inline-block;
            color: rgba(255, 255, 255, .5);
            font-size: 14px;
            vertical-align: top;
        }
        &.focus {
            .ui-searchbar {
                justify-content: left;
            }
            button, .ui-searchbar-input, .ui-icon-close {
                display: block;
            }
            .ui-searchbar-text{
                display: none;
            }
        }
        .ui-icon-search {
            color: rgba(255, 255, 255, .5);
        }
        .ui-searchbar-light {
            background: rgba(255, 255, 255, .1);
        }
        .ui-search-result {
            position: fixed;
            bottom: 0;
            background: rgba(255, 255, 255, .95);
            color: #aaa;
            box-sizing: border-box;
            padding: 0 15px;
            text-align: left;
            top: 44px;
            width: 100%;
            left: 0;
            z-index: 9999;
        }
    }
</style>

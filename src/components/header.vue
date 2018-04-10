<template>
    <div class="ui-nav-bar">
        <div class="left" v-if="back" @click="$emit('backTap')">
            <i class="icon icon-back"></i>
            返回
        </div>
        <div class="center" v-if="title">{{title}}</div>
        <div class="center" v-if="!title">
            <slot></slot>
        </div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'ui-header',
    props: {
        title: String,
        back: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            toolBarPath: '/index/home'
        }
    },
    mounted () {
        this.toolBarPath = this.$route.path
    },
    methods: {
        toolBarClick (index) {
            this.toolBarPath = `/index/${index}`
            this.$router.replace(`/index/${index}`)
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/style/global.scss';
    .ui-nav-bar {
        height: 44px;
        background: $theme;
        color: #fff;
        z-index: 100;
        position: relative;
        .left {
            left: 15px;
            top: 0;
            padding-left: 12px;
            position: absolute;
            line-height: 44px;
            height: 44px;
            width: 100px;
            z-index:1;
        }
        .right {
            right: 15px;
            top: 0;
            position: absolute;
            text-align: right;
            z-index:1;
            span {
                display:inline-block;
                line-height: 44px;
                height: 44px;
            }
        }
        .center {
            z-index:0;
            text-align: center;
            line-height: 44px;
            height: 44px;
            width: 100%;
            font-size: 16px;
            position: absolute;
            left: 0;
            top: 0;
        }
        .icon-back {
            position: absolute;
            left: 0;
            top: 15px;
            &:before {
                content: '';
                display: block;
                transform: rotate(-45deg);
                height: 12px;
                width: 12px;
                border-top: 1px solid #fff;
                border-left: 1px solid #fff;
            }
        }
    }
</style>

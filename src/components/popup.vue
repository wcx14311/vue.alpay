<template>
    <transition name="actionsheet-fade">
        <div>
            <div class="ui-translucent-mask" @click="$emit('close')"></div>
            <div class="ui-actionsheet" :class="position">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        position: {
            type: String,
            default: 'center'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        btn: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
.ui-actionsheet {
    position: fixed;
    z-index: 99999;
    animation-duration: .3s;
    animation-timing-function: ease;
    transform-origin: center;
    &.bottom {
        left: 0;
        bottom: 0;
        width: 100%;
        animation-name: contentBootIn;
    }
    &.center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-name: contentZoomIn;
    }
}
.actionsheet-fade-leave-active {
    animation-duration: 300ms;
    position: relative;
    z-index: 9999;
}
.actionsheet-fade-leave-to{
    animation-name: bgFadeOut;
    .ui-actionsheet {
        animation-duration: 300ms;
        animation-name: contentBootOut;
    }
}
</style>

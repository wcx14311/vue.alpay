<template>
    <ui-popup position="center" v-if="show" @close="show=false">
        <div class="ui-actionsheet-cnt alert">
            暗红色的就爱看好坑爹
            <p click="close"></p>
        </div>
    </ui-popup>
</template>

<script>
import popup from './popup'
export default {
    props: {
        show: Boolean
    }
    components: {
        'ui-popup': popup
    }
}
</script>

<style lang="scss">
    .ui-actionsheet-cnt{
        &.alert {
            background: #fff;
        }
    }
</style>

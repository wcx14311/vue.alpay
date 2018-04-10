<template>
    <div id="app">
        <transition :name="viewTransition">
            <router-view/>
        </transition>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name: 'App',
    computed: {
        direction () {
            return store.state.direction
        },
        viewTransition () {
            if (!this.direction) return ''
            return this.direction
        }
    }
}

</script>
<style lang="scss">

</style>

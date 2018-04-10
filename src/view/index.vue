<template>
    <div class="ui-container index-container">
        <ui-header v-if="toolBarPath=='/index/home'">
            <ui-searchBar bg="#18c4ba"></ui-searchBar>
        </ui-header>
        <ui-header title="财富" v-if="toolBarPath=='/index/money'"></ui-header>
        <ui-header title="朋友" v-if="toolBarPath=='/index/friend'"></ui-header>
        <ui-header title="" v-if="toolBarPath=='/index/my'"></ui-header>
        <div class="ui-content">
            <router-view/>
        </div>
        <div class="ui-tool-bar ui-border-theme-t">
            <div class="item" :class="toolBarPath=='/index/home'?'on':''">
                <div class="item-content" @click="toolBarClick('home')">
                    <p class="i-icon i-off">
                        <i class="icon iconfont icon-zhifubaoa"></i>
                    </p>
                    <p class="i-icon i-on">
                        <i class="icon iconfont icon-zhifubaob"></i>
                    </p>
                    <p class="i-text">首页</p>
                </div>
            </div>
            <div class="item" :class="toolBarPath=='/index/money'?'on':''">
                <div class="item-content" @click="toolBarClick('money')">
                    <p class="i-icon i-off">
                        <i class="icon iconfont icon-tansuoa"></i>
                    </p>
                    <p class="i-icon i-on">
                        <i class="icon iconfont icon-tansuob"></i>
                    </p>
                    <p class="i-text">财富</p>
                </div>
            </div>
            <div class="item" :class="toolBarPath=='/index/friend'?'on':''">
                <div class="item-content" @click="toolBarClick('friend')">
                    <p class="i-icon i-off">
                        <i class="icon iconfont icon-fuwuchuanga"></i>
                    </p>
                    <p class="i-icon i-on">
                        <i class="icon iconfont icon-fuwuchuangb"></i>
                    </p>
                    <p class="i-text">朋友</p>
                </div>
            </div>
            <div class="item" :class="toolBarPath=='/index/my'?'on':''">
                <div class="item-content" @click="toolBarClick('my')">
                    <p class="i-icon i-off">
                        <i class="icon iconfont icon-caifua"></i>
                    </p>
                    <p class="i-icon i-on">
                        <i class="icon iconfont icon-caifub"></i>
                    </p>
                    <p class="i-text">我的</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import searchBar from '@/components/searchBar'
export default {
    data () {
        return {
            toolBarPath: '/index/home'
        }
    },
    components: {
        'ui-searchBar': searchBar
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

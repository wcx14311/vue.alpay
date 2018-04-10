<template>
    <div class="ui-container index-container">
        <ui-header title="用户信息" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content userInfo-page">
            <div class="uer-top">
                <span class="img"></span>
                <p class="nike">用户昵称</p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index: 0,
            show: false
        }
    }
}
</script>

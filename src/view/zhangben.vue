<template>
    <div class="ui-container index-container">
        <ui-header title="账本" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content recharge-page">
            <ul class="history-list">
                <li class="ui-border-b" @click="$router.push({path: '/order/detail', query: {id: '7839472382934'}})">
                    <div class="date">
                        <p class="p1">07-06</p>
                        <p class="p2">22:30</p>
                    </div>
                    <div class="icon bg-blue">话</div>
                    <div class="content">
                        <p class="p1">话费充值</p>
                        <p class="p2">18328380282</p>
                    </div>
                </li>
                <li class="ui-border-b" @click="$router.push({path: '/order/detail', query: {id: '7839472382934'}})">
                    <div class="date">
                        <p class="p1">07-06</p>
                        <p class="p2">22:30</p>
                    </div>
                    <div class="icon bg-green">流</div>
                    <div class="content">
                        <p class="p1">话费充值</p>
                        <p class="p2">18328380282</p>
                    </div>
                </li>
                <li class="ui-border-b" @click="$router.push({path: '/order/detail', query: {id: '7839472382934'}})">
                    <div class="date">
                        <p class="p1">07-06</p>
                        <p class="p2">22:30</p>
                    </div>
                    <div class="icon bg-blue">话</div>
                    <div class="content">
                        <p class="p1">话费充值</p>
                        <p class="p2">18328380282</p>
                    </div>
                </li>
            </ul>
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

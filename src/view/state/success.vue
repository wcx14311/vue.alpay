<template>
    <div class="ui-container index-container">
        <ui-header title="成功" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content state-container bg-white">
            <div class="success-co success">
                <div>
                    <i class="icon iconfont icon-chenggong blue"></i>
                </div>
                <p class="state blue">操作成功</p>
                <p class="msg">订单付款成功</p>
                <p class="info">10.00元</p>
            </div>
            <div class="btn-warp">
                <ui-button @on-click="$router.go(-1)">完成</ui-button>
            </div>
        </div>
    </div>
</template>

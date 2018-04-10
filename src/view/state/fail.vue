<template>
    <div class="ui-container index-container">
        <ui-header title="失败" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content state-container bg-white">
            <div class="success-co success">
                <div>
                    <i class="icon iconfont icon-chenggong red"></i>
                </div>
                <p class="state red">操作失败</p>
                <p class="info">10.00元</p>
            </div>
        </div>
    </div>
</template>

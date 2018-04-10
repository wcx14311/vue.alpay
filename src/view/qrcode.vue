<template>
    <div class="ui-container">
        <ui-header title="收款码" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content theme_bg">
            <div class="qr-page-content">
                <div class="ui-user-info">
                    <img src="@/assets/images/icon-photo.png">
                    <div>
                        <p class="p1">江泽民</p>
                        <p class="p2">15171412817</p>
                    </div>
                </div>
                <img class="qr" src="@/assets/images/code.png">
                <div class="qr-info">请使用微信/支付宝扫一扫</div>
            </div>
        </div>
    </div>
</template>

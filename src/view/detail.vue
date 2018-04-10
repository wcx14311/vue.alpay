<template>
    <div class="ui-container">
        <ui-header title="订单明细" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content white_bg">
            <div class="payment-details">
                <div class="account-balance ui-border-b">
                    <h2>支付金额</h2>
                    <div class="bal-insert">38.66</div>
                </div>
                <div class="details-msg-group ui-border-b">
                    <div class="msg">
                        <span class="ti">缴费单位</span>
                        <span class="co">武汉供电公司</span>
                    </div>
                    <div class="msg">
                        <span class="ti">缴费户号</span>
                        <span class="co">6659810423</span>
                    </div>
                    <div class="msg">
                        <span class="ti">用户</span>
                        <span class="co">武汉置业发展有限公司</span>
                    </div>
                    <div class="msg">
                        <span class="ti">住址信息</span>
                        <span class="co">武汉市汉阳区鹦鹉街道桥机路桥机嘉园小区******单元2116</span>
                    </div>
                </div>
                <div class="details-msg-group ui-border-b">
                    <div class="msg">
                        <span class="ti">创建时间</span>
                        <span class="co">2017-03-16 08:06</span>
                    </div>
                    <div class="msg">
                        <span class="ti">订单号</span>
                        <span class="co">66598104239872233784736</span>
                    </div>
                    <div class="msg">
                        <span class="ti">商户订单号</span>
                        <span class="co">239872233784736</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

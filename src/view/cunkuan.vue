<template>
    <div class="ui-container">
        <ui-header title="转账" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content transfer-page">
            <div class="transfer-top">
                <p class="t">转账金额</p>
                <div class="i ui-border-b">
                    <i class="am-icon-yuan"></i>
                    <input class="am-edit-value" type="number" v-model="value">
                </div>
                <div class="m">
                    <input type="text" placeholder="添加备注(20个字)" value="">
                </div>
            </div>
            <div class="btn-warp">
                <ui-button @on-click="show=true">确认</ui-button>
            </div>
        </div>
        <popup-order v-if="show" @close="show=false" position="bottom">
            <div class="ui-actionsheet-cnt order-confirm">
                <div class="confirm-head ui-border-b">
                    <div class="btn-close" @click="show=false">关闭</div>
                    <div class="confirm-title">订单信息</div>
                </div>
                <div class="confirm-body">
                    <div class="big-line ui-border-b">{{value}}</div>
                    <div class="info-line ui-border-b">
                        <span class="ti">订单信息</span>
                        <span class="co">转账</span>
                    </div>
                    <div class="info-line ui-border-b">
                        <span class="ti">付款方式</span>
                        <span class="co">账户余额</span>
                    </div>
                </div>
                <div class="confirm-foot">
                    <div class="single-demo-button" style="padding:20px 16px;">
                        <ui-button @on-click="$router.push('/state/success')">确定付款</ui-button>
                    </div>
                </div>
            </div>
        </popup-order>
    </div>
</template>
<script>
import popupOrder from '@/components/popup'
export default {
    components: {
        'popup-order': popupOrder
    },
    data () {
        return {
            value: '58.00',
            show: false
        }
    }
}
</script>

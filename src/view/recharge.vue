<template>
    <div class="ui-container">
        <ui-header title="充值" :back="true" @backTap="$router.go(-1)">
            <span slot="right" @click="$router.push('/recharge/history')">充值记录</span>
        </ui-header>
        <div class="ui-content recharge-page">
            <div class="re-top">
                <p>请输入充值号码</p>
                <input type="tell" name="" value="15171422817" placeholder="">
            </div>
            <div class="vulue-list clearfix">
                <div class="value-item" @click="index=1" :class="index==1?'on':''">
                    <div class="b">
                        <p class="p1">30</p>
                        <p class="p2">30.00</p>
                    </div>
                </div>
                <div class="value-item" @click="index=2" :class="index==2?'on':''">
                    <div class="b">
                        <p class="p1">30</p>
                        <p class="p2">30.00</p>
                    </div>
                </div>
                <div class="value-item" @click="index=3" :class="index==3?'on':''">
                    <div class="b">
                        <p class="p1">30</p>
                        <p class="p2">30.00</p>
                    </div>
                </div>
                <div class="value-item" @click="index=4" :class="index==4?'on':''">
                    <div class="b">
                        <p class="p1">30</p>
                        <p class="p2">30.00</p>
                    </div>
                </div>
                <div class="value-item" @click="index=5" :class="index==5?'on':''">
                    <div class="b">
                        <p class="p1">30</p>
                        <p class="p2">30.00</p>
                    </div>
                </div>
            </div>
            <div class="btn-warp" style="padding-top: 0;">
                <ui-button @on-click="show=true">确认充值</ui-button>
            </div>
        </div>
        <popup-order v-if="show" @close="show=false" position="bottom">
            <div class="ui-actionsheet-cnt order-confirm">
                <div class="confirm-head ui-border-b">
                    <div class="btn-close" @click="show=false">关闭</div>
                    <div class="confirm-title">订单信息</div>
                </div>
                <div class="confirm-body">
                    <div class="big-line ui-border-b">30.00</div>
                    <div class="info-line ui-border-b">
                        <span class="ti">订单信息</span>
                        <span class="co">话费充值</span>
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
            index: 0,
            show: false
        }
    }
}
</script>

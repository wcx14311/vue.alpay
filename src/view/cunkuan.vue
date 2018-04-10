<template>
    <div class="ui-container index-container">
        <ui-header title="存款" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content demo-content">
            <div class="am-edit-inpage">
                <br>
                <br>
                <div class="am-edit-title">付款金额</div>
                <div class="am-edit-input am-input-autoclear">
                    <i class="am-icon-yuan"></i>
                    <input class="am-edit-value" type="number" value="58.00" autofocus="autofocus">
                    <div class="am-edit-clear"><i class="am-icon-clear am-icon clear-tiny" style="visibility: hidden;"></i></div>
                </div>
                <div class="am-edit-tips am-input-autoclear">
                    <input type="text" placeholder="添加备注(20个字)" value="">
                    <div class="am-edit-clear"><i class="am-icon-clear am-icon"></i></div>
                </div>
            </div>
            <div class="single-demo-button" style="margin-top:30px; padding: 0 16px;">
                <ui-button @on-click="show=true">确定转账</ui-button>
            </div>
        </div>
        <popup-order v-if="show" @close="show=false" position="bottom">
            <div class="ui-actionsheet-cnt order-confirm">
                <div class="confirm-head ui-border-b">
                    <div class="btn-close" @click="show=false">关闭</div>
                    <div class="confirm-title">订单信息</div>
                </div>
                <div class="confirm-body">
                    <div class="big-line ui-border-b">100.00</div>
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
            show: false
        }
    }
}
</script>

<style lang="scss">
    .am-edit-inpage {
        background: #fff;
        padding: 16px;
        width: 100%;
        box-sizing: border-box;
        font-size: 17px;
        color: #333
    }

    .am-edit-inpage .am-edit-input {
        padding: 13px 0;
        color: #333;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        background: linear-gradient(0,#ddd,#ddd 50%,transparent 50%) bottom right/100% 1px no-repeat
    }

    .am-edit-inpage .am-edit-input .am-icon-yuan {
        display: block;
        width: 14px;
        height: 58px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABWBAMAAACEIy0RAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTQ0NDQ0NDMzMzQ0NDMzMzMzMzMzMypxJpUAAAAHdFJOUwBHaNomlLEyGUOrAAABcUlEQVRIx+2WPW/EIAyGIZB2zZb11CXrSVWV9YaTWCOdqltvatbm6/r3e4FgwDZj1VaKlzPhTfBjG+tE+bFaJxjzW8XXaiMnaezWQYh2/Z04CezUXovNfX94eE/W+6SSZ7txe3jaeguVXO3GCbmxxa8a6xPs0j6eo7BmLDExhoW7Y0kfJ8NhV6lCArIA7GMqUYAcYh9SSZ1yXpkatGm2DK0BxixoMAq/1ZKGaPDZDa6BJl2kcA1KcrTENTA0mz2qQU9rYtJgNFPZMkn3VpKOSeaQZH/iLsSUzxPOZsGVfsM+xvqKbbIxOpW0ocOeolBmwTd8h1wGe8YfpNgLNCE3K5SvgWaRA/bNZ7/ixkm/BWN4ZIjyHqTcaHMHyBzyai5MlR1sHntssuPRY09tDjlg55EBO48cmpxDlu+bXbzkzT+pklvPWvcHJfoFzDbcEtYnmpmamZ275Kcl8hXM/QcI68P/7DpxBnN3Pqz3rtslvyP5BhKnveUb9TZhAAAAAElFTkSuQmCC") center center no-repeat;
        background-size: 100% auto
    }

    .am-edit-inpage .am-edit-input input {
        display: block;
        text-align: left;
        -webkit-appearance: none;
        color: #333;
        padding: 0 0 0 6px;
        // height: 58px;
        border: 0;
        font-size: 48px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        box-sizing: border-box;
        // line-height: 58px;
        font-weight: 500;
        width: 100%
    }

    .am-edit-inpage .am-edit-input .am-edit-clear,.am-edit-inpage .am-edit-tips .am-edit-clear {
        width: 18px
    }

    .am-edit-inpage .am-edit-tips {
        display: -webkit-box;
        display: -webkit-flex;
        color: #999;
        padding-top: 16px;
        line-height: 20px;
        font-size: 14px
    }

    .am-edit-inpage .am-edit-tips input {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        display: block;
        box-sizing: border-box;
        border: 0
    }
    .am-edit-value {
        &::input-placeholder {
            font-size: 14px;
            font-weight: 200;
            line-height: 58px;
            // padding-top: 20px;
        }
    }
</style>

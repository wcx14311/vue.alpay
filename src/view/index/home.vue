<template>
    <div>
        <section class="row-flex index-toop-menus">
            <div class="flex-1 cube">
                <a class="cube-a"></a>
                <div class="cube-content">
                    <p><i class="icon iconfont icon-saoyisao"></i></p>
                    <p>扫一扫</p>
                </div>
            </div>
            <div class="flex-1 cube" @click="$router.push('/qrcode')">
                <a class="cube-a"></a>
                <div class="cube-content">
                    <p><i class="icon iconfont icon-fukuanma"></i></p>
                    <p>收银码</p>
                </div>
            </div>
            <div class="flex-1 cube" @click="$router.push('/cunkuan')">
                <a class="cube-a"></a>
                <div class="cube-content">
                    <p><i class="icon iconfont icon-shoukuan"></i></p>
                    <p>存款</p>
                </div>
            </div>
            <div class="flex-1 cube" @click="$router.push('/cards')">
                <a class="cube-a"></a>
                <div class="cube-content">
                    <p><i class="icon iconfont icon-huankuan"></i></p>
                    <p>卡包</p>
                </div>
            </div>
        </section>
        <section class="service-item">
            <div class="service-menu">
                <div class="row-flex">
                    <div class="flex-1 cube" @click="$router.push({path: '/recharge', query: {type: 'phone'}})">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                            <p class="p2">充值</p>
                        </div>
                    </div>
                    <div class="flex-1 cube" @click="$router.push('/cunkuan')">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                            <p class="p2">转账</p>
                        </div>
                    </div>
                    <div class="flex-1 cube" @click="$router.push('/zhangben')">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <div class="icon iconfont icon-jizhang blue"></div>
                            <p class="p2">账本</p>
                        </div>
                    </div>
                    <div class="flex-1 cube" @click="$router.push('/game/list')">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <div class="icon iconfont icon-youxichongzhi green"></div>
                            <p class="p2">游戏</p>
                        </div>
                    </div>
                </div>
                <div class="row-flex">
                    <div class="flex-1 cube">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-aixinjuanzeng red"></i></p>
                            <p class="p2">服务</p>
                        </div>
                    </div>
                    <div class="flex-1 cube">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-shuidianmei green"></i></p>
                            <p class="p2">缴费</p>
                        </div>
                    </div>
                    <div class="flex-1 cube">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-kuaidi red"></i></p>
                            <p class="p2">供货</p>
                        </div>
                    </div>
                    <div class="flex-1 cube" @click="$router.push('/bussiness')">
                        <a class="cube-a"></a>
                        <div class="cube-content">
                            <p><i class="icon iconfont icon-gengduo yell"></i></p>
                            <p class="p2">更多</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="record-list">
            <div class="record-item" @click="$router.push({path: '/order/detail', query: {id: '625431673517263'}})">
                <div class="com-title">
                    <div class="title-date title-earn">
                        <p class="p1">支付记录</p>
                        <p class="p2">07-01 上午 7：30</p>
                    </div>
                    <span class="operate-btn"></span>
                </div>
                <div class="sum-wrap">
                    <div class="sum-statistics">
                        <p>+2523.25</p>
                        <p class="sum-remark">7月支出</p>
                    </div>
                </div>
            </div>
            <div class="record-item" @click="$router.push('/message/detail')">
                <div class="com-title">
                    <div class="title-date message-tip">
                        <p class="p1">系统消息</p>
                        <p class="p2">07-01 上午 7：30</p>
                    </div>
                    <span class="operate-btn"></span>
                </div>
                <div class="sum-wrap">
                    <div class="sum-statistics">
                        <p>+2523.25</p>
                        <p class="sum-remark">7月支出</p>
                    </div>
                </div>
            </div>
            <!-- 广告去 -->
            <!-- <div class="record-item" @click="$router.push('/detail')">
                <div class="com-title b">
                    <div class="title-date title-earn">
                        <p class="p1">各业务支付记录</p>
                        <p class="p2">07-01 上午 7：30</p>
                    </div>
                    <span class="operate-btn"></span>
                </div>
                <img class="ad-pic" src="@/assets/images/ad-pic.png">
            </div> -->
            <div class="record-item" @click="$router.push({path: '/order/detail', query: {id: '7839472382934'}})">
                <div class="com-title">
                    <div class="title-date pay-record">
                        <p class="p1">支付记录</p>
                        <p class="p2">07-01 上午 7：30</p>
                    </div>
                    <span class="operate-btn"></span>
                </div>
                <div class="sum-wrap">
                    <div class="sum-statistics">
                        <p>+2523.25</p>
                        <p class="sum-remark">7月支出</p>
                    </div>
                </div>
            </div>
            <div class="record-item" @click="$router.push({path: '/order/detail', query: {id: '3947238293478'}})">
                <div class="com-title">
                    <div class="title-date title-earn">
                        <p class="p1">支付记录</p>
                        <p class="p2">07-01 上午 7：30</p>
                    </div>
                    <span class="operate-btn"></span>
                </div>
                <div class="sum-wrap">
                    <div class="sum-statistics">
                        <p>+2523.25</p>
                        <p class="sum-remark">7月支出</p>
                    </div>
                </div>
            </div>
        </section>
        <p class="list-button-msg">没有更多信息了</p>
    </div>
</template>

<template>
    <div class="ui-container index-container">
        <ui-header title="业务中心" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content demo-content">
            <section class="service-item">
                <div class="service-item-group-title">充值</div>
                <div class="service-menu ui-border-b">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaiqiang red"></i></p>
                                <p>物料采购</p>
                            </div>
                        </div>
                        <div class="flex-1 cube" @click="$router.push('/bussiness')">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-gengduo blue"></i></p>
                                <p>更多</p>
                            </div>
                        </div>
                        <!-- 占位 -->
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu ui-border-b">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu ui-border-b">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaiqiang red"></i></p>
                                <p>物料采购</p>
                            </div>
                        </div>
                        <div class="flex-1 cube" @click="$router.push('/bussiness')">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-gengduo blue"></i></p>
                                <p>更多</p>
                            </div>
                        </div>
                        <!-- 占位 -->
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaiqiang red"></i></p>
                                <p>物料采购</p>
                            </div>
                        </div>
                        <div class="flex-1 cube" @click="$router.push('/bussiness')">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-gengduo blue"></i></p>
                                <p>更多</p>
                            </div>
                        </div>
                        <!-- 占位 -->
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaiqiang red"></i></p>
                                <p>物料采购</p>
                            </div>
                        </div>
                        <div class="flex-1 cube" @click="$router.push('/bussiness')">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-gengduo blue"></i></p>
                                <p>更多</p>
                            </div>
                        </div>
                        <!-- 占位 -->
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
                <div class="service-item-group-title">充值</div>
                <div class="service-menu">
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-shoujichongzhi blue"></i></p>
                                <p>充值</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-qinmifu red"></i></p>
                                <p>服务</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-zhuanzhang yell"></i></p>
                                <p>转账</p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaidi green"></i></p>
                                <p>供货</p>
                            </div>
                        </div>
                    </div>
                    <div class="row-flex">
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-kuaiqiang red"></i></p>
                                <p>物料采购</p>
                            </div>
                        </div>
                        <div class="flex-1 cube" @click="$router.push('/bussiness')">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <p><i class="icon iconfont icon-gengduo blue"></i></p>
                                <p>更多</p>
                            </div>
                        </div>
                        <!-- 占位 -->
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <div class="flex-1 cube">
                            <a href="" class="cube-a"></a>
                            <div class="cube-content">
                                <div class="icon"></div>
                                <p></p>
                            </div>
                        </div>
                        <!-- END占位 -->
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

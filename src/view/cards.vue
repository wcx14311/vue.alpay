<template>
    <div class="ui-container index-container">
        <ui-header title="卡包" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content">
            <ul class="cards-list">
                <h2 class="card-group-title">优惠券</h2>
                <li class="ticket-item">
                    <div class="t-body">
                        <div class="t-detail">
                            <i class="ico bg-green">减</i>
                            <div>
                                <div class="ti">满减券</div>
                                <div class="co">饿了么满10元减2元</div>
                            </div>
                        </div>
                    </div>
                    <div class="t-foot">
                        <p class="l">一个月后到期</p>
                    </div>
                </li>
                <li class="ticket-item">
                    <div class="t-body">
                        <div class="t-detail">
                            <i class="ico bg-red">折</i>
                            <div>
                                <div class="co">天猫双6折券</div>
                            </div>
                        </div>
                    </div>
                    <div class="t-foot">
                        <p class="l">10天后到期</p>
                    </div>
                </li>
                <li class="ticket-item">
                    <div class="t-body">
                        <div class="t-detail">
                            <i class="ico bg-yell">体</i>
                            <div>
                                <div class="co">天猫双体验券</div>
                            </div>
                        </div>
                    </div>
                    <div class="t-foot">
                        <p class="l">10天后到期</p>
                    </div>
                </li>
                <li class="ticket-item">
                    <div class="t-body">
                        <div class="t-detail">
                            <i class="ico bg-blue">优</i>
                            <div>
                                <div class="co">天猫优惠券</div>
                            </div>
                        </div>
                    </div>
                    <div class="t-foot">
                        <p class="l">10天后到期</p>
                    </div>
                </li>
            </ul>
            <ul class="cards-list">
                <h2 class="card-group-title">卡</h2>
                <li class="card-item"></li>
                <li class="card-item"></li>
            </ul>
        </div>
    </div>
</template>

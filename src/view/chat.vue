<template>
    <div class="ui-container">
        <ui-header title="聊天" :back="true" @backTap="$router.go(-1)"></ui-header>
        <div class="ui-content">
            <ul class="chat-history">
                <li class="l">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>很骄傲是个大聚划算阿斯加德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="r">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>很骄傲是个大聚划算阿斯加德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="l">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>jhsdkajshd控制技术恪尽职守暗示健康电话卡接收到后啊什么回答看似简单按实际回归到卡时间案件是个大快速就好撒果断是</span>
                    </div>
                </li>
                <li class="r">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>很骄傲是个大聚划算阿斯加德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="r">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>很骄傲是个大聚划算阿斯加德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="r">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="r">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>很骄傲是个大聚划算阿斯加德好坑阿实践活动很骄傲是个大聚划算阿斯加德好坑阿实践活动很骄傲是个大聚划算阿斯加德好坑阿实践活动很骄傲是个大聚划算阿斯加德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="l">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>德好坑阿实践活动</span>
                    </div>
                </li>
                <li class="l">
                    <span class="img" @click="$router.push('/userInfo')"></span>
                    <div class="msg">
                        <span>jhsdkajshd控制技术恪尽职守暗示健康电话卡接收到后啊什么回答看似简单按实际回归到卡时间案件是个大快速就好撒果断是</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="chat-bar">
            <div class="left">
                <div class="icon"></div>
            </div>
            <div class="center">
                <div class="input"></div>
            </div>
            <div class="right">
                <div class="icon"></div>
            </div>
            <div class="right">
                <div class="icon"></div>
            </div>
        </div>
    </div>
</template>

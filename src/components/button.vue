<template>
    <button class="ui-button" @click="$emit('on-click')">
        <slot></slot>
    </button>
</template>
<style>
    .btn-warp {
        padding: 20px 15px 0;
    }
    .ui-button {
        outline: none;
        font-size: 16px;
        line-height: 1;
        text-align: center;
        padding: 12px 0;
        box-sizing: border-box;
        width: 100%;
        background: #18c4ba;
        border: 1px solid #18c4ba;
        color: #fff;
        -webkit-appearance: none;
        border-radius: 5px;
        font-weight: 100;
    }
</style>

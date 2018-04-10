<template>
    <div class="ui-container">
        <ui-header title="游戏列表" :back="true" @backTap="$router.go(-1)"></ui-header>
        <ui-searchBar bg="#18c4ba" :box="false"></ui-searchBar>
        <div class="index-list">
            <div class="index-list-box"></div>
            <div class="index-list-alert" v-show="as">{{indexChar}}</div>
            <div class="index-list-index"
                @touchstart="getIndexChar"
                @touchmove="getIndexChar"
                @touchend="as=false">
                <i>A</i>
                <i>B</i>
                <i>C</i>
                <i>D</i>
                <i>E</i>
                <i>F</i>
                <i>G</i>
                <i>H</i>
                <i>I</i>
                <i>J</i>
                <i>K</i>
                <i>L</i>
                <i>M</i>
                <i>N</i>
                <i>O</i>
                <i>P</i>
                <i>Q</i>
                <i>R</i>
                <i>S</i>
                <i>T</i>
                <i>U</i>
                <i>V</i>
                <i>W</i>
                <i>X</i>
                <i>Y</i>
                <i>Z</i>
            </div>
        </div>
    </div>
</template>
<script>
import searchBar from '@/components/searchBar'
export default {
    data () {
        return {
            indexChar: 'v',
            as: false
        }
    },
    components: {
        'ui-searchBar': searchBar
    },
    methods: {
        getIndexChar (e) {
            var touche = e.changedTouches[0]
            var tag = document.elementFromPoint(touche.clientX, touche.clientY)
            if (tag && tag.tagName === 'I') {
                this.as = true
                this.indexChar = tag.innerText
            }
            e.stopPropagation()
            e.preventDefault()
        }
    }
}
</script>

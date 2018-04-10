<template>
    <section>
        <ul class="ui-list ui-list-function ui-border-tb">
            <li class="ui-border-t" v-for="(item, index) in list" :key="index" @click="$router.push('/chat')">
                <div class="ui-avatar">
                    <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLf5tnz2N6KnMamKCA3Vnb4a7B6VNMo9g9JOkScJgI6rR5cVzbGyy8V2licBZn79mdCDKTibTiaS9bCQ/132" alt="">
                </div>
                <div class="ui-list-info">
                    <h4 class="ui-nowrap">{{item.nick}}</h4>
                    <p>{{item.uin}}</p>
                </div>
            </li>
        </ul>
        <p class="list-button-msg">没有更多信息了</p>
    </section>
</template>

<script>
export default {
    computed: {
        list () {
            return this.$store.state.firend.list
        }
    },
    mounted () {
        // console.log(this.list)
    }
}
</script>

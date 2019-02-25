<style lang="scss">

</style>

<template>
    <div>没有找到该页面，{{time}}秒后重定向至首页</div>
</template>

<script>
export default {
    data() {
        return {
            time: 3
        }
    },
    mounted() {
        const timer = setInterval(() => {
            this.time --
            if (this.time === 0) {
                clearInterval(timer)
                this.$router.replace('/')
            }
        }, 1000)
    }
}
</script>


<template>
    <div>
        <h3>我的</h3>
        <!--  获取query 中的参数值       -->
        <h3>{{ $route.query.name }}</h3>
        <h3>{{ $route.query.age }}</h3>
    </div>
</template>
<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
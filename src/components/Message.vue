<template>
    <div>
        <ul>
            <li>消息1</li>
            <li>消息2</li>
            <li>消息3</li>
            <li>消息4</li>
            <li>消息5</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Message",
        created() {
            console.log("Message created");
        },
        activated() {
            console.log("Message activated");
        },
        deactivated() {
            console.log("Message deactivated");
        },
        destroyed() {
            console.log("Message destoryed");
        }
    }
</script>

<style scoped>

</style>
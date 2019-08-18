<template>
    <div>
        关于我
    </div>
</template>

<script>
    export default {
        name: "Aboutme",
        created() {
            console.log("Aboutme created");
        },
        activated() {
            console.log("Aboutme activated");
        },
        deactivated() {
            console.log("Aboutme deactivated");
        },
        destroyed() {
            console.log("Aboutme destoryed");
        }
    }
</script>

<style scoped>

</style>
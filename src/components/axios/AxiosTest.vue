<template>
    <div>{{content}}</div>
</template>

<script>
    import {defaultRequest} from "@/network/request"

    export default {
        name: "AxiosTest",
        data() {
            return {
                content: "aaa"
            };
        },
        created() {
            defaultRequest({
                url: "http://coolaf.com/"
            }).then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="error-page">

        <h4>{{error}}</h4>

        <button id="reloadBtn" @click="reloadPage">Reload Page</button>

    </div>
</template>

<script>
export default {
    name:'ErrorPage',
    props:['error'],

    methods:{
        reloadPage(){
            window.location.reload();
        },
    },
};
</script>

<style scoped>
.error-page {
  color: rgb(221, 25, 25);
}
#reloadBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
}
</style>
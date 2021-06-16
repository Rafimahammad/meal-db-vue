<template>
    <div class="page-not-found">

        <div class="error-msg">
            <h1>Oops!</h1>
            <h1>404 Page Not Found</h1>
            <div>
                <b>Sorry, an error has occured, Requested page not found!</b>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name:'PageNotFound',
}
</script>

<style scoped>
.page-not-found {
  min-height: calc(100% - 125px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
}
.error-msg {
  color: #D8000C;
  background-color: #FFBABA;
  margin: auto;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  width: 50%;
}
</style>
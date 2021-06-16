<template>
    <div class="app-footer">
        <footer>
            <div>
                © 2021 Copyright:<a href="#">Meal-app.com</a>
            </div>
        </footer>
        
    </div>
</template>

<script>
export default {
    name: 'AppFooter',

}
</script>

<style>
.app-footer{
    background-color: #23180d;
    height: 60px;
    color: #fff;
}

footer{
   padding-top: 10px;
}


a {
  color: #fff;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}


</style>
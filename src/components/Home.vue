<template>
    <div class="home">Home
      <Player></Player>
      <About></About>
      <router-link to="/Home/login"></router-link>
    </div>
</template>

<script>
  import About from '@/components/About.vue'
  import Player from '@/components/Player.vue'
  import login from '@/components/login.vue'

  export default {
        name: "home",
          components:{
            About,Player,login
          },
  }

</script>

<style lang="scss" scoped>
  $color:black;
  .home{
    font-size: 23px;
    color:$color;
  }
</style>

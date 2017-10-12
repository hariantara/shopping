<template lang="html">
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{ name: 'Home' }">
          <a class="navbar-brand">Gaming Space</a>
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Search</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{ name: 'Carts' }">Carts</router-link></li>
          <li v-if="!token">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li v-else>
            <a href="" @click.prevent="logout()">Logout</a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('Login')
    }
  }
}
</script>

<style lang="css">
</style>

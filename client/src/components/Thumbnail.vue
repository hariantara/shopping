<template lang="html">
  <div class="row">
  <div class="col-md-4" v-for="data in stufflist">
    <div class="thumbnail" >
      <div class="imagecover" :style="'background-image: url(' + data.image + ');'" alt="..."></div>
      <div class="caption">
        <h3><strong>{{data.name}}</strong></h3>
        <p>IDR {{data.price}}</p>
        <p>Stocks: {{data.stock}}</p>
        <router-link :to="{ name: 'DetailProduct', params: {id:data._id}}"><p><a href="#" class="btn btn-danger" role="button">Detail</a></p></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([ // without getListStuffs stufflist wont show
      'getListStuffs'
    ])
  },
  mounted () {
    this.getListStuffs() // without this the stufflist wont show
  },
  computed: {
    stufflist () {
      return this.$store.state.stuff // load detail product
    }
  }
}
</script>

<style lang="css">
.caption {
  text-align: center;
}

.thumbnail {
  height: 400px;
}

.imagecover {
  height: 200px;
  background-size: 210px 190px;;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>

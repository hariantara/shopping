<template lang="html">
  <div class="container posisitengah">
        	<div class="row detailproduct">
            <div class="col-md-12">
              <div class="col-xs-5 item-photo">
                <img style="max-width:100%;" :src="loaddetail.image" />
              </div>
              <div class="col-xs-7" style="border:0px solid gray">
                <!-- Datos del vendedor y titulo del producto -->
                <h3>{{ loaddetail.name }}</h3>
                <!-- Precios -->
                <h6 class="title-price"><small>Price</small></h6>
                <h3 style="margin-top:0px;"><small>IDR {{ loaddetail.price }}</small></h3>

                <!-- Detalles especificos del producto -->
                <div class="section" style="padding-bottom:20px;">
                  <div>
                    <p>Quantity :  <input type="number" v-model="qty" /></p>
                  </div>
                </div>

                <!-- Botones de compra -->
                <div class="section" style="padding-bottom:20px;">
                  <button @click="addDatatoCheckout(loaddetail)" class="btn btn-success"><span style="margin-right:20px" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Checkout</button>
                </div>
              </div>

              <div class="col-xs-12">
                <ul class="menu-items">
                  <li class="active">Detail Product</li>
                </ul>
                <div style="width:100%;border-top:1px solid silver">
                  <p style="padding:15px;">
                    <small>
                      {{ loaddetail.description }}
                    </small>
                  </p>
                </div>
              </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      qty: null,
      checkout: {
        id: '',
        category: '',
        description: '',
        image: '',
        name: '',
        price: '',
        quantity: null,
        stock: null,
        total: 1
      }
    }
  },
  methods: {
    ...mapActions([
      'getListById'
    ]),
    ...mapState([
      'findStuffById'
    ]),
    getStuffId () {
      this.getListById(this.id)
    },
    addDatatoCheckout (dataLoadDetail) {
      this.checkout.stuffId = dataLoadDetail.id
      this.checkout.category = dataLoadDetail.category
      this.checkout.description = dataLoadDetail.description
      this.checkout.image = dataLoadDetail.image
      this.checkout.name = dataLoadDetail.name
      this.checkout.price = parseInt(dataLoadDetail.price)
      this.checkout.quantity = parseInt(this.qty)
      this.checkout.stock = parseInt(dataLoadDetail.stock) - parseInt(dataLoadDetail.quantity)
      this.checkout.total = parseInt(dataLoadDetail.quantity) * parseInt(dataLoadDetail.price)

      axios.post(`http://localhost:3000/transactions/checkout/${this.id}`, {
        stuffId: this.checkout.stuffId,
        category: this.checkout.category,
        description: this.checkout.description,
        image: this.checkout.image,
        name: this.checkout.name,
        price: this.checkout.price,
        quantity: this.checkout.quantity,
        stock: this.checkout.stock,
        total: this.checkout.total
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response)
        this.$swal(
          'success',
          'Checkout Success'
        )
        this.$router.push('/carts')
      })
    }
  },
  mounted () {
    this.getStuffId()
  },
  computed: {
    loaddetail () {
      return this.$store.state.findStuffById
    }
  }
}
</script>

<style lang="css">
ul > li{margin-right:25px;font-weight:lighter;cursor:pointer}
li.active{border-bottom:3px solid silver;}

.item-photo{display:flex;justify-content:center;align-items:center;border-right:1px solid #f6f6f6;}
.menu-items{list-style-type:none;font-size:11px;display:inline-flex;margin-bottom:0;margin-top:20px}
.btn-success{width:100%;border-radius:0;}
.section{width:100%;margin-left:-15px;padding:2px;padding-left:15px;padding-right:15px;background:#f8f9f9}
.title-price{margin-top:30px;margin-bottom:0;color:black}
.title-attr{margin-top:0;margin-bottom:0;color:black;}
.btn-minus{cursor:pointer;font-size:7px;display:flex;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-right:0;}
.btn-plus{cursor:pointer;font-size:7px;display:flex;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-left:0;}
div.section > div {width:100%;display:inline-flex;}
div.section > div > input {margin:0;padding-left:5px;font-size:10px;padding-right:5px;max-width:18%;text-align:center;}
.attr,.attr2{cursor:pointer;margin-right:5px;height:20px;font-size:10px;padding:2px;border:1px solid gray;border-radius:2px;}
.attr.active,.attr2.active{ border:1px solid orange;}

@media (max-width: 426px) {
    .container {margin-top:0px !important;}
    .container > .row{padding:0 !important;}
    .container > .row > .col-xs-12.col-sm-5{
        padding-right:0 ;
    }
    .container > .row > .col-xs-12.col-sm-9 > div > p{
        padding-left:0 !important;
        padding-right:0 !important;
    }
    .container > .row > .col-xs-12.col-sm-9 > div > ul{
        padding-left:10px !important;

    }
    .section{width:104%;}
    .menu-items{padding-left:0;}
}

.detailproduct {
  margin-top: 67px;
  margin-bottom: 20px;
}

.posisitengah {
  text-align: center;
}

.item-photo {
  margin-top: 77px;
}
</style>

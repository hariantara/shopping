<template lang="html">
  <div class="container posisicarts">
	<div class="row">
		<div class="col-xs-12">
			<div class="panel panel-info">
				<div class="panel-heading">
					<div class="panel-title">
						<div class="row">
							<div class="col-xs-6">
								<h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
							</div>
							<div class="col-xs-6">
                <router-link :to="{ name: 'Home' }">
                  <button type="button" class="btn btn-primary btn-sm btn-block">
  									<span class="glyphicon glyphicon-share-alt"></span> Continue shopping
  								</button>
                </router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row" v-for="data in loadrecord">
            <div class="">

            </div>
						<div class="col-xs-2"><img class="img-responsive" :src="data.image">
						</div>
						<div class="col-xs-4">
							<h4 class="product-name"><strong>{{ data.name }}</strong></h4>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-6 text-right">
								<h6>
                  <strong>IDR {{ data.price }}
                    <span class="text-muted">x</span>
                    <span class="text-muted">{{ data.quantity }}</span>
                    <span class="text-muted"><strong>Total: {{ data.total }}</strong></span>
                  </strong>
                </h6>
							</div>
							<div class="col-xs-4">
							</div>
							<div class="col-xs-2">
								<button type="button" class="btn btn-link btn-xs">
									<span class="glyphicon glyphicon-trash"> </span>
								</button>
							</div>
						</div>
					</div>
					<hr>
					<hr>
					<div class="row">
						<div class="text-center">
						</div>
					</div>
				</div>
				<div class="panel-footer">
					<div class="row text-center">
						<div class="col-xs-12">
							<h4 class="text-right">Shop History<strong></strong></h4>
						</div>
						<div class="col-xs-5">
							<button type="button" class="btn btn-success btn-block">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getCarts'
    ]),
    ...mapState([
      'recordTrans'
    ]),
    getRecrd () {
      this.getCarts()
    }
  },
  mounted () {
    this.getRecrd()
  },
  computed: {
    loadrecord () {
      return this.$store.state.recordTrans
    }
  }
}
</script>

<style lang="css">
body {
	margin-top: 67px;
}

.posisicarts {
  text-align: center;
}
</style>

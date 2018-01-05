<template>
  <div class="container">
    <Header />

    <div class="row justify-between items-center">
      <MySection name="VESTIDOS" />
      <OrderBy :orderBy.sync="orderBy"></OrderBy>
    </div>

    <br>

    <q-layout ref="layout" view="hhh lpr fff">
      <div slot="left" class="filters">
        <Colors :colors="colors" :allColors.sync="allColors"></Colors>
        <Sizes :sizes.sync="sizes"></Sizes>
        <Prices :prices.sync="prices"></Prices>
      </div>
      
      <div class="row items-baseline">
        <div class="col-4 all-info-dress" v-for="dress in this.filteredDresses" :key="dress.title">
          <Dress :dress="dress" @store="store"></Dress>
        </div>
      </div>

      <div v-if="showLoaderButton" class="row justify-center btn-carregar-mais">
        <q-btn class="btn-carregar-mais-size" color="orange" big @click="loadAll">CARREGAR MAIS</q-btn>
      </div>

      <Footer slot="footer" />

      <!-- <router-view /> -->
    </q-layout>
  </div>
</template>

<script>
import http from 'axios'

import { isEmpty, isNull } from '../support/utils'
import { orderBy } from '../support/orderBy'
import { isOfColors } from '../support/isOfColors'
import { isSize } from '../support/isSize'
import { isPrice } from '../support/isPrice'

import Header from './Header'
import MySection from './Section'
import OrderBy from './OrderBy'
import Colors from './Colors'
import Sizes from './Sizes'
import Prices from './Prices'
import Dress from './Dress'
import Footer from './Footer'

import {
  QLayout,
  QBtn,
  QIcon,
  QOptionGroup
} from 'quasar'

export default {
  components: {
    Header,
    MySection,
    OrderBy,
    Colors,
    Sizes,
    Prices,
    Dress,
    Footer,
    QLayout,
    QBtn,
    QIcon,
    QOptionGroup
  },

  data () {
    return {
      orderBy: '',
      colors: [],
      allColors: '',
      sizes: [],
      prices: '',
      dresses: null,
      allDresses: null,
      showLoaderButton: true
    }
  },

  mounted () {
    this.getDresses()
  },

  methods: {
    getDresses () {
      return http
        .get('/statics/api.json')
        .then(results => {
          const someDresses = results.data.dresses
            .filter((obj, index) => index < 6)

          this.dresses = someDresses
          this.allDresses = results.data.dresses
        })
    },
    loadAll () {
      this.dresses = this.allDresses
      this.showLoaderButton = false
    },
    store (value) {
      if (confirm('Deseja armazenar esse item no seu carrinho?')) {
        const storeDress = this.allDresses
          .filter(dress => dress.title !== value.title)

        this.dresses = storeDress
        this.allDresses = storeDress
      }
    }
  },

  computed: {
    filteredDresses () {
      if (!isEmpty(this.colors) && !isEmpty(this.sizes) && isNull(this.prices)) {
        return this.dresses
      }

      if (this.allDresses) {
        return this.allDresses
          .filter(dress =>
            isOfColors(this.colors, dress) &&
            isSize(this.sizes, dress) &&
            isPrice(this.prices, dress))
          .sort((a, b) => orderBy(this.allDresses, this.orderBy))
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0px 20px 0px 10px;
}

.filters {
  width: 80%; 
  height: 100%;
}

.all-info-dress {
  margin-bottom: 50px;
}

.btn-carregar-mais {
  padding-top: 30px;
  padding-bottom: 100px;
}

.btn-carregar-mais-size {
  padding: 0px 100px 0px 100px;
}
</style>
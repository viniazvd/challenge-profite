<template>
  <div>
    <div>
      <img :src="`/statics/img/${this.dress.pathImg}`">
    </div>
    <div class="title">
      {{ this.dress.title }}
    </div>
    <div class="row">
      <div class="info-dress">
        <span class="price">R$ {{ this.dress.price }}</span>
        <p class="parcel-info">{{ this.dress.parcelInfo }}</p>
      </div>
      <q-btn 
        color="orange" 
        icon="shopping_cart" 
        class="icon-shop"
        @click="store" />
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'dress',
  components: { QBtn },
  props: ['dress'],
  methods: {
    store () {
      this.$emit('store', this.dress)
    }
  }
}
</script>

<style scoped>
.title {
  max-width: 150px;
  text-align: center;
  height: 50px;
}

.info-dress {
  width: 113px;
  height: 35px;
}

.price {
 font-weight: bold;
 padding-left: 55px;
}

.parcel-info {
  font-size: 13px;
  padding-bottom: 20px;
}

.icon-shop {
  padding-right: 5px;
}
</style>

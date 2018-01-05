<template>
  <div class="row gutter items-start">
    <div class="col-12">
      <h6>FAIXA DE PREÇO</h6>
      <br>

      <q-option-group 
        type="radio" 
        :value="this.prices" 
        @input="this.sendNewPrice"
        color="orange" 
        :options="pricesList" />
    </div>
  </div>
</template>

<script>
import { QOptionGroup } from 'quasar'

export default {
  name: 'prices',
  components: { QOptionGroup },
  props: ['prices'],
  data () {
    return {
      pricesList: [
        { label: 'de R$ 0 até R$ 50', value: '0-50' },
        { label: 'de R$ 51 até R$ 150', value: '51-150' },
        { label: 'de R$ 151 até R$ 300', value: '151-300' },
        { label: 'de R$ 301 até R$ 500', value: '301-500' },
        { label: 'a partir de R$ 501', value: '501' }
      ]
    }
  },
  methods: {
    sendNewPrice (value) {
      this.$emit('update:prices', value)
    }
  }
}
</script>


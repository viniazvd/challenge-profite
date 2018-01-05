<template>
  <div class="col-2">
    <q-select 
      :value="this.orderBy" 
      @input="this.sendNewOrder"
      :options="orderByList" 
      float-label="Ordenar por:" />
  </div>
</template>

<script>
import { QSelect } from 'quasar'

export default {
  name: 'myOrderBy',
  components: { QSelect },
  props: ['orderBy'],
  data () {
    return {
      orderByList: [
        {
          label: 'Menor preço',
          value: 'asc'
        },
        {
          label: 'Maior preço',
          value: 'desc'
        }
      ]
    }
  },
  methods: {
    sendNewOrder () {
      let orderValue
      event.target.textContent === 'Menor preço' ? orderValue = 'asc' : orderValue = 'desc'

      this.$emit('update:orderBy', orderValue)
    }
  }
}
</script>


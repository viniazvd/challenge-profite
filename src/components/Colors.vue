<template>
  <div class="row colors">
    <div>
      <h6>CORES</h6>
      <br>
      <q-checkbox v-model="this.colors" color="orange" label="Amarelo" val="yellow" /><br>
      <q-checkbox v-model="this.colors" color="orange" label="Azul" val="blue" /><br>
      <q-checkbox v-model="this.colors" color="orange" label="Branco" val="white" /><br>
      <q-checkbox v-model="this.colors" color="orange" label="Cinza" val="grey" /><br>
      <q-checkbox v-model="this.colors" color="orange" label="Laranja" val="orange" />
      
      <q-select 
        :value="this.allColors" 
        @input="this.sendNewColors"
        :options="allColorsList" 
        float-label="Ver todas as cores"
        class="all-colors" />
    </div>
  </div>
</template>

<script>
import { QSelect, QCheckbox } from 'quasar'

export default {
  name: 'colors',
  components: { QSelect, QCheckbox },
  props: ['colors', 'allColors'],
  data () {
    return {
      allColorsList: [
        { label: 'Em construção...', value: 0 }
      ]
    }
  },
  methods: {
    sendNewColors () {
      this.$emit('update:allColors', event.target.textContent)
    }
  }
}
</script>

<style scoped>
.colors {
  padding-bottom: 40px;
}

.all-colors {
  width: 170px; 
}
</style>


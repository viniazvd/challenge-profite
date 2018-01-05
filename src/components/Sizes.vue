<template>
  <div class="row tamanhos">
    <div class="col-3" v-for="(size, index) in sizesList" :key="size.size">
      <q-btn 
        :class="{ 'btn-tamanho': true, 'btn-tamanho-selected': size.selected }" 
        @click="selectSize(size.size, index, size)">
        {{ size.size }}
      </q-btn>
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'sizes',
  components: { QBtn },
  props: ['sizes'],
  data () {
    return {
      sizesList: [
        { size: 'P', selected: false },
        { size: 'M', selected: false },
        { size: 'G', selected: false },
        { size: 'GG', selected: false },
        { size: 'U', selected: false },
        { size: '36', selected: false },
        { size: '38', selected: false },
        { size: '40', selected: false },
        { size: '42', selected: false },
        { size: '44', selected: false },
        { size: '46', selected: false }
      ]
    }
  },
  methods: {
    selectSize (size, index, obj) {
      const hasSize = this.sizes.includes(size)

      !hasSize
        ? this.sizes.push(size)
        : this.$emit('update:sizes', this.sizes.filter(x => x !== size))
      !hasSize ? obj.selected = true : obj.selected = false
    }
  }
}
</script>

<style scoped>
.tamanhos {
  max-width: 200px;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 40px;
}

.btn-tamanho {
  width: 5px;
  height: 5px;
  margin-bottom: 5px;
  box-shadow: unset;
  border: 1px groove grey;
}

.btn-tamanho:hover{
  border: 2px solid orange;
}

.btn-tamanho-selected {
  border: 2px solid orange;
}
</style>

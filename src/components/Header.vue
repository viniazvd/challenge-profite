<template>
  <div>
    <div class="row justify-between items-center">
      <div>
        <q-card-media class="logo-profite">
        <img src="~assets/profite.jpg">
        </q-card-media>
      </div>

      <div>
        <q-icon name="lock" size="30px" />
      </div>
    </div>

    <hr class="hr-color">
    <!-- <q-card-separator color="orange" /> -->
  </div>
</template>

<script>
import { QCard, QCardMedia, QIcon } from 'quasar'

export default {
  name: 'myHeader',

  components: {
    QCard,
    QCardMedia,
    QIcon
  }
}
</script>

<style scoped>
.logo-profite {
  max-width: 100px;
}

.hr-color {
  clear: both;
  color: orange;
  background-color: orange;
  height: 2px;
  border-width: 0;
}
</style>

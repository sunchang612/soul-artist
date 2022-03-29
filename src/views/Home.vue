<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <sc-upload></sc-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScUpload from '@/components/sc-upload.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ScUpload,
  },
})
</script>

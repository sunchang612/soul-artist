<template>
  <div class="" @click="onSelectItem">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  emits: ['on-action'],
  setup(props, context) {
    const onSelectItem = (id: string) => {
      context.emit('on-action', id)
    }
    return {
      onSelectItem
    }
  }
})
</script>
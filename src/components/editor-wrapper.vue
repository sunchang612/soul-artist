<template>
  <div :class="{'high-action': isAction}" @click="onSelectItem(id)">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    isAction: {
      type: Boolean,
      default: false
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

<style lang="less" scoped>
.high-action {
  border: 1px solid #42b983;
}
</style>
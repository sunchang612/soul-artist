<template>
  <div
    :class="{ 'high-action': isAction }"
    class="comnponent-item"
    @click="onSelectItem(id)"
  >
    <slot></slot>
    <el-icon @click.stop="onRemoveComponent(id)"><close-bold /></el-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    isAction: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on-action', 'on-remove'],
  setup(props, context) {
    const onSelectItem = (id: string) => {
      context.emit('on-action', id)
    }
    const onRemoveComponent = (id: string) => {
      context.emit('on-remove', id)
    }
    return {
      onSelectItem,
      onRemoveComponent,
    }
  },
})
</script>

<style lang="less" scoped>
.high-action {
  border: 1px solid #42b983;
}
.comnponent-item:hover {
  content: 'X';
  right: 0;
  top: 0;
}
</style>

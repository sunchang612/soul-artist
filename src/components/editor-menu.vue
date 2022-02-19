<template>
  <div
    class=""
    v-for="(item, index) in list"
    :key="index"
    @click="onSelectItem(item)"
  >
    <sc-text v-bind="item" :tag="item.tag"></sc-text>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ScText from './sc-text.vue'
import { TextComponentProps } from '@/common/defaultProps'
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    ScText,
  },
  emits: ['on-add-item'],
  setup(props, context) {
    const onSelectItem = (props: Partial<TextComponentProps>) => {
      context.emit('on-add-item', props)
    }
    return {
      onSelectItem,
    }
  },
})
</script>

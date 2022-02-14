<template>
  <component
    :is="tag"
    :style="styleProps"
    @click="onClick"
    class="sc-text-component"
  >
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
import {
  transformToProps,
  textDefaultProps,
  textStylePropNames,
} from '../common/defaultProps'
const defaultProps = transformToProps(textDefaultProps)
export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'dev',
    },
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, onClick } = useComponentCommon(
      props,
      textStylePropNames
    )
    return {
      styleProps,
      onClick,
    }
  },
})
</script>
<style lang="less" scoped>
.sc-text-component {
  position: relative !important;
}
</style>

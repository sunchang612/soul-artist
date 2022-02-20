<template>
  <div class="props-form-warp">
    {{ filterProps }}
    <div class="lable-box" :key="key" v-for="(item, key) in filterProps">
      <div class="label">{{ item.lable }}</div>
      <component
        :is="item.component"
        v-model="item.value"
        v-bind="item.extraProps"
      >
        <template v-if="item.options">
          <component
            :is="item.subComponent"
            v-for="(ops, index) in item.options"
            :key="index"
            :label="ops.label"
          ></component>
        </template>
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { PropsToForms, mapPropsToForm } from '@/common/propsMap'
import { reduce } from 'lodash-es'
import { TextComponentProps } from '@/common/defaultProps'

export default defineComponent({
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true,
    },
  },
  setup(props) {
    // 转换数据格式
    const filterProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForm[newKey]
          if (item) {
            item.value = value
            result[newKey] = item
          }
          return result
        },
        {} as PropsToForms
      )
    })

    return {
      filterProps,
    }
  },
})
</script>
<style lang="less" scoped>
.lable-box {
  display: flex;
  .label {
    flex: 0 0 86px;
  }
}
</style>

<template>
  <div class="props-form-warp">
    <h3>属性</h3>
    <div class="lable-box" :key="key" v-for="(item, key) in filterProps">
      <div class="label">{{ item.lable }}</div>
      <component
        :is="item.component"
        :[item.valueProp]="item.value"
        v-bind="item.extraProps"
        v-on="item.events"
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
import { mapPropsToForm } from '@/common/propsMap'
import { reduce } from 'lodash-es'
import { TextComponentProps } from '@/common/defaultProps'

interface FormProps {
  component: string
  subComponent?: string
  value: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { [key: string]: any }[]
  valueProp: string
  eventName: string
  events: { [key: string]: (e: any) => void }
}

export default defineComponent({
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true,
    },
  },
  emits: ['on-change'],
  setup(props, context) {
    // 转换数据格式
    const filterProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForm[newKey]
          if (item) {
            const {
              valueProp = 'model-value',
              eventName = 'change',
              beforeTransformData,
              afterTransformData,
            } = item
            const newItem = {
              ...item,
              valueProp,
              eventName,
              value: beforeTransformData ? beforeTransformData(value) : value,
              events: {
                [eventName]: (e: any) => {
                  context.emit('on-change', {
                    key,
                    value: afterTransformData ? afterTransformData(e) : e,
                  })
                },
              },
            }
            result[newKey] = newItem
          }
          return result
        },
        {} as { [key: string]: FormProps }
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
  margin-top: 12px;
  .label {
    flex: 0 0 86px;
  }
}
</style>

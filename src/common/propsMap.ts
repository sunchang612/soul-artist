/**
 * 属性展示
 * 需要把每个属性转换成 { component: '', value: '' } 的格式
 */
import { TextComponentProps } from './defaultProps'

export interface PropsToForm {
  component: string
  lable: string
  extraProps?: { [key: string]: unknown }
  subComponent?: string // 描述子组件用
  options?: { [key: string]: any }[] // 组件中的可选项
  beforeTransformData?: (key: any) => any
  afterTransformData?: (key: any) => any
  valueProp?: string // 自定义组件 value 的名称
  eventName?: string // 自定义事件名称
}

export type PropsToForms = {
  [p in keyof TextComponentProps]?: PropsToForm
}

export const mapPropsToForm: PropsToForms = {
  text: {
    component: 'el-input',
    lable: '文本内容',
    eventName: 'input',
  },
  lineHeight: {
    component: 'el-slider',
    extraProps: {
      min: 0,
      max: 5,
      step: 0.1,
    },
    lable: '行高',
    beforeTransformData: (val) => parseFloat(val),
    afterTransformData: (val) => (val && val.toString()) || '',
    eventName: 'input',
  },
  textAlign: {
    component: 'el-radio-group',
    lable: '文本位置',
    subComponent: 'el-radio-button',
    options: [
      {
        label: 'left',
      },
      {
        label: 'center',
      },
      {
        label: 'right',
      },
    ],
    eventName: 'change',
  },
  color: {
    component: 'el-color-picker',
    lable: '颜色',
    eventName: 'active-change',
  },
}

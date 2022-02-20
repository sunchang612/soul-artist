/**
 * 属性展示
 * 需要把每个属性转换成 { component: '', value: '' } 的格式
 */
import { TextComponentProps } from './defaultProps'

export interface PropsToForm {
  component: string
  value?: string
  lable: string
  extraProps?: { [key: string]: unknown }
  subComponent?: string // 描述子组件用
  options?: { [key: string]: any }[] // 组件中的可选项
}

export type PropsToForms = {
  [p in keyof TextComponentProps]?: PropsToForm
}

export const mapPropsToForm: PropsToForms = {
  text: {
    component: 'el-input',
    value: 'text',
    lable: '文本内容',
  },
  lineHeight: {
    component: 'el-slider',
    value: '',
    extraProps: {
      min: 0,
      max: 5,
      step: 0.1,
    },
    lable: '行高',
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
  },
}

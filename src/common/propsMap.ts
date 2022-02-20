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
}

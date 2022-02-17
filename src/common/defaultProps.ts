import { mapValues, without } from 'lodash-es'
// 默认公共的属性
export interface CommonComponentProps {
  // size
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  // border
  borderStyle: string
  borderWidth: string
  borderColor: string
  borderRadius: string
  // shadow
  boxShadow: string
  opacity: string
  // position
  position: string
  left: string
  top: string
  actionType: string
  url: string
}
// 公共属性默认值
export const commonDefaultValue: CommonComponentProps = {
  height: '',
  width: '',
  paddingBottom: '0px',
  paddingRight: '0px',
  paddingLeft: '0px',
  paddingTop: '0px',
  borderStyle: 'none',
  borderColor: '#000',
  borderRadius: '0',
  borderWidth: '0',
  boxShadow: 'none',
  opacity: '1',
  position: 'absolute',
  left: '0',
  top: '0',
  actionType: '',
  url: '',
}

export interface TextComponentProps extends CommonComponentProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}

export const textDefaultProps: TextComponentProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultValue,
}

// 剔除不需要的属性
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

export const transformToProps = (
  props: TextComponentProps
) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor as StringConstructor,
      default: item,
    }
  })
}

import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '@/common/defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  textStylePropNames: string[]
) => {
  const styleProps = computed(() => pick(props, textStylePropNames))
  const onClick = () => {
    if (props.actionType && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    onClick,
  }
}

export default useComponentCommon

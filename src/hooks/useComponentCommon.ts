import { computed } from 'vue'
import { pick } from 'lodash-es'

const useComponentCommon = <T extends { [key: string]: any }>(
  props: T,
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

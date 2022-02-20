import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from './index'
import { TextComponentProps } from '@/common/defaultProps'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

export interface ComponentData {
  props: Partial<TextComponentProps>
  id: string
  name: string
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'sc-text', props: { text: 'hello', color: 'red' } },
  {
    id: uuidv4(),
    name: 'sc-text',
    props: { text: 'hello1', lineHeight: '1' },
  },
  {
    id: uuidv4(),
    name: 'sc-text',
    props: { text: 'hello2', textAlign: 'left' },
  },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
  mutations: {
    // 保存当前点击的元素Id
    selectAction(state, currentId: string) {
      console.log(state, currentId)
      state.currentElement = currentId
    },
    setPushComponent(state, props: Partial<TextComponentProps>) {
      const newComponent = {
        id: uuidv4(),
        name: 'sc-text',
        props,
      }
      state.components.push(newComponent)
    },
    removeComponent(state, currentId: string) {
      state.components = state.components.filter(
        (item) => item.id !== currentId
      )
    },
  },
  getters: {
    // 找到当前的元素
    getCurrentElement: (state) => {
      return state.components.find((com) => com.id === state.currentElement)
    },
  },
}

export default editor

import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from './index'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

interface ComponentData {
  props: { [key: string]: unknown }
  id: string
  name: string
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 's-text', props: { text: 'hello' } },
  { id: uuidv4(), name: 's-text', props: { text: 'hello1' } },
  { id: uuidv4(), name: 's-text', props: { text: 'hello2' } },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
}

export default editor

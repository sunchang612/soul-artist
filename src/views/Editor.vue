<template>
  <div class="editor-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <editor-menu
            :list="defaultTextTemplates"
            @on-add-item="onAddItem"
          ></editor-menu>
        </el-aside>
        <el-main>
          <editor-wrapper
            :id="com.id"
            v-for="com in components"
            :key="com.id"
            @on-action="onSelectAction"
            @on-remove="onRemoveComponent"
            :is-action="com.id === (currentElement && currentElement.id)"
          >
            <component :is="com.name" v-bind="com.props"></component>
          </editor-wrapper>
        </el-main>
        <el-aside width="320px">
          <props-form
            v-if="currentElement"
            :props="currentElement.props"
            @on-change="onChange"
          ></props-form>
          属性
          <pre>
            {{ currentElement && currentElement.props }}
          </pre>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import { ComponentData } from '@/store/editor'

import ScText from '@/components/sc-text.vue'
import EditorWrapper from '@/components/editor-wrapper.vue'
import EditorMenu from '@/components/editor-menu.vue'
import PropsForm from '@/components/props-form.vue'
import { defaultTextTemplates } from '@/common/defaultTemplates'
import { TextComponentProps } from '@/common/defaultProps'
export default defineComponent({
  components: {
    ScText,
    EditorWrapper,
    EditorMenu,
    PropsForm,
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    console.log('components ---->', components)
    const currentElement = computed<ComponentData | null>(
      () => store.getters.getCurrentElement
    )
    const onSelectAction = (id: string) => {
      store.commit('selectAction', id)
    }
    const onAddItem = (item: Partial<TextComponentProps>) => {
      store.commit('setPushComponent', item)
    }
    const onRemoveComponent = (id: string) => {
      store.commit('removeComponent', id)
    }
    const onChange = (e: any) => {
      console.log('change ----->', e)
      store.commit('updateComponent', e)
    }
    return {
      components,
      onSelectAction,
      onAddItem,
      currentElement,
      defaultTextTemplates,
      onRemoveComponent,
      onChange,
    }
  },
})
</script>

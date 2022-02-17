<template>
  <div class="editor-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <editor-menu :list="defaultTextTemplates" @on-add-item="onAddItem"></editor-menu>
        </el-aside>
        <el-main>
          <editor-wrapper
            :id="com.id"
            v-for="com in components"
            :key="com.id"
            @on-action="onSelectAction"
            :is-action="com.id === (currentElement && currentElement.id)"
          >
            <component
              :is="com.name"
              v-bind="com.props"
            ></component>
          </editor-wrapper>
        </el-main>
        <el-aside width="200px">
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
import { GlobalDataProps } from '@/store/index'
import { ComponentData } from "@/store/editor"

import ScText from '@/components/sc-text.vue'
import EditorWrapper from "@/components/editor-wrapper.vue"
import EditorMenu from "@/components/editor-menu.vue"
import { defaultTextTemplates } from '@/common/defaultTemplates'
import { TextComponentProps } from "@/common/defaultProps";
export default defineComponent({
  components: {
    ScText,
    EditorWrapper,
    EditorMenu
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)
    const onSelectAction = (id: string) => {
      store.commit('selectAction', id)
    }
    const onAddItem = (item: Partial<TextComponentProps>) => {
      store.commit('setPushComponent', item)
    }
    return {
      components,
      onSelectAction,
      onAddItem,
      currentElement,
      defaultTextTemplates
    }
  },
})
</script>

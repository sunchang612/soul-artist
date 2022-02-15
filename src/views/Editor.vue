<template>
  <div class="editor-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
import { ComponentData } from "@/store/editor";

import ScText from '@/components/sc-text.vue'
import EditorWrapper from "@/components/editor-wrapper.vue"
export default defineComponent({
  components: {
    ScText,
    EditorWrapper
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)
    const onSelectAction = (id: string) => {
      store.commit('selectAction', id)
    }
    return {
      components,
      onSelectAction,
      currentElement
    }
  },
})
</script>

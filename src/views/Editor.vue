<template>
  <div class="editor-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <component
            :is="com.name"
            v-for="com in components"
            v-bind="com.props"
            :key="com.id"
          ></component>
        </el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store/index'
import ScText from '@/components/sc-text.vue'
export default defineComponent({
  components: {
    ScText,
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    return {
      components,
    }
  },
})
</script>

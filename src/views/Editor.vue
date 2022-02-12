<template>
  <div class="editor-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <div class="" v-for="com in components" :key="com.id">
            {{ com.name }}
          </div>
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
export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    return {
      components,
    }
  },
})
</script>

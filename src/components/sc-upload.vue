<template>
  <div class="sc-upload-wrap">
    <button @click="handleUpload">
      <span v-if="fileStatus === 'ready'">点击上传</span>
      <span v-else-if="fileStatus === 'loading'">上传中</span>
      <span v-else-if="fileStatus === 'success'">上传成功</span>
      <span v-else>上传失败</span>
    </button>
    <input
      ref="fileRef"
      type="file"
      style="display: none"
      @change="onInputChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
type UpdateStatus = 'loading' | 'success' | 'error' | 'ready'

export default defineComponent({
  name: 'sc-upload',
  props: {
    action: {
      type: String,
      required: true,
    },
  },
  setup() {
    const fileRef = ref<HTMLInputElement | null>(null)
    const fileStatus = ref<UpdateStatus>('ready')
    const handleUpload = () => {
      if (fileRef.value) {
        fileRef.value.click()
      }
    }

    const onInputChange = () => {
      fileStatus.value = 'loading'

      setTimeout(() => {
        fileStatus.value = 'success'
      }, 1000)
    }
    return {
      fileRef,
      fileStatus,
      handleUpload,
      onInputChange,
    }
  },
})
</script>

<style scoped>
</style>

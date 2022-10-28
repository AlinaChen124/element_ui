# Select

## 基础用法

::: demo 

```vue
    <template>
    <p>
      <my-select v-model="value1" placeholder="请选择" :options="options" />
    </p>
    <p>
      <my-select v-model="value2" placeholder="请选择" :options="options" />
    </p>
    <p>
      <my-select
        v-model="value3"
        placeholder="禁用状态不能选择"
        :options="options"
        :disabled="true"
      />
    </p>
    <p>
      <my-select
        v-model="value4"
        placeholder="设置最大下拉高度"
        :options="options"
      />
    </p>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue'
    const options = ref([
      { label: '选项1', value: 1 },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' },
      { label: '选项4', value: '4', disabled: true },
      { label: '选项5', value: '5' },
      { label: '6' },
      { label: '选项7', value: '7' },
      { label: '选项8', value: '8' },
      { label: '选项9', value: '9' },
      { label: '选项10', value: '10', class: 'red' }
    ])
    const value1 = ref(1)
    const value2 = ref('2')
    const value3 = ref('')
    const value4 = ref('')
  </script>
   
```
:::
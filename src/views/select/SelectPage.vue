<template>
  <Markdown></Markdown>
</template>
<script>
import Markdown from './doc.md';
import { defineComponent } from 'vue'
export default defineComponent({
  name:'ButtonPage',
  components:{
    Markdown
  }
})
</script>
<style>

</style>
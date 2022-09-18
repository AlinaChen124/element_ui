<template>
  <my-container class="container">
    <my-aside width="200px" class="aside">
      <li v-for="(item,index) in menuList[0].children" 
      :key="index" :class="{active:activeIndex==index}"
      @click = "switchMenu(item,index)"
      >{{item.name}}</li>
    </my-aside>
    <my-main class="main">
      <!-- <ButtonPage></ButtonPage> -->
      <router-view></router-view>

    </my-main>

  </my-container>  
</template>
<script>
import { defineComponent,onMounted,ref } from 'vue'
import { useRouter } from 'vue-router'
import menuList from '@/router/routerPage/page'
export default defineComponent({
  name:'HomePage',
  components:{
    // Markdown
    // ButtonPage
  },
  setup(){
    const activeIndex = ref(-1)
    const router = useRouter()
    const switchMenu = function(item,index){
      activeIndex.value = index
      router.push({
        name:item.name
      })
    }
    onMounted(() => {
      console.log(menuList);
    })
    return {
      menuList,
      activeIndex,
      switchMenu
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  height: 100vh;
  .aside{
    height: auto;
    overflow-y: auto;
    border-right:1px solid #f0f0f0 ;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing:border-box;
    }
    li:hover{
      color:#409EFF,
    }
    li.active{
      border-left: 4px solid #409EFF;
      color: #409EFF;
      background-color: #ecf5ff;
      cursor:pointer;
    }
  }
}
</style>
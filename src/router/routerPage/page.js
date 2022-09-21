export default [
  {
    path:'/',
    name:'home',
    component:()=>import("@/views/HomePage.vue"),
    children:[
      {
        path:'button',
        name:'Button 按钮',
        component:()=>import("@/views/button/ButtonPage.vue")
      },
      {
        path:'select',
        name:'Select 下拉框',
        component:()=>import("@/views/select/SelectPage.vue")
      },
    ]
  }
]
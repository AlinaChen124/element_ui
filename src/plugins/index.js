import { Button,Icon,Select,MyRow,MyCol,MyAside,MyContainer,MyFooter,MyHeader,MyMain } from '../../node_modules/@sagittariuana/element_project';
// 将插件放入数组中
let plugins = [
  Button,Icon,Select,MyRow,MyCol,MyAside,MyContainer,MyFooter,MyHeader,MyMain
]
// 使用函数传参的形式调用app
export default function getElement(app){
  plugins.forEach((plugin) =>{
    return app.use(plugin)
  }
  )
}
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import { globalRegister } from './global'

// import './service/axios_demo'
import qybRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// registerApp(app)
// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

qybRequest
  .get<DataType>({
    url: '/home/multidata'
    // showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

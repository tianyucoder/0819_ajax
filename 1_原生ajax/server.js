//引入express
const express = require('express')
//实例一个app应用对象
const app = express()
//使用内置中间件去解析post请求参数
app.use(express.urlencoded({extended:true}))
//暴露静态资源
app.use(express.static(__dirname+'/public'))

app.get('/test_get',(req,res)=>{
  console.log(req.query)
  res.send('ok')
})

app.post('/test_post',(req,res)=>{
  console.log(req.body);
  res.send('ok')
})

app.listen(3000,(err)=>{
  if (err) console.log(err)
  else {
    console.log('兄弟不要不用编译器打开页面')
    console.log('测试原生js发送ajax_get请求的地址是：http://localhost:3000/ajax_get.html')
  }
})
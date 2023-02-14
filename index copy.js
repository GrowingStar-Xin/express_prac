const express = require("express")
const app = express();

app.get("/abc/:id",(req, res)=>{
    //req、res是被封装过的对象
    console.log(req.headers["host"])
    console.log(req.query)
    console.log(req.params)

    res.send({
        a:"a",
        b:"b",
        c:"c"
    })
})
//监听端口
const port = 10086;
app.listen(port,()=>{
    console.log(`server listen to ${port}`)
});
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
        c:"c",
        ddd:"dadas"
    })
    //自动调用end（）


    //res.status(302).header("location","https://www.baidu.com").end();
    // res.status(302).location("https://www.baidu.com").end();
    
})
//监听端口
const port = 10086;
app.listen(port,()=>{
    console.log(`server listen to ${port}`)
});
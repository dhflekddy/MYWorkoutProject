// https://www.npmjs.com/package/express



const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())
let id=2;

// const todoList=[{
//     id:1,
//     text:'할일 1',
//     done: false,
// }]

const todoList=[{}]

 app.get('/api/todo', function (req, res) {
     res.json(todoList);
   })

   app.get('/api/users', function (req, res) {
    res.json(todoList);
  })

  app.post("/api/users/logout", (req, res) => {
      res.send("ok");
    }
  );
  
//get요청은 브라우저에서도 할 수 있지만 post요청은 postman이용해서 함
 app.post('/api/todo', (req, res)=>{
    const {text, done}=req.body;//express에서 body의 내용을 꺼내쓰려면 body-parser가 필요함. https://www.npmjs.com/package/body-parser
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send("success~~~!!!반영되라잉");
 })


app.listen(8085, ()=>{console.log(`Server Initiated~!! `)});

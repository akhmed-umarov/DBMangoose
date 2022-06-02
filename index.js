import express from "express";   
import mongoose from "mongoose";
import exphbs from "express-handlebars";
import router from "./routers/routers.js";


const PORT = process.env.PORT ?? 3000; 

const app = express();
const hbs = exphbs.create({ 
defaultLayout: `main`, 
extname: 'hbs'
})

app.engine( 'hbs' , hbs.engine);  //подключаю движок хандбарса , с помощью hbs.engine (а потом после подключения я уже должен буду заменить этот движок на тот чтоб уже находится в экспрессе)
// т.е мы сначала регистрируем движок с помощью команды app.engine() в первом переменной указываем название нового движка , а уже после берем и достаем его из движка нужного нам hbs
app.set('view engine' , "hbs"); //engine => это движок, т.е в этой строке мы заменяем view engine (обычный движок на движок который мы ждо этого зарегали)
app.set("views" , "public")

app.use(express.urlencoded({extended:true})) //теперь экспресс будет понимать те данные которые передаются с помощью формы в post запросе


app.use(router);


async function start () { 
   try { 
      await mongoose.connect( "mongodb+srv://Akhmed:123123Laker@cluster0.sh6pm.mongodb.net/users" , {
         useNewUrlParser: true, 
         // useFindAndModify: false
      })
      app.listen(PORT , ()=>{ 
         console.log(`Your server has been started in PORT ${PORT}`);
      })
   }

   catch (e){ 
      console.log(e);
   }

}

start(); 
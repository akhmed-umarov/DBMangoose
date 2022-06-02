import { Router } from "express";   
import Users from "../users db/users.js";

const router = Router();

///нужна асинронная функция при запросе на главную страницу так как мы будет обращаться к базе данных 
router.get( "/" , async (req, res)=>{ 

   //я просто чтобы убрать objectId
   // const users = await Users.find( {} , {_Id: 0})
   //не получилось


   //так было 
   const users = await Users.find({})  //usersModel => название коллекции? //users => сама коллекция вроде как
   // console.log(Users , users);


res.render("index" , {
   title: `Main page`,
   isIndex:  true, 
   users    ///То есть я передаю на главную страницу список всех объектов в коллекцции db т.к я пуроизвел поиск без параметров в данной коллекции
})
})

router.get("/create" , (req, res)=>{ 
   console.log(Users);
   res.render('create' , { 
      title: 'Create Page', 
      isCreate:  true
   })
})


router.post('/create' , async (req, res)=>{ 
   //создаем модель 

    ///тут мы указываем то что будет получать браузер при загрузке данного роута , т.е мы при загрузке данного url с методом post ( при нажатие на кноапку submit) , отправляем некотрые данные , которые укзаываются при написание в инпуте , т.е. мы поулчили некоторые данные за счет того что вписали их в input form
      //но для того чтобы express мог парсить (parse => разобрать, понять) body , необходимо будет добавить некоторый middlewaire( ПО express.urelencoded), указан в index.js

   // console.log(req.body);
//ОТКЛЮЧИЛ ТУТ 
   const newUsers = new Users ({ 
      name: req.body.nameUser          
   })
   //сохраняем модель 
   await newUsers.save()
   // после переходим на основную страницу (редерект=> переход на другую страницу)



   res.redirect('/')

})

export default router; 
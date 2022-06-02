import mongoose from "mongoose";
///  Когда я ипортирую файлы из модельного как тут то не получистя в монгусе делать диструктуризацию как через require
const Schema = mongoose.Schema; 
const model = mongoose.model;

const UsersSchema = new Schema({
name: { 
   type: String, 
   required: true
} , 
completed: { 
   type: Boolean, 
   default: false
}
/*-------------required => говорит о том что обязательно должен быть указан данный параметр , а default указывает на то каким будет значение по умолчанию , если его не указывать */
}); 

export default new model("Users", UsersSchema); 
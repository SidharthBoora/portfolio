var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://sidharth:singh@123@cluster0.lxdfv.mongodb.net/portfoliosid?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
var conn=mongoose.connection;
var loginSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    index:{
      unique:true
    }},
  password:{
    type:String,
    required:true,
  },
});
var model=mongoose.model('login',loginSchema);
module.exports=model;
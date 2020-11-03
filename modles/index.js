var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://sidharth:singh@123@cluster0.lxdfv.mongodb.net/portfoliosid?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
var conn=mongoose.connection;
var conSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    index:{
      unique:true
    }},
  subject:{
    type:String,
    required:true,
  },
  project:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now
  }
});
var model=mongoose.model('contact',conSchema);
module.exports=model;
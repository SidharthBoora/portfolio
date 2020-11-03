var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://sidharth:singh@123@cluster0.lxdfv.mongodb.net/portfoliosid?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
var conn=mongoose.connection;
var insertSchema=new mongoose.Schema({
  fname:{
    type:String,
    required:true,
  },
  resume:{
    type:String,
    required:true,
    },
  certificate:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  }
});
var model=mongoose.model('insert',insertSchema);
module.exports=model;
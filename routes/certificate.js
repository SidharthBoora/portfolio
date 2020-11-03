const express=require('express');
const router=express.Router();
const conModel=require('../modles/index');
var insertModel=require('../modles/insert');
const path=require('path');
var picPath = path.resolve(__dirname,'public'); 
router.use(express.static(picPath));
function checkEmail(req,res,next){
  var email=req.body.email;
  var check=conModel.findOne({email:email});
  check.exec((err,data)=>{
    if(data){
      return res.render('index',{title:'Sidharth Boora',user:fname1,msg:"Email Already Exists ! try again."});
    }
    next();
  })
}
router.get('/',(req,res,next)=>{
  insertModel.find((err,data)=>{
    res.render('certificate',{title:"Sidharth Boora",msg:"",user:data});
  })
});
router.post('/',checkEmail,(req,res,next)=>{
  const {name,email,subject,project}=req.body;
   var conDetail=new conModel({
     name,email,subject,project
   });
   conDetail.save((err,data)=>{
     if(err) throw err;
     insertModel.find((err,data)=>{
      res.render('certificate',{title:"Sidharth Boora",msg:"Your Record Saved Successfully",user:data});
    })
   });
  });
module.exports=router;
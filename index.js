import express from 'express'
import cors from 'cors'
import shevchenko from 'shevchenko'


const PORT=5000;




const app=express();

app.use(express.json())
app.use(cors())



async function StartApp(){
    try{
        app.listen(PORT,()=>{console.log("working")})
    }catch(e){
        console.log(e)
    }
}
StartApp()

app.get('/',(req,res)=>{
    res.status(200).json('4h4hb4rh')
})


app.post('/send', async(req,res)=>{
    try{
        const output = await shevchenko.inGenitive(req.body);
        console.log(output)
        return res.status(200).json(output);
    }catch(e){
        console.error(e)
    }
})

/*const input = {
    gender: 'masculine',
    givenName: 'Тарас',
    patronymicName: 'Григорович',
    familyName: 'Шевченко'
  };*/
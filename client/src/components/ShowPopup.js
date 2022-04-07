import React ,{useState,useEffect} from 'react'
import style from './style.module.scss'
import axios from 'axios'
import Card from './Card'



const ShowPopup = (props) => {
    let count=10;

    console.log(props)
    const [tile, settile] = useState("");
    const [desc, setdesc] = useState("")
  
   const  createTodo=(color)=>{
       if(props.editEnable==true){
        axios.put(`http://localhost:5000/notes/${props.edit._id}`,{
            title:tile,
            desc:desc,
            color:color
          }).then(res=>{
            props.seti(props.i+1);
           
      
          }).then(props.seteditEnable(false))
        console.log(props.editEnable)
        console.log(props.edit)

        console.log("in edit models");
       }else{
        //  console.log(props.editEnable)
        axios.post('http://localhost:5000/notes',{
            title:tile,
            desc:desc,
            color:color
          }).then(res=>{
            props.seti(props.i+1);
            
      
          })

       }
       
       
    
  
      
  
    }
    return (
      <div className={style.popup}>
  
        <input type="text" placeholder="title" onChange={(e)=>settile(e.target.value)} />
        <textarea cols="30" rows="10" placeholder="description" onChange={(e)=>setdesc(e.target.value)}></textarea >
        <div className={style.buttons}>
        <h5 onClick={()=>props.setpopVisible(false)} >cancel</h5>
        <button    onClick={()=>{
          createTodo(props.color)
          
          props.setpopVisible(false)
          
        }}>done</button>
  
        </div>
  
  
  
      </div>
    )
  }
  export default ShowPopup
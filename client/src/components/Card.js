
import React ,{useState,useEffect} from 'react'
import style from './style.module.scss'
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import axios from 'axios'

const Card = ({setdata,data,color,l,setpopVisible,ShowPopup ,setedit,i,edit ,seti,seteditEnable,editEnable}) => {


const deleteTodo=(id)=>{
    console.log(i)
   
    axios.delete(`http://localhost:5000/notes/${id}`).then(res=>{
        seti(i+1);
        
    
    })
    
    }
    const editTodo=(data)=>{
        const flag=true;
        
        // console.log(data)
        async function runnner(){
          await setedit(data);
          await setpopVisible(true)
         await seteditEnable(true)
          console.log(edit);
        }
        
        runnner()
       
        
    }
   
    return (
      <div key={l._id} className={style.card} style={{backgroundColor:l.color}}>
        <h1>
          {l.title}
          
          
        </h1>
        <h5> {l.desc}</h5>
        <button className={style.deletebtn} onClick={()=>deleteTodo(l._id)}><AiFillDelete/></button>
        <button className={style.editbtn} onClick={()=>editTodo(l)}>  <AiFillEdit/> </button>

        
  
      
      </div>
      
    )
  }
  export default Card

import React ,{useState,useEffect} from 'react'
import style from './style.module.scss'
import axios from 'axios'

const Card = ({setdata,data,color,l,setpopVisible,ShowPopup ,setedit,i,edit ,seti}) => {


const deleteTodo=(id)=>{
    console.log(i)
   
    axios.delete(`http://localhost:5000/students/${id}`).then(res=>{
        seti(i+1);
        
    
    })
    
    }
    const editTodo=(data)=>{
        const flag=true;
        setpopVisible(true)
        // console.log(data)
        setedit(data)
    }
   
    return (
      <div key={l._id} className={style.card} style={{backgroundColor:l.color}}>
        <h1>
          {l.title}
          
        </h1>
        <h5> {l.desc}</h5>
        <button onClick={()=>deleteTodo(l._id)}>x</button>
        <button onClick={()=>editTodo(l)}>e</button>

        
  
      
      </div>
      
    )
  }
  export default Card
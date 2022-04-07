import React ,{useState,useEffect} from 'react'
import style from './style.module.scss'
import axios from 'axios'
import Card from './Card'
import ShowPopup from './ShowPopup'



function Main() {
  const [data, setdata] = useState([]);
  const [i, seti] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:5000/').then(r=>{
     setdata(r.data)
    })
  },[i])
 


  const [popVisible, setpopVisible] = useState(false);
  const [colorOfCard, setcolorOfCard] = useState("#FEC971");
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState([]);
  const [editEnable, seteditEnable] = useState(false);
  
  
  return (
    
    <div className={style.container}>
     
      <div className={style.sub_container}>
            <div className={style.sidebar}>

              <button onClick={(()=>setpopVisible(true))}>
                +
              </button>
              

              <ul>
                {
                ['#FEC971', '#FE9B72', '#B593FD', '#00D5FD', '#E3EF8F'].map((c,i)=>
                {
                  return <li onClick={()=>setcolorOfCard(c)} style={{background:c}}></li>
                })
                }
              </ul>
           </div>

          <div className={style.card_container}>

            {
              data.map((l)=>{
              return <Card seti={seti} i={i} edit={edit} editEnable={editEnable} seteditEnable={seteditEnable} setedit={setedit} ShowPopup={ShowPopup} setpopVisible={setpopVisible} setdata={setdata} data={data} l={l}></Card>
              })
            }
          </div>

      </div>

      {popVisible? <ShowPopup seti={seti} editEnable={editEnable} seteditEnable={seteditEnable} i={i} edit={edit} setpopVisible ={setpopVisible} setlist={setlist} color={colorOfCard} />:""  }
     
    

     

    </div>

  )
}

export default Main
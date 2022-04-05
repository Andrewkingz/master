import React, {useState} from 'react';
import './Card.css'
import img1 from './Component/images/kids.webp'
import img2 from './Component/images/learn.webp'
import img3 from './Component/images/teacher.webp'
import img4 from './Component/images/tutor.png'
import img5 from './Component/images/smile.png'

const Card = () => {
    const [text, setText] = useState("")
    const [myData, setMyData] = useState([
        {
        id: 1,
        quote: "Coding for ten hours today",
        img: img1
    },
    {
         id: 2,
         quote: "Sleeping by !0pm today",
         img: img2
        },

    {
        id: 3,
      
        quote: "Writing Poem today",
        img: img3
    },
        {
   
   
        id: 4,
        quote: "Julieth out for Evangelism",
        img: img4
    },
    
    {
        id: 5,
        quote: "Tayo cooking beans,",
        img: img5
    
    },
    ])
        //post Function for our Database 

        const addTask = () => {
            const item = {
                id: myData.length + 1,
                quote: text
            }
            setMyData([...myData, item]);
            setText("");
        }
        //delete Function 

        const takeOut = (id) => {
        const removeItem= myData.filter((el) => el.id !== id);
        setMyData(removeItem);
        };

    return(
        <div className='mainCard'>
      <div className='inp'>
       <input value={text} className='addTask' placeholder="Add Task for Today"
         onChange={(e) =>{
           setText(e.target.value)
         }}
        /> <button onClick={()=>{
            addTask()
        }

        }
         className='btn1'>Add</button>
</div>  
            <div className='card'>
              {myData.map((props)=>(
                    <div className='contain'>
                    <p>{props.id}</p>
                    <img src={props.img} />
                    <p>{props.quote} </p>
                    <button className='btn'
                    onClick={()=> {
                        takeOut(props.id)
                    }
                    }
                    >Delete</button>
                  </div>

              ))
              }

        </div>
        </div>
    );
}
export default Card
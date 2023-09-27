import React,{useEffect, useState,useContext} from 'react'
import { senddata } from '../App'
import '../App.css'
const Home = () => {
  let getdata = useContext(senddata)
    const [Startbtn,setStartbtn] =useState(true);
    const [Qustion1,setQustion1] = useState(false);
    const [Qustion2,setQustion2] = useState(false);
    const [Qustion3,setQustion3] = useState(false);
    const [Qustion4,setQustion4] = useState(false);
    const [Qustion5,setQustion5] = useState(false);
    const [Qustion6,setQustion6] = useState(false);
    const [Qustion7,setQustion7] = useState(false);
    const [Qustion8,setQustion8] = useState(false);
    const [Qustion9,setQustion9] = useState(false);
    const [Qustion10,setQustion10] = useState(false);
    const [Answers,setAnswers] = useState({q1:"",q2:"",q3:"",q4:"",q5:"",q6:"",q7:"",q8:"",q9:"",q10:""});
    const [Allanswers,setAllansweers] = useState([])
    const[Score,setScore] = useState("")
    const[Scoredisplay,setScoredisplay] = useState(false)
  //  useEffect(()=>{
  //   console.log(Allanswers);
  //  },[Allanswers])
   const scoreHandler = () =>{
    setQustion10(false)
    setAllansweers([...Allanswers,Answers.q10])
    let match = ['Adele Goldberg', 'Duplicate/Redundant data', 'Java', '1970', 'Encapsulation', 'stdlib.h', 'It does not support pointers', 'Platform independent', 'base_classname', 'Polymorphism']
    let score = Allanswers?.filter((ele)=>match.includes(ele));
    setScore(score.length)
    console.log("score",score.length); 
    setScoredisplay(true);
  }
  // console.log("score",Allanswers);
  console.log("getdata",getdata);
  return (
    <>
    <h3 style={{alignItems:"center",marginTop:"20px",color:"green",display:"flex",justifyContent:"center"}}>THIS IS QUIZ APP</h3>
    {Startbtn?<div className='btnstart'> 
     <button type="button" class="btn btn-primary btn-lg"onClick={()=>(setStartbtn(false),setQustion1(true))}>Start-Quiz</button></div>:null}
    {Qustion1&&
    <>
    <div className='questions'>
      <h4>
     Q.1 What is the implicit return type of constructor? 
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={(e)=> setAnswers({q1:"Andrea Ferro"})}/>
       <label class="form-check-label" for="flexRadioDefault1"  >Andrea Ferro</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={(e)=> setAnswers({q1:"Adele Goldberg"}) }/>
       <label class="form-check-label" for="flexRadioDefault1"  >Adele Goldberg</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q1:"Alan Kay"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Alan Kay</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q1:"Dennis Ritchie"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Dennis Ritchie</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion1(false),setQustion2(true),setAllansweers([...Allanswers,Answers.q1]))}>Save&Next</button>
     </>}
    
     {Qustion2&&
    <>
    <div className='questions'>
      <h4>
     Q.2  Which is not a feature of OOP in general definitions? 
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q2:"Efficient Code"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Efficient Code</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q2:"Code reusability"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Code reusability</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q2:"Modularity"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Modularity</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q2:"Duplicate/Redundant data"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Duplicate/Redundant data</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion2(false),setQustion3(true),setAllansweers([...Allanswers,Answers.q2]))}>Save&Next</button>
     </>}
     
     {Qustion3&&
    <>
    <div className='questions'>
      <h4>
     Q.3  Which was the first purely object oriented programming language developed?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q3:"Kotlin"})} />
       <label class="form-check-label" for="flexRadioDefault1">Kotlin</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q3:"SmallTalk"})}/>
       <label class="form-check-label" for="flexRadioDefault1">SmallTalk</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q3:"Java"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Java</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q3:"C++"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> C++</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion3(false),setQustion4(true),setAllansweers([...Allanswers,Answers.q3]))}>Save&Next</button>
     </>}

     {Qustion4&&
    <>
    <div className='questions'>
      <h4>
     Q.4 When OOP concept did first came into picture?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q4:"1980’s"})} />
       <label class="form-check-label" for="flexRadioDefault1">1980s</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q4:"1995"})} />
       <label class="form-check-label" for="flexRadioDefault1">1995</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q4:"1970"})} />
       <label class="form-check-label" for="flexRadioDefault1">1970</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q4:"1993"})} />
       <label class="form-check-label" for="flexRadioDefault1">1993</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion4(false),setQustion5(true),setAllansweers([...Allanswers,Answers.q4]))}>Save&Next</button>
     </>}

     {Qustion5&&
    <>
    <div className='questions'>
      <h4>
     Q.5 Which feature of OOP indicates code reusability?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q5:"Abstraction"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Abstraction</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q5:"Polymorphism"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Polymorphism</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q5:"Encapsulation"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Encapsulation</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q5:"Inheritance"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Inheritance</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion5(false),setQustion6(true),setAllansweers([...Allanswers,Answers.q5]))}>Save&Next</button>
     </>}

     {Qustion6&&
    <>
    <div className='questions'>
      <h4>
     Q.6  Which header file is required in C++ to use OOP?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q6:"OOP can be used without using any header file"})}/>
       <label class="form-check-label" for="flexRadioDefault1">OOP can be used without using any header file</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q6:"stdlib.h"})}/>
       <label class="form-check-label" for="flexRadioDefault1">stdlib.h</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q6:"iostream.h"})}/>
       <label class="form-check-label" for="flexRadioDefault1">iostream.h</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q6:"stdio.h"})}/>
       <label class="form-check-label" for="flexRadioDefault1">stdio.h</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion6(false),setQustion7(true),setAllansweers([...Allanswers,Answers.q6]))}>Save&Next</button>
     </>}

     {Qustion7&&
    <>
    <div className='questions'>
      <h4>
     Q.7  Why Java is Partially OOP language?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q7:"It allows code to be written outside classes"})}/>
       <label class="form-check-label" for="flexRadioDefault1">It allows code to be written outside classes</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q7:"It supports usual declaration of primitive data types"})}/>
       <label class="form-check-label" for="flexRadioDefault1">It supports usual declaration of primitive data types</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q7:"It does not support pointers"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> It does not support pointers</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q7:" It doesn’t support all types of inheritance"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> It doesnt support all types of inheritance</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion7(false),setQustion8(true),setAllansweers([...Allanswers,Answers.q7]))}>Save&Next</button>
     </>}

     {Qustion8&&
    <>
    <div className='questions'>
      <h4>
     Q.8 Which among the following doesn’t come under OOP concept?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q8:"Data hiding"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> Data hiding</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q8:"Message passing"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> Message passing</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q8:"Platform independent"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Platform independent</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q8:"Data binding"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Data binding</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion8(false),setQustion9(true),setAllansweers([...Allanswers,Answers.q8]))}>Save&Next</button>
     </>}

     {Qustion9&&
    <>
    <div className='questions'>
      <h4>
     Q.9 Which is the correct syntax of inheritance?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q9:"access derived_classname"})}/>
       <label class="form-check-label" for="flexRadioDefault1" > access derived_classname</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q9:"access base_classname"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> access base_classname</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q9:"base_classname"})}/>
       <label class="form-check-label" for="flexRadioDefault1">base_classname</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q9:"derived_classname"})}/>
       <label class="form-check-label" for="flexRadioDefault1">derived_classname</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>(setQustion9(false),setQustion10(true),setAllansweers([...Allanswers,Answers.q9]))}>Save&Next</button>
     </>}

     {Qustion10&&
    <>
    <div className='questions'>
      <h4>
     Q.10  Which feature of OOP is indicated by the following code?
     </h4>
     </div>
     <div className='options'>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setAnswers({q10:"Encapsulation and Inheritance"})}/>
       <label class="form-check-label" for="flexRadioDefault1">  Encapsulation and Inheritance</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setAnswers({q10:"Inheritance and polymorphism"})}/>
       <label class="form-check-label" for="flexRadioDefault1"> Inheritance and polymorphism</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={()=>setAnswers({q10:"Polymorphism"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Polymorphism</label><br></br>
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={()=>setAnswers({q10:"Inheritance"})}/>
       <label class="form-check-label" for="flexRadioDefault1">Inheritance</label>
    </div>
     </div>
     <button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>scoreHandler()}>CheckScore</button>
     </>}
     {Scoredisplay?(
     <>
     
     <h2 style={{textAlign:"center",color:"black",marginTop:"40px"}}>
      YourScore:={Score}
      </h2>
      
     </>
     ):null}
    </>
  )
}

export default Home

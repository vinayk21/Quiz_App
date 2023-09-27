import React, { useState } from "react";
import { data } from "../Componets/Questins";
const Quiz = () => {
  const [Startbtn, setStartbtn] = useState(true);
  const [Count, setCount] = useState(1);
  const [Answers, setAnswers] = useState([]);
  const [Score, setScore] = useState("");
  const SaveandNextHandler = () =>{
    setCount(Count+1)
    // setAnswers("")
  }
//   console.log("data", data);
  let ff = data?.filter(({id})=>id===Count)
//   console.log("ff",ff);
//   console.log("cheked",Answers);
  const scoreHandler =() =>{
    let score = data?.filter(({answers})=>Answers.includes(answers))
    // console.log("clicked");
      setScore(score.length)
    // console.log("score",score);
  }
  return (
    <>
      <h3
        style={{
          alignItems: "center",
          marginTop: "20px",
          color: "green",
          display: "flex",
          justifyContent: "center",
        }}
      >
        THIS IS QUIZ APP
      </h3>
      {Startbtn ? (
        <div className="btnstart">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={() => setStartbtn(false)}
          >
            Start-Quiz
          </button>
        </div>
      ) : null}
      {!Startbtn && (
        <>
          {ff?.map((ele,index) => {
            
            return (
              <>
                <div className="questions" key={index}>
                  <h4>{ele.questions}</h4>
                </div>
                <div className="options">
                  <div class="">
                    {(ele.Options)?.map((xx,value)=>{
                        return(
                            <>
                      <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={`flexRadioDefault${index}`} onChange={()=>(setAnswers((rr)=>[...rr,xx]))}
                    />
                    <label class="form-check-label" for={`flexRadioDefault${index}`}>
                      {xx}
                    </label>
                    <br></br>
                     </>
                        )
                    })}
                  </div>
                </div>
              </>
            );
            })}
       {ff.length?<button type="button" class="btn btn-success" style={{marginLeft:"700px",marginTop:"10px"}} onClick={()=>SaveandNextHandler()}>Save&Next</button>:
       <button type="button" class="btn btn-success" style={{marginLeft:"735px",marginTop:"10px"}} onClick={()=>scoreHandler()}>Finish</button>
       }
       <br></br>
        <h2 style={{color:"red",textAlign:"center"}}>
       {Score}
       </h2>
        </>
      )}
    </>
  );
};

export default Quiz;

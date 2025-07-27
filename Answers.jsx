import React, { useEffect, useState } from "react";
import { checkHeading,replacekHeadingStarts } from "../help";


const Answers = ({ans,totalResult, index, type}) => {
    //  console.log(ans,key);

    const [heading, setHeading] = useState (false);
    const [answer, setAnswer] = useState (ans);
    // console.log(index);
    


    useEffect (() => {
        // console.log(ans, checkHeading(ans));
        
       if(checkHeading(ans)){
        setHeading(true);
        setAnswer(replacekHeadingStarts(ans))
       }else {
        setHeading(false);
        setAnswer(ans);
      }
    }, [ans]);

    
    return (
        <div>

            {

                index === 0 && totalResult>1? <span className="pt-2 text-lg block text-white">
                    {answer}
                </span>:
heading ? <span className="pt-1 text-lg block text-white ">{answer}</span>
:<span className={type === 'q'? 'pl-1' : 'pl-5'}>{answer}</span>
            }
           
        </div>
    );
};

export default Answers;
import { useState } from "react";

const Choice = (props) => {

    const state = "btn option "
    const [color, setColor] = useState("btn-warning")

    const checkResponse = (answer) => {
        if (answer === props.correct) {
            setColor("btn-outline-success")
            props.updateScore(props.score+1)
        } else {
        setColor("btn-outline-danger")
        }
    }

    return(
        <button type="button" className={state + color} value={props.choice} 
                onClick={
                    (e) => {
                        checkResponse(e.target.value)
                        setTimeout(setColor, 300, "btn-warning")
                        setTimeout(props.showNext,500, (props.questionNumber + 1));
                    }
                }>{props.choice}
        </button>
    )
}

export default Choice;
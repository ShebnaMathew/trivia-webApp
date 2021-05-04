import Choice from "./Choice"
import {decode} from 'html-entities';

const Question = props => {

    return (
        <div className="question">
            <div className="row card option">
                <div className="card-body text-center justify-content-center">
                    {decode(props.question)}
                </div>
            </div>
            <div className="row btn-group-vertical option">
                {
                    props.choices.map((each) => 
                    <Choice choice={decode(each)} questionNumber={props.questionNumber} 
                    correct={decode(props.correct)} showNext={props.showNext} score={props.score} 
                    updateScore={props.updateScore}/>
                    )
                }
            </div>
        </div>
    )
}

export default Question;
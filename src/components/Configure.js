import { useState } from "react"
import Selection from "./Selection"

const selections = ["Select Category", "Select Difficulty", "Select Type"]
const options = [["Any Category",
"General Knowledge",
"Entertainment: Books",
"Entertainment: Film",
"Entertainment: Music",
"Entertainment: Musicals & Theatres",
"Entertainment: Television",
"Entertainment: Video Games",
"Entertainment: Board Games",
"Science & Nature",
"Science: Computers",
"Science: Mathematics",
"Mythology",
"Sports",
"Geography",
"History",
"Politics",
"Art",
"Celebrities",
"Animals",
"Vehicles",
"Entertainment: Comics",
"Science: Gadgets",
"Entertainment: Japanese Anime & Manga",
"Entertainment: Cartoon & Animations"],
["Any Difficulty", "Easy", "Medium", "Hard"],
["Any Type", "Multiple Choice", "True/False"]]

const Configure = (props) => {
    const [numOfQuestions, setNumOfQuestions] = useState(10);
    const [category, setCategory] = useState("Any Category");
    const [difficulty, setDifficulty] = useState("Any Difficulty");
    const [type, setType] = useState("Any Type");

    return (
        <div className="configure start justify-content-center">
            <div>
                <h2 className="text-center justify-content-center">What would you like ?</h2>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Number of Questions: </span>
                <input type="number" className="form-control" placeholder={numOfQuestions} 
                aria-label="number of questions" aria-describedby="basic-addon1" 
                onChange={(e) => setNumOfQuestions(e.target.value)}/>
            </div>
            <div>
                {selections.map((current, i) => 
                    <Selection label={current} options={options[i]} 
                    selectedCategory={setCategory} selectedDifficulty={setDifficulty} selectedType={setType}/>
                )}
            </div>
            <button type="button" className="btn btn-danger btn-lg quiz-btn" onClick={() => 
                props.fetch(numOfQuestions,category,difficulty,type)}>Quiz Me !
            </button>
        </div>
    )
}

export default Configure;
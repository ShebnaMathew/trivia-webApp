
const Selection = (props) => {
    return (
        <>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupSelect01">{props.label}</label>
                <select className="form-select" id="inputGroupSelect01" onChange={(e) => 
                (props.label === "Select Category") ? (props.selectedCategory(props.options.indexOf(e.target.value)+8)):
                (props.label === "Select Difficulty") ? (props.selectedDifficulty(e.target.value.trim().toLowerCase())):
                (props.label === "Select Type") ? ((e.target.value.trim().toLowerCase()) === "multiple choice") ? 
                (props.selectedType("multiple")):(props.selectedType("boolean")):""}>
                    <option selected>{props.options[0]}</option>
                    {
                        props.options.map((option,i) =>
                        (i !== 0) ? 
                        <option value={option}>{option}</option>:""
                        )
                    }
                </select>
            </div>
        </>
    )
}

export default Selection;
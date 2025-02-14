const Select = (props) => {
    return (
        <div className="mt-3"> 
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <select
                className="form-select"
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">{props.placeHoder}</option>
                {props.options.map((option) => {
                    return (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.value}
                        </option>
                    )
                })}
            </select>
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
} 

export default Select;
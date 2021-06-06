

function review(props){
    return(

        <div className="dashboard">
        <h2>{props.name}</h2>
        <p>{props.date}</p>
        <p>ratings: {props.rating}</p>
        <p className="comments">{props.comments}</p>
        </div>
    )
}

export default review;
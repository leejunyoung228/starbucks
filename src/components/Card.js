export default function Card(props){
    return(
        <li>
            <div className="card">
                <img src={props.url} className="card-image"></img>
                <dd className="name">{props.name}</dd>
            </div>
        </li>
        
    )
}
export default function Card(props){
    return(
        <li>
            <div className="card">
                <img src={props.url} className="card-image" />
                <p className="name">{props.name}</p>
            </div>
        </li>
        
    )
}
export default function Pessoas(props) {

    return(
      <div>        
        <h4>{props.nome}</h4>
        <p>{props.empresa}</p>
        <p>{props.idade}</p>
        <p>{props.apelido}</p>
      </div>
    )
}
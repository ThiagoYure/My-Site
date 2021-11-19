import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({infos}) => {
    return (
        <div className="itemCard" style={{background:""+infos.color}}>
            <div className="icone"><FontAwesomeIcon icon={infos.icon}/></div>
            <h2>{infos.skill}</h2>
        </div>
    );
}
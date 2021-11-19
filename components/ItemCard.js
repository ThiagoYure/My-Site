import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCard = ({infos}) => {
    return (
        <div className="itemCard" style={{background:""+infos.color}}>
            <div className="icone"><FontAwesomeIcon icon={infos.icon}/></div>
            <h2>{infos.skill}</h2>
        </div>
    );
}

export default ItemCard;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCard = ({ infos }) => {
    return (
        <div className="cardItem">
            <div className="cardIcon" style={{ background: "" + infos.color }}>
                <FontAwesomeIcon icon={infos.icon} />
                <div className="abilityValue">
                    <div>{infos.value}</div>
                </div>
            </div>
            <div className="skillName">
                <h3>{infos.skill}</h3>
            </div>
        </div>
    );
}

export default ItemCard;
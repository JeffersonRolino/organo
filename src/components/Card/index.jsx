import "./Card.css";

const Card = (props) => {
    return (
        <div className="employe">
            <div
                className="header"
                style={{ backgroundColor: props.backgroundColor }}
            >
                <img src={props.image} alt={props.name} />
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    );
};

export default Card;

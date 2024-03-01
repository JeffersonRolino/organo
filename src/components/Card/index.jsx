import "./Card.css";

const Card = (props) => {
    return (
        <div className="employe">
            <div
                className="header"
                style={{ backgroundColor: props.backgroundColor }}
            >
                <img src="https://github.com/jeffersonrolino.png" alt="" />
            </div>
            <div className="footer">
                <h4>Jefferson Rolino</h4>
                <h5>Engenheiro de Software</h5>
            </div>
        </div>
    );
};

export default Card;

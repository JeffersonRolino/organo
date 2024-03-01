import "./Team.css";
import Card from "../Card";

const Team = (props) => {
    return (
        <section
            className="team"
            style={{ backgroundColor: props.secondaryColor }}
        >
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <Card backgroundColor={props.primaryColor}></Card>
        </section>
    );
};

export default Team;

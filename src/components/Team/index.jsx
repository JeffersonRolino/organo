import "./Team.css";
import Card from "../Card";

const Team = (props) => {
    return (
        props.employes.length > 0 && (
            <section
                className="team"
                style={{ backgroundColor: props.secondaryColor }}
            >
                <h3 style={{ borderColor: props.primaryColor }}>
                    {props.name}
                </h3>
                <div className="employes">
                    {props.employes.map((employe) => (
                        <Card
                            backgroundColor={props.primaryColor}
                            name={employe.name}
                            position={employe.position}
                            image={employe.image}
                            key={employe.name}
                        ></Card>
                    ))}
                </div>
            </section>
        )
    );
};

export default Team;

import workItems from "data/Worksdata";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="container">
      <h1 className="container-title">Projets</h1>
      <div className="card">
        <div className="card-content">
          Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
          pas à pas comment nous avons été présent pour lancer vos marques
          préférées.
          <h1>Nos projets</h1>
        </div>
      </div>

      <div className="works-list">
        {workItems.map((client, i) => {
          return (
            <Link to={`${client.name.toLowerCase()}-study-case`} key={i}>
              {" "}
              {client.name}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
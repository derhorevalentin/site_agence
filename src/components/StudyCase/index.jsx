import { useParams } from "react-router";
import workItems from "data/Worksdata";

const StudyCase = () => {
  const { clientname } = useParams();
  const cleanedClientName =
    clientname.substring(0, clientname.indexOf("-"))[0].toUpperCase() +
    clientname.substring(0, clientname.indexOf("-")).substring(1);
  const clientDetails = workItems.find((c) => c.name === cleanedClientName);
  return (
    <div className="study-case anim">
      <h2>{clientDetails.title}</h2>
      {clientDetails.body}
    </div>
  );
};

export default StudyCase;
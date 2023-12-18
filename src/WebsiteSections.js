 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faVirusCovid,faBuildingColumns,faHeartbeat,faBrain,faLungsVirus,faHeadSideMask,faEye} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export const ArrayofSections = [
  { text: "Corona news", icon: <FontAwesomeIcon className="icons" icon={ faVirusCovid} />},
  {
    text: "Hearts care",
    icon: ( 
     <Link to="researchfield"> <FontAwesomeIcon className="icons" icon={ faHeartbeat} /></Link>
    ),
  },
  {
    text: "Lungs section",
    icon: (
      <Link to="DESIGN"> <FontAwesomeIcon className="icons" icon={ faLungsVirus} />
   </Link> ),
  },
  { text: "Eyes care", icon:   <FontAwesomeIcon className="icons" icon={ faEye} /> }, { text: "Studies", icon: <FontAwesomeIcon className="icons"  icon={faBuildingColumns} />},
  {
    text: "Mental Health",
    icon: (
      <FontAwesomeIcon className="icons"  icon={faBrain} />
     )
  },
 
];


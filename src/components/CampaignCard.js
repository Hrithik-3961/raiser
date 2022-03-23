import { Card } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

const CampaignCard = ({ imgSrc, title, raised, required, createdBy }) => {
  const percentageRaised = Math.round((raised / required) * 100);
  const navigate = useNavigate();

  return (
    <Card
      className="campaign-card"
      onClick={() =>
        navigate("/campaign", {
          state: { imgSrc, title, raised, required, createdBy },
        })
      }
    >
      <Card.Img variant="top" style={{ width: "inherit" }} src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <div className="progress">
          <CircularProgressbar
            value={percentageRaised}
            text={`${percentageRaised} %`}
            strokeWidth={10}
          />
          <p>
            <span>Raised</span>
            {raised}
          </p>
        </div>
        <hr />
        <Card.Text>
          <span>Created By</span>
          {createdBy}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;

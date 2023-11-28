import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "./stamp.scss";

const Stamp = () => {
  return (
    <div className="stampMain">
      <div
        style={{
          border: "8px",
          borderStyle: "solid",
          //borderColor: primaryColor
        }}
        className="stampBody">
        <div className="stampRight">
          <div className="stampTitle">Dévloppeur fullstack</div>
          <div className="stampRightDividor">
            <span
              style={{
                borderBottom: 8,
                borderBottomStyle: "solid",
              }}
            />
            <div>
              <FontAwesomeIcon className="socialIcon" icon={faStar} />
            </div>
            <span
              style={{
                borderBottom: 8,
                borderBottomStyle: "solid",
              }}
            />
          </div>
          <div className="stampName">
            <div className="lastname">ÖNER</div>
            <div className="firstname">BERK</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stamp;

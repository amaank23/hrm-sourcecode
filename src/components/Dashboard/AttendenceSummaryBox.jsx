import PropTypes from "prop-types";
import TrendIcon from "./../../assets/trend-icon.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const AttendenceSummaryBox = ({
  title,
  count,
  subtitle,
  performence,
  bgColor,
}) => {

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="p-[1.25rem] rounded-[.625rem]"
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-white text-sm mb-1">{title}</h4>
          <h5 className="text-2xl font-semibold mb-1 text-white">{count}</h5>
          <div className="flex gap-[.3125rem]">
            <img src={TrendIcon} alt="" />
            <h6 className="text-white text-sm">{subtitle}</h6>
          </div>
        </div>
        <div style={{ width: 55, height: 56 }}>
          <CircularProgressbar
            value={performence}
            text={`+${performence}%`}
            styles={buildStyles({
              pathColor: `white`,
              textColor: "white",
              trailColor: "#FFFFFF4D",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
};
AttendenceSummaryBox.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  performence: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
export default AttendenceSummaryBox;

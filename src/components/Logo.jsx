import Icon from "@mdi/react";
import { mdiTennisBall } from "@mdi/js";

export default function Logo({ mobile }) {
  return (
    <div className="logoBox">
      {mobile === false ? (
        <>
          <div className="logoName1">Match</div>
          <Icon
            path={mdiTennisBall}
            size={2.3}
            color="white"
            rotate={33}
            className="ball"
          />
          <div className="logoName2">Point</div>
        </>
      ) : (
        <>
          <div className="logoName1" style={{ fontSize: "110%" }}>
            Match
          </div>
          <Icon
            path={mdiTennisBall}
            size={1.6}
            color="white"
            rotate={33}
            className="ball"
          />
          <div className="logoName2" style={{ fontSize: "110%" }}>
            Point
          </div>
        </>
      )}
    </div>
  );
}

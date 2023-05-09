import React from "react";
import homeLogo from "../../assets/img/home.png";
import shortsLogo from "../../assets/img/shorts.png";
import subscriptionsLogo from "../../assets/img/subscriptions.png";
import history from "../../assets/img/history.png";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="p-2 m-2">
      <ul>
        <li className="flex items-center mt-2 mb-2">
          <img className="h-5" src={homeLogo} alt={"Home Logo"} />
          <Link to="/youtube">
            <span className="px-5 text-base">Home</span>
          </Link>
        </li>
        <li className="flex items-center mt-2 mb-2">
          <img className="h-5" src={shortsLogo} alt={"Shorts Logo"} />
          <span className="px-5 text-base">Shorts</span>
        </li>
        <li className="flex items-center mt-2 mb-4">
          <img
            className="h-5"
            src={subscriptionsLogo}
            alt={"Subscriptions Logo"}
          />
          <span className="px-5 text-base">Subscriptions</span>
        </li>
      </ul>
      <hr />
      <ul>
        <li className="flex items-center mt-4 mb-2">
          <img className="h-5" src={shortsLogo} alt={"Shorts Logo"} />
          <span className="px-5 text-base">Library</span>
        </li>
        <li className="flex items-center mt-2 mb-2">
          <img className="h-5" src={history} alt={"History Logo"} />
          <span className="px-5 text-base">History</span>
        </li>
        <li className="flex items-center mt-2 mb-4">
          <img className="h-5" src={shortsLogo} alt={"Shorts Logo"} />
          <span className="px-5 text-base">Your videos</span>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

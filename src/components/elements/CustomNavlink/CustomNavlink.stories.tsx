import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router  } from "react-router-dom";

import CustomNavLink from ".";
import { HomeIocn } from "../../../assets/custom_Icons";

storiesOf("Components/elements/CustomNavLink", module).add(
  "CustomNavLink",
  () => {
    return (
      <Router>
        <CustomNavLink
          icon={HomeIocn}
          title="Home"
          pathName="/"
          currentPathName="/"
        />
      </Router>
    );
  }
);

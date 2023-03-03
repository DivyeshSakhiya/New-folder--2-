import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import PrimaryButton from ".";

storiesOf("Components/elements/PrimaryButton", module).add("PrimaryButton", () => {
  return (
    <PrimaryButton
    title="Create Job"
    icon={
      <FontAwesomeIcon icon={faPlus} size="lg" className="ms-2" />
    }
  />
  );
});

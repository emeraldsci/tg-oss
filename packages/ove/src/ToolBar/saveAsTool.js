import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { compose } from "redux";
import save_as_ECL_31353B from "../images/ECLImages/save_as_ECL_31353B.svg";

export default compose()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={<img src={save_as_ECL_31353B} alt="save_as_ECL_31353B" />}
          />
        ),
        onIconClick: () => {
          window.toastr.success("Save As");
        },
        disabled: false,
        tooltip: <span>Save As</span>,
        ...toolbarItemProps
      }}
    />
  );
});

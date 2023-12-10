import ToolbarItem from "./ToolbarItem";
import { compose } from "redux";
import { Icon } from "@blueprintjs/core";
import hotkeys_editor_ECL_31353B from "../images/ECLImages/hotkeys_editor_ECL_31353B.svg";

export default compose()(({ toolbarItemProps, openHotkeyDialog }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={
              <img
                src={hotkeys_editor_ECL_31353B}
                alt="hotkeys_editor_ECL_31353B"
              />
            }
          />
        ),
        onIconClick: () => {
          openHotkeyDialog();
        },
        disabled: false,
        tooltip: <span>View Editor Hotkeys</span>,
        ...toolbarItemProps
      }}
    />
  );
});

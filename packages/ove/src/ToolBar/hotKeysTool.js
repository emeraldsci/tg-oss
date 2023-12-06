import ToolbarItem from "./ToolbarItem";
import { compose } from "redux";
import hotkeys_editor_ECL from "./ECLImages/hotkeys_editor_ECL.svg";

export default compose()(({ toolbarItemProps, openHotkeyDialog }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={hotkeys_editor_ECL} alt="hotkeys_editor_ECL" />,
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

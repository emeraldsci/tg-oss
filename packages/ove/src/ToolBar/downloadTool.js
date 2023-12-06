import { Menu } from "@blueprintjs/core";
import { createCommandMenu } from "@teselagen/ui";
import getCommands from "../commands";

import { connectToEditor } from "../withEditorProps";
import ToolbarItem from "./ToolbarItem";
import withEditorProps from "../withEditorProps";
import export_sequence_ECL from "./ECLImages/export_sequence_ECL.svg";

export default connectToEditor()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        tooltip: "Export",
        Dropdown,
        noDropdownIcon: true,
        onIconClick: "toggleDropdown",
        Icon: <img src={export_sequence_ECL} alt="export_sequence_ECL" />,
        ...toolbarItemProps
      }}
    />
  );
});

const Dropdown = withEditorProps(props => {
  return (
    <Menu>
      {createCommandMenu(
        [
          "exportSequenceAsGenbank",
          "exportSequenceAsFasta",
          "exportSequenceAsTeselagenJson"
        ],
        getCommands({ props })
      )}
    </Menu>
  );
});

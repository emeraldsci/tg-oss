import React from "react";
import { Icon, Menu } from "@blueprintjs/core";
import { createCommandMenu } from "@teselagen/ui";
import getCommands from "../commands";

import { connectToEditor } from "../withEditorProps";
import ToolbarItem from "./ToolbarItem";
import withEditorProps from "../withEditorProps";
import export_sequence_ECL_31353B from "../images/ECLImages/export_sequence_ECL_31353B.svg";

export default connectToEditor()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        tooltip: "Export",
        Dropdown,
        noDropdownIcon: true,
        onIconClick: "toggleDropdown",
        Icon: (
          <Icon
            data-test="veDownloadTool"
            icon={
              <img src={export_sequence_ECL_31353B} alt="Export Sequence" />
            }
          />
        ),
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

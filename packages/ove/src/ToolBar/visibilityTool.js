import { Menu } from "@blueprintjs/core";
import React from "react";
import { createCommandMenu } from "@teselagen/ui";
import viewSubmenu from "../MenuBar/viewSubmenu";
import getCommands from "../commands";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import withEditorProps from "../withEditorProps";
import view_ECL from "./ECLImages/view_ECL.svg";

export default connectToEditor(({ toolBar = {} }) => {
  return {
    isOpen: toolBar.openItem === "visibilityTool"
  };
})(({ toolbarItemProps, isOpen }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={view_ECL} alt="view_ECL" />,
        onIconClick: "toggleDropdown",
        Dropdown: VisibilityOptions,
        noDropdownIcon: true,
        toggled: isOpen,
        tooltip: isOpen ? "Hide Visibility Options" : "Show Visibility Options",
        ...toolbarItemProps
      }}
    />
  );
});

const VisibilityOptions = withEditorProps(function (props) {
  return (
    <Menu>
      {createCommandMenu(viewSubmenu, getCommands({ props }), {
        useTicks: true,
        omitIcons: true
      })}
    </Menu>
  );
});

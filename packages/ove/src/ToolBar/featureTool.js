import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import show_features_ECL_31353B from "../images/ECLImages/show_features_ECL_31353B.svg";

export default connectToEditor(
  ({ annotationVisibility = {}, toolBar = {} }) => {
    return {
      toggled: annotationVisibility.features,
      isOpen: toolBar.openItem === "featureTool"
    };
  }
)(({ toolbarItemProps, toggled, annotationVisibilityToggle, isOpen }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={<img src={show_features_ECL_31353B} alt="Show Features" />}
          />
        ),
        onIconClick: function () {
          annotationVisibilityToggle("features");
        },
        toggled,
        tooltip: "Show features",
        tooltipToggled: "Hide features",
        // Dropdown: ConnectedFeatureToolDropdown,
        dropdowntooltip: (!isOpen ? "Show" : "Hide") + " Feature Options",
        ...toolbarItemProps
      }}
    />
  );
});

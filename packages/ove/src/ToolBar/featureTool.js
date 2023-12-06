import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import show_features_ECL from "./ECLImages/show_features_ECL.svg";

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
        Icon: <img src={show_features_ECL} alt="show_features_ECL" />,
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

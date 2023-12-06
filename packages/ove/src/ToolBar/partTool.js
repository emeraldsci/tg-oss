import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import { PartTagSearch } from "../helperComponents/partTagSearch";
import show_part_ECL from "./ECLImages/show_part_ECL.svg";

export default connectToEditor(
  ({ annotationVisibility = {}, toolBar = {} }) => {
    return {
      toggled: annotationVisibility.parts,
      isOpen: toolBar.openItem === "partTool"
    };
  }
)(({
  allPartTags,
  editTagsLink,
  toolbarItemProps,
  toggled,
  annotationVisibilityToggle,
  isOpen
}) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={show_part_ECL} alt="show_part_ECL" />,
        onIconClick: function () {
          annotationVisibilityToggle("parts");
        },
        toggled,
        editTagsLink,
        allPartTags,
        tooltip: "Show parts",
        tooltipToggled: "Hide parts",
        noDropdownIcon: !allPartTags,
        Dropdown: PartTagSearch,
        dropdowntooltip: (!isOpen ? "Show" : "Hide") + " Part Options",
        ...toolbarItemProps
      }}
    />
  );
});

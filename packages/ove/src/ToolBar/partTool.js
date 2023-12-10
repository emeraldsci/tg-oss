import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import { PartTagSearch } from "../helperComponents/partTagSearch";
import show_part_ECL_31353B from "../images/ECLImages/show_part_ECL_31353B.svg";

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
        Icon: (
          <Icon
            icon={<img src={show_part_ECL_31353B} alt="show_part_ECL_31353B" />}
          />
        ),
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

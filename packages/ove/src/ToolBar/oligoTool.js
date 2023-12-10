import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import show_primer_ECL_31353B from "../images/ECLImages/show_primer_ECL_31353B.svg";

export default connectToEditor(editorState => {
  return {
    isHidden: editorState.sequenceData && editorState.sequenceData.isProtein,

    toggled:
      editorState.annotationVisibility &&
      editorState.annotationVisibility.primers
  };
})(({ toolbarItemProps, isHidden, toggled, annotationVisibilityToggle }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={
              <img src={show_primer_ECL_31353B} alt="show_primer_ECL_31353B" />
            }
          />
        ),
        onIconClick: function () {
          annotationVisibilityToggle("primers");
        },
        isHidden,
        toggled,
        tooltip: "Show Primers",
        tooltipToggled: "Hide Primers",
        ...toolbarItemProps
      }}
    />
  );
});

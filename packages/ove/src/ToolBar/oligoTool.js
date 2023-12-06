import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import show_primer_ECL from "./ECLImages/show_primer_ECL.svg";

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
        Icon: <img src={show_primer_ECL} alt="show_primer_ECL" />,
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

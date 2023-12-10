import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import redo_ECL_31353B from "../images/ECLImages/redo_ECL_31353B.svg";

export default connectToEditor(editorState => {
  return {
    disabled: !(
      editorState.sequenceDataHistory &&
      editorState.sequenceDataHistory.future &&
      editorState.sequenceDataHistory.future.length
    )
  };
})(({ toolbarItemProps, redo, disabled }) => {
  //adjust color based on disabled state
  //this is a solution that does not use the disabled state in blueprint
  //for custom icons blueprint does not change on the disabled states

  const ourIcon = disabled ? (
    <img src={redo_ECL_31353B} alt="redo_ECL_31353B" class="toolbar-disabled" />
  ) : (
    <img src={redo_ECL_31353B} alt="redo_ECL_31353B" />
  );

  return (
    <ToolbarItem
      {...{
        Icon: <Icon data-test="veRedoTool" icon={ourIcon} />,
        disabled,
        onIconClick: redo,
        tooltip: (
          <span>
            Redo <span style={{ fontSize: 10 }}>(Cmd/Ctrl+Shift+Z)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

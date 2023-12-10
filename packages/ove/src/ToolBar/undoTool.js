import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import undo_ECL_31353B from "../images/ECLImages/undo_ECL_31353B.svg";

export default connectToEditor(editorState => {
  return {
    disabled: !(
      editorState.sequenceDataHistory &&
      editorState.sequenceDataHistory.past &&
      editorState.sequenceDataHistory.past.length
    )
  };
})(({ toolbarItemProps, undo, disabled }) => {
  //adjust color based on disabled state
  //this is a hacky solution that does not use the disabled state in blueprint
  //for custom icons blueprint does not change on the disabled states

  const ourIcon = disabled ? (
    <img src={undo_ECL_31353B} alt="undo_ECL_31353B" class="toolbar-disabled" />
  ) : (
    <img src={undo_ECL_31353B} alt="undo_ECL_31353B" />
  );

  return (
    <ToolbarItem
      {...{
        Icon: <Icon data-test="veUndoTool" icon={ourIcon} />,
        disabled,
        onIconClick: undo,
        tooltip: (
          <span>
            Undo <span style={{ fontSize: 10 }}>(Cmd/Ctrl+Z)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

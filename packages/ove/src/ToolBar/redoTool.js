import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import redo_ECL_black from "./ECLImages/redo_ECL_black.svg";
import redo_ECL_gray from "./ECLImages/redo_ECL_gray.svg";

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
  //this is a hacky solution that does not use the disabled state in blueprint
  //for custom icons blueprint does not change on the disabled states

  const ourIcon = disabled ? (
    <img src={redo_ECL_gray} alt="redo_ECL_gray" />
  ) : (
    <img src={redo_ECL_black} alt="redo_ECL_black" />
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

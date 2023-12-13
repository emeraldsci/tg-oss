import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor, handleSave } from "../withEditorProps";
import { withHandlers } from "recompose";
import { compose } from "redux";
import save_ECL_31353B from "../images/ECLImages/save_ECL_31353B.svg";

export default compose(
  connectToEditor(
    ({ readOnly, sequenceData = {}, lastSavedId = "134%!@#%!@#%!@%" }) => {
      return {
        readOnly: readOnly,
        sequenceData: sequenceData,
        hasBeenSaved:
          sequenceData.stateTrackingId === "initialLoadId" ||
          sequenceData.stateTrackingId === lastSavedId
      };
    }
  ),
  withHandlers({ handleSave })
)(({
  toolbarItemProps,
  alwaysAllowSave,
  handleSave,
  readOnly,
  hasBeenSaved,
  onSave
}) => {
  const disabledIcon = alwaysAllowSave
    ? false
    : !onSave || hasBeenSaved || readOnly;
  const ourIcon = disabledIcon ? (
    <img src={save_ECL_31353B} alt="Save" class="toolbar-disabled" />
  ) : (
    <img src={save_ECL_31353B} alt="Save" />
  );

  return (
    <ToolbarItem
      {...{
        Icon: <Icon data-test="saveTool" icon={ourIcon} />,
        onIconClick: handleSave,
        disabled: disabledIcon,
        tooltip: (
          <span>
            Save <span style={{ fontSize: 10 }}>(Cmd/Ctrl+S)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

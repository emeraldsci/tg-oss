import React from "react";
import { Icon } from "@blueprintjs/core";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import { withHandlers } from "recompose";
import { compose } from "redux";
import save_as_ECL_31353B from "../images/ECLImages/save_as_ECL_31353B.svg";

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
  withHandlers({})
)(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            data-test="saveTool"
            icon={<img src={save_as_ECL_31353B} alt="Save As" />}
          />
        ),
        onIconClick: () => {
          window.toastr.success("Save As Called");
        }, // handleSave({ isSaveAs: true }),
        disabled: false,
        tooltip: (
          <span>
            Save As <span style={{ fontSize: 10 }}>(Cmd/Ctrl+Shift+S)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

import React from "react";
import ToolbarItem from "./ToolbarItem";
//import { connectToEditor, handleSave } from "../withEditorProps";
import { compose } from "redux";
import save_as_ECL from "./ECLImages/save_as_ECL.svg";

export default compose()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={save_as_ECL} alt="save_as_ECL" />,
        onIconClick: () => {
          window.toastr.success("Save As");
        },
        disabled: false,
        tooltip: <span>Save As</span>,
        ...toolbarItemProps
      }}
    />
  );
});

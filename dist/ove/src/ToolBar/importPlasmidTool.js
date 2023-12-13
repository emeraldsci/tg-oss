import React from "react";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import { Icon } from "@blueprintjs/core";
import open_cloud_file_ECL_31353B from "../images/ECLImages/open_cloud_file_ECL_31353B.svg";

export default connectToEditor()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={<img src={open_cloud_file_ECL_31353B} alt="Open Plasmid" />}
          />
        ),
        onIconClick: () => {
          window.toastr.success("Import Plasmid");
        },
        disabled: false,
        tooltip: <span>Import Plasmid</span>,
        ...toolbarItemProps
      }}
    />
  );
});

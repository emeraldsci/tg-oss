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
            icon={
              <img
                src={open_cloud_file_ECL_31353B}
                alt="open_cloud_file_ECL_31353B"
              />
            }
          />
        ),
        onIconClick: () => {
          window.toastr.success("Import Cloud File");
        },
        disabled: false,
        tooltip: <span>Import Cloud File</span>,
        ...toolbarItemProps
      }}
    />
  );
});

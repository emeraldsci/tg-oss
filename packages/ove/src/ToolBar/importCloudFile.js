import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import open_cloud_file_ECL from "./ECLImages/open_cloud_file_ECL.svg";

export default connectToEditor()(({ toolbarItemProps }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={open_cloud_file_ECL} alt="open_cloud_file_ECL" />,
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

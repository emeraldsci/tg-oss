import React from "react";
import { Icon } from "@blueprintjs/core";
import FindBar from "../FindBar";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import search_ECL_31353B from "../images/ECLImages/search_ECL_31353B.svg";

export default connectToEditor(({ findTool = {} }) => {
  return {
    isOpen: findTool.isOpen
  };
})(({ toolbarItemProps, editorName, toggleFindTool, isOpen }) => {
  return (
    <ToolbarItem
      {...{
        Icon: !isOpen ? (
          <div>
            <Icon
              data-test="ve-find-tool-toggle"
              icon={
                <img
                  className="bp3-icon"
                  src={search_ECL_31353B}
                  alt="Search"
                />
              }
            />
          </div>
        ) : (
          <FindBar editorName={editorName} />
        ),
        renderIconAbove: isOpen,
        onIconClick: toggleFindTool,
        tooltip: isOpen ? (
          <span>
            Hide Find Tool <span style={{ fontSize: 10 }}>(Cmd/Ctrl+F)</span>
          </span>
        ) : (
          <span>
            Show Find Tool <span style={{ fontSize: 10 }}>(Cmd/Ctrl+F)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

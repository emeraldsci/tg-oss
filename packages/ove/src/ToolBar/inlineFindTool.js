import React from "react";
import { Icon } from "@blueprintjs/core";
import FindBar from "../FindBar";
import ToolbarItem from "./ToolbarItem";
import { connectToEditor } from "../withEditorProps";
import search_ECL from "./ECLImages/search_ECL.svg";

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
              icon={<img class="bp3-icon" src={search_ECL} alt="search_ECL" />}
            />
            {/*<Icon data-test="ve-find-tool-toggle" icon="search" />
            <Icon icon="caret-right" />*/}
          </div>
        ) : (
          <FindBar editorName={editorName} />
        ),
        renderIconAbove: isOpen,
        onIconClick: toggleFindTool,
        tooltip: isOpen ? (
          <span style={{ display: "flex", alignItems: "bottom" }}>
            Hide Find Tool <span style={{ fontSize: 10 }}>(Cmd/Ctrl+F)</span>
          </span>
        ) : (
          <span style={{ display: "flex", alignItems: "bottom" }}>
            Show Find Tool <span style={{ fontSize: 10 }}>(Cmd/Ctrl+F)</span>
          </span>
        ),
        ...toolbarItemProps
      }}
    />
  );
});

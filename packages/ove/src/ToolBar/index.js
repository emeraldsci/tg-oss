import React from "react";
import { flatMap, isString, pick } from "lodash";
import versionHistoryTool from "./versionHistoryTool";
// import {connectToEditor} from "../withEditorProps";
import MenuBar from "../MenuBar";
import "./style.css";
import { Button, Tooltip } from "@blueprintjs/core";

import downloadTool from "./downloadTool";
import importTool from "./importTool";
import cutsiteTool from "./cutsiteTool";
import featureTool from "./featureTool";
import partTool from "./partTool";
import oligoTool from "./oligoTool";
import orfTool from "./orfTool";
import editTool from "./editTool";
import findTool from "./findTool";
import inlineFindTool from "./inlineFindTool";
import alignmentTool from "./alignmentTool";
import saveTool from "./saveTool";
import visibilityTool from "./visibilityTool";
import undoTool from "./undoTool";
import redoTool from "./redoTool";
import isMobile from "is-mobile";
import { useMemo } from "react";

//Extra Tools
import saveAsTool from "./saveAsTool";
import hotKeys from "./hotKeys";
import importCloudFile from "./importCloudFile";
import dividerTool from "./dividerTool";

//Pulled in Images
import cut_sites_ECL from "./ECLImages/cut_sites_ECL.svg";
import import_sequence_ECL from "./ECLImages/import_sequence_ECL.svg";
import export_sequence_ECL from "./ECLImages/export_sequence_ECL.svg";

//Parts import export_sequence_ECL from "./ECLImages/export_sequence_ECL.svg";
//Primers import export_sequence_ECL from "./ECLImages/export_sequence_ECL.svg";
import show_features_ECL from "./ECLImages/show_features_ECL.svg";
import show_part_ECL from "./ECLImages/show_part_ECL.svg";
import show_primer_ECL from "./ECLImages/show_primer_ECL.svg";
import reading_frame_ECL from "./ECLImages/reading_frame_ECL.svg";
import view_ECL from "./ECLImages/view_ECL.svg";

const allTools = {
  downloadTool,
  importTool,
  cutsiteTool,
  alignmentTool,
  featureTool,
  partTool,
  oligoTool,
  orfTool,
  editTool,
  findTool,
  inlineFindTool,
  versionHistoryTool,
  saveTool,
  visibilityTool,
  undoTool,
  redoTool,

  //added tools
  saveAsTool,
  hotKeys,
  importCloudFile,
  dividerTool
};

export function ToolBar(props) {
  const {
    modifyTools,
    contentLeft,
    showMenuBar,
    displayMenuBarAboveTools,
    isProtein,
    openHotkeyDialog,
    onSave,
    userDefinedHandlersAndOpts,
    editorName,
    annotationsToSupport,
    handleFullscreenClose,
    closeFullscreen,
    additionalTopRightToolbarButtons,
    toolList = defaultToolList,
    ...rest
  } = props;
  const userDefinedProps = {
    ...pick(props, userDefinedHandlersAndOpts)
  };

  const toolListToUse = useMemo(() => {
    return flatMap(toolList, toolNameOrOverrides => {
      let toolName;
      let toolOverride;
      if (isString(toolNameOrOverrides)) {
        toolName = toolNameOrOverrides;
      } else {
        toolOverride = toolNameOrOverrides;
        toolName = toolNameOrOverrides.name;
      }

      if (
        toolName === "oligoTool" &&
        annotationsToSupport &&
        annotationsToSupport.primers === false
      )
        return [];

      const Tool = toolOverride
        ? allTools[toolOverride.name]
        : allTools[toolName];
      if (!Tool) {
        console.error(
          "You're trying to load a tool that doesn't appear to exist: " +
            toolName
        );
        return [];
      }

      if (isProtein) {
        if (
          toolName === "cutsiteTool" ||
          toolName === "orfTool" ||
          toolName === "alignmentTool"
        ) {
          return [];
        }
      }
      if (toolName === "saveTool" && !onSave) {
        return [];
      } //don't show the option to save if no onSave handler is passed

      return { toolName, toolOverride, Tool };
    });
  }, [toolList, annotationsToSupport, isProtein, onSave]);

  let items = flatMap(
    toolListToUse,
    ({ toolName, toolOverride, Tool }, index) => {
      if (!Tool) return [];
      return (
        <Tool
          {...rest}
          {...userDefinedProps}
          toolbarItemProps={{
            ...userDefinedProps,
            index,
            toolName,
            editorName,
            ...toolOverride
          }}
          openHotkeyDialog={openHotkeyDialog}
          editorName={editorName}
          key={toolName}
        />
      );
    }
  );

  if (modifyTools) {
    items = modifyTools(items);
  }

  return (
    <div className="veToolbar-outer" style={{ display: "flex" }}>
      {contentLeft}
      <div
        style={{
          backgroundColor: "rgb(#d6dce2)",
          ...(displayMenuBarAboveTools && showMenuBar
            ? {
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start"
              }
            : {
                display: "flex",
                width: "100%",
                justifyContent: "left",
                flexWrap: "wrap"
              })
        }}
        className="veToolbar"
      >
        {showMenuBar && (
          <MenuBar
            openHotkeyDialog={openHotkeyDialog}
            {...userDefinedProps}
            onSave={onSave} //needs to be passed so that editor commands will have it
            style={{ marginLeft: 0 }}
            editorName={editorName}
          />
        )}
        {displayMenuBarAboveTools && showMenuBar ? (
          <div
            className="veTools-displayMenuBarAboveTool"
            style={{
              display: "flex",
              paddingLeft: 15,
              paddingRight: 15,
              flexWrap: "wrap",
              ...(isMobile() && {
                overflow: "auto",
                flexWrap: "nowrap",
                width: "100%"
              })
              // width: "100%"
            }}
          >
            {items}
          </div>
        ) : (
          items
        )}
      </div>
      {additionalTopRightToolbarButtons}
      {closeFullscreen && (
        <CloseFullscreenButton onClick={handleFullscreenClose} />
      )}
    </div>
  );
}
const CloseFullscreenButton = props => {
  return (
    <Tooltip content="Close Fullscreen Mode">
      <Button
        minimal
        style={{
          marginTop: 2,
          marginRight: 2
        }}
        onClick={props.onClick}
        className="ve-close-fullscreen-button"
        icon="minimize"
      />
    </Tooltip>
  );
};

export const defaultToolList = [
  "saveTool",
  "downloadTool",
  "importTool",
  "undoTool",
  "redoTool",
  "cutsiteTool",
  "featureTool",
  "partTool",
  "oligoTool",
  "orfTool",
  "alignmentTool",
  "editTool",
  "findTool",
  "visibilityTool"
];

export const eclToolList = [
  "importCloudFile",

  "dividerTool",

  "saveTool",

  "saveAsTool",

  "dividerTool",

  {
    name: "importTool",
    Icon: <img src={import_sequence_ECL} alt="import_sequence_ECL" />
  },
  {
    name: "downloadTool",
    Icon: <img src={export_sequence_ECL} alt="export_sequence_ECL" />
  },

  "dividerTool",

  "undoTool",

  "redoTool",

  "dividerTool",

  {
    name: "cutsiteTool",
    Icon: <img src={cut_sites_ECL} alt="cut_sites_ECL" />
  },
  {
    name: "featureTool",
    Icon: <img src={show_features_ECL} alt="show_features_ECL" />
  },
  {
    name: "partTool",
    Icon: <img src={show_part_ECL} alt="show_part_ECL" />
  },
  {
    name: "oligoTool",
    Icon: <img src={show_primer_ECL} alt="show_primer_ECL" />
  },
  {
    name: "orfTool",
    Icon: <img src={reading_frame_ECL} alt="reading_frame_ECL" />
  },

  "dividerTool",

  {
    name: "visibilityTool",
    Icon: <img src={view_ECL} alt="view_ECL" />
  },
  "hotKeys",

  "dividerTool",

  //{
  //  name: "findTool",
  //  Icon: <img src={search_tools_ECL} alt="search_tools_ECL" />
  //}
  "findTool"
];

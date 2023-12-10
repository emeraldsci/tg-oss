import React from "react";
import { Icon } from "@blueprintjs/core";
import Dropzone from "react-dropzone";
import ToolbarItem from "./ToolbarItem";
import { compose, withHandlers } from "recompose";
import { importSequenceFromFile, connectToEditor } from "../withEditorProps";
import import_sequence_ECL_31353B from "../images/ECLImages/import_sequence_ECL_31353B.svg";

export default compose(
  connectToEditor(),
  withHandlers({ importSequenceFromFile })
)(({ toolbarItemProps, importSequenceFromFile }) => {
  return (
    <ToolbarItem
      {...{
        Icon: (
          <Icon
            icon={
              <img
                src={import_sequence_ECL_31353B}
                alt="import_sequence_ECL_31353B"
              />
            }
          />
        ),
        IconWrapper: Dropzone,
        IconWrapperProps: {
          multiple: false,
          style: {},
          onDrop: files => importSequenceFromFile(files[0])
        },
        tooltip: "Click or drag to import and view files (.fasta .gb .dna)",
        ...toolbarItemProps
      }}
    />
  );
});

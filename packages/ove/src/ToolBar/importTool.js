import React from "react";
import Dropzone from "react-dropzone";
import ToolbarItem from "./ToolbarItem";
import { compose, withHandlers } from "recompose";
import { importSequenceFromFile, connectToEditor } from "../withEditorProps";
import import_sequence_ECL from "./ECLImages/import_sequence_ECL.svg";

export default compose(
  connectToEditor(),
  withHandlers({ importSequenceFromFile })
)(({ toolbarItemProps, importSequenceFromFile }) => {
  return (
    <ToolbarItem
      {...{
        Icon: <img src={import_sequence_ECL} alt="import_sequence_ECL" />,
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

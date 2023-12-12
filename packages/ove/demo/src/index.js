import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import store from "./store";
// import { createRoot } from "react-dom/client";
import { render } from "react-dom";

import {
  CircularView,
  RowView,
  LinearView,
  DigestTool,
  updateEditor,
  EnzymeViewer
} from "../../src";

import exampleSequenceData from "./exampleData/exampleSequenceData";
import StandaloneDemo from "./StandaloneDemo";
import SimpleCircularOrLinearViewDemo from "./SimpleCircularOrLinearViewDemo";
import StandaloneAlignmentDemo from "./StandaloneAlignmentDemo";
import AlignmentDemo from "./AlignmentDemo";
import VersionHistoryView from "../../src/VersionHistoryView";
import EditorDemo from "./EditorDemo";
import "./style.css";
// eslint-disable-next-line @nx/enforce-module-boundaries

const Demo = () => {
  return (
    <Provider store={store}>
      <Router>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          {/*
          <Drawer
            size={Drawer.SMALL}
            isOpen={isSidebarOpen}
            onClose={() => {
              setSidebarOpen(false);
            }}
            position="left"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%"
              }}
            >
              <Button
                onClick={() => {
                  setSidebarOpen(false);
                }}
                minimal
                icon="cross"
              ></Button>
            </div>
            {links}
          </Drawer>
          */}
          {/*
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              flexShrink: 0
            }}
          >
            <Button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              intent="primary"
              minimal
              icon="menu"
            ></Button>
            <VersionSwitcher packageName="ove" />
            <a
              href="https://github.com/TeselaGen/ove-electron#installation-instructions"
              style={{ marginTop: 5, marginLeft: 10 }}
            >
              This is a developer demo. Get the App?
            </a>{" "}
            <Tooltip
              content={isDarkMode ? "Light Theme" : "Dark Theme"}
              key="theme"
            >
              <Button
                data-test="tg-toggle-dark-mode"
                icon={isDarkMode ? "flash" : "moon"}
                intent={isDarkMode ? "warning" : undefined}
                minimal
                onClick={changeDarkMode}
              />
            </Tooltip>
          </div>
          */}

          <Route exact path="/" render={() => <Redirect to="/Editor" />} />
          <Route
            render={({ history }) => {
              return <EditorDemo history={history} />;
            }}
            path="/Editor"
          />
          <Route
            render={() => {
              return (
                <div>
                  <VersionHistoryView
                    onSave={() => {
                      window.alert("onSave triggered!");
                      // console.info("onSave triggered:", args);
                    }}
                    exitVersionHistoryView={() => {
                      window.alert("exit requested!");
                    }}
                    getSequenceAtVersion={versionId => {
                      // in a real version we'd go to server and get a real sequence based on the version id
                      // const seq = await api.getSeqAtVersion()
                      // return seq
                      if (versionId === 2) {
                        return {
                          sequence: "thomaswashere"
                        };
                      } else if (versionId === 3) {
                        return {
                          features: [{ start: 4, end: 6 }],
                          sequence:
                            "GGGAAAagagagtgagagagtagagagagaccacaccccccGGGAAAagagagtgagagagtagagagagaccacaccccccGGGAAAagagagtgagagagtagagagagaccacaccccccGGGAAAagagagtgagagagtagagagagaccacacccccc"
                        };
                      } else {
                        console.error("we shouldn't be here...");
                        return {
                          sequence: "taa"
                        };
                      }
                    }}
                    getVersionList={() => {
                      //fake talking to some api
                      return new Promise(resolve => {
                        setTimeout(() => {
                          resolve([
                            {
                              dateChanged: "12/30/2211",
                              editedBy: "Nara",
                              // revisionType: "Sequence Deletion",
                              versionId: 2
                            },
                            {
                              dateChanged: "8/30/2211",
                              editedBy: "Ralph",
                              // revisionType: "Feature Edit",
                              versionId: 3
                            }
                          ]);
                        }, 100);
                      });
                    }}
                  />
                </div>
              );
            }}
            path="/VersionHistoryView"
          />
          <Route
            render={() => {
              return <StandaloneDemo />;
            }}
            path="/Standalone"
          />
          <Route
            render={() => {
              return <StandaloneAlignmentDemo />;
            }}
            path="/StandaloneAlignment"
          />
          <Route
            render={({ history }) => {
              return <AlignmentDemo history={history} />;
            }}
            path="/Alignment"
          />
          <Route
            render={() => {
              return (
                <WrapSimpleDemo>
                  <CircularView editorName="DemoEditor" />
                </WrapSimpleDemo>
              );
            }}
            path="/CircularView"
          />
          <Route
            render={({ history }) => (
              <SimpleCircularOrLinearViewDemo history={history} />
            )}
            path="/SimpleCircularOrLinearView"
          />
          <Route
            render={() => {
              return (
                <WrapSimpleDemo>
                  <DigestTool editorName="DemoEditor" />
                </WrapSimpleDemo>
              );
            }}
            path="/DigestTool"
          />
          <Route
            render={() => {
              const enzyme = {
                name: "BsaI",
                site: "ggtctc",
                forwardRegex: "g{2}tctc",
                reverseRegex: "gagac{2}",
                topSnipOffset: 7,
                bottomSnipOffset: 11
              };
              return (
                <WrapSimpleDemo>
                  <EnzymeViewer
                    {...{
                      sequence: enzyme.site,
                      reverseSnipPosition: enzyme.bottomSnipOffset,
                      forwardSnipPosition: enzyme.topSnipOffset
                    }}
                  />
                </WrapSimpleDemo>
              );
            }}
            path="/EnzymeViewer"
          />
          <Route
            render={() => {
              return (
                <WrapSimpleDemo>
                  <RowView
                    dimensions={{ width: 800 }}
                    editorName="DemoEditor"
                  />
                </WrapSimpleDemo>
              );
            }}
            path="/RowView"
          />
          <Route
            render={() => {
              return (
                <WrapSimpleDemo>
                  <LinearView
                    withZoomLinearView={true}
                    editorName="DemoEditor"
                  />
                </WrapSimpleDemo>
              );
            }}
            path="/LinearView"
          />
        </div>
      </Router>
    </Provider>
  );
};

const WrapSimpleDemo = ({ children }) => {
  useMemo(() => {
    updateEditor(store, "DemoEditor", {
      readOnly: false,
      sequenceData: exampleSequenceData
    });
  }, []);
  return children;
};

// createRoot(document.querySelector("#demo")).render(<Demo />);
render(<Demo />, document.querySelector("#demo"));

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import AppDebug from "./AppDebug";

const dbg = document.getElementById("debug-calculation-ui");
const elm = document.getElementById("calculation-ui")!;
const appRoot = ReactDOM.createRoot(elm);

if (dbg && "true" == new URLSearchParams(window.location.search).get("debug")) {
  ReactDOM.createRoot(dbg).render(
    <AppDebug
      onChange={input => {
        //appRoot.unmount();
        for (let k in input)
          elm.dataset[k] = input[k];
      }}
    />
  )
}

appRoot.render(
  <React.StrictMode>
    <App container={elm} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "images/[hash]-[name].[ext]",
//             },
//           },
//         ],
//       },
//     ],
//   },
//   //...
// };
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

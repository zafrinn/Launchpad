import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./navigation";
import Startup from "./startup";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./landingPage/landingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages />
    {/* <Startup /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const pages = {
  landing: "landing",
  messages: "messages",
  applications: "applications",
  jobs: "jobs",
  account: "account",
  settings: "settings",
};

function Pages() {
  const [page, setPage] = useState(pages.landing);

  return (
    <div className="screen">
      <nav className="nav">
        <NavBar page={page} setPage={setPage} />
      </nav>
      <main className="content">
        {page === pages.landing && <LandingPage />}
        {page === pages.messages && <div />}
        {page === pages.applications && <div />}
        {page === pages.jobs && <div />}
        {page === pages.account && <div />}
        {page === pages.settings && <div />}
      </main>
    </div>
  );
}

import { useState, Suspense } from "react";
import { pages } from "./data/pages";
import "./index.css";

function App() {
  const [activePage, setActivePage] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const parameter = event.target.elements.parameter.value
      .trim()
      .toLowerCase();

    setError("");

    if (!parameter) {
      setError("PARAMETER EMPTY");
      return;
    }

    const page = pages[parameter];

    if (!page) {
      setError("PARAMETER NOT FOUND");
      return;
    }

    if (page.type === "external") {
      window.location.href = page.url;
      return;
    }

    setActivePage(page);
    event.target.reset();
  }

  function goBack() {
    setActivePage(null);
    setError("");
  }

  const ActiveComponent = activePage?.component;

  if (activePage?.type === "module" && ActiveComponent) {
    return (
      <Suspense fallback={<p className="loading">loading...</p>}>
        <ActiveComponent onBack={goBack} />
      </Suspense>
    );
  }

  return (
    <>
      <DefaultBackground />

      <main className="login-screen">
        {!activePage && (
          <>
            <img className="wired-logo" src="/wiredlogin.gif" alt="" />

            <h1>SIEL</h1>
            <p className="subtitle">[ system interface entry layer ]</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="parameter">Parameter:</label>

              <input
                id="parameter"
                name="parameter"
                type="text"
                placeholder="input"
                autoComplete="off"
              />

              <button type="submit">Access</button>
            </form>

            <p id="error">{error}</p>

            <p className="note">
              <b>SYSTEM:</b> awaiting valid parameter
            </p>
          </>
        )}

        {activePage?.type === "info" && ActiveComponent && (
          <section className="content-box">
            <button className="back-button" type="button" onClick={goBack}>
              x
            </button>

            {/* <h2>{activePage.title}</h2> */}

            <Suspense fallback={<p className="loading">loading...</p>}>
              <ActiveComponent />
            </Suspense>
          </section>
        )}
      </main>
    </>
  );
}

function DefaultBackground() {
  return (
    <>
      <div className="bg-darker" />
      <div className="bg-smoke" />
      <div className="wired-gang" />
      <div className="bg-overlay" />
      <div className="scanlines" />
    </>
  );
}

export default App;
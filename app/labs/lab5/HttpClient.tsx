"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HttpClient() {
  const [errorMessage, setErrorMessage] = useState("");
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const fetchWelcomeOnClick = async () => {
    try {
      const message = await client.fetchWelcomeMessage();
      setWelcomeOnClick(message);
      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const fetchWelcomeOnLoad = async () => {
    try {
      const welcome = await client.fetchWelcomeMessage();
      setWelcomeOnLoad(welcome);
      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);
  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <h4>Requesting on Click</h4>
      <button type="button" onClick={fetchWelcomeOnClick}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Fetch Welcome
      </button>
      <p>Response from server: <b>{welcomeOnClick}</b></p>
      <h4>Requesting on Load</h4>
      <p>
        Response from server: <b>{welcomeOnLoad}</b>
      </p>
      {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      <hr />
    </div>
  );
}

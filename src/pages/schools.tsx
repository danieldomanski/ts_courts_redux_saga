import React from "react";
import Button from "../components/Button";
import "../styles/Resources.css";

const Schools = () => {
  let items: {
    [key: string]: number | string | boolean | null;
  }[] = [
    {
      resource_uri:
        "https://www.courtlistener.com/api/rest/v3/courts/scotus/?format=api",
      id: "scotus",
      pacer_court_id: null,
      pacer_has_rss_feed: null,
      fjc_court_id: "",
      date_modified: "2014-10-31T01:59:15.952000Z",
      in_use: true,
      has_opinion_scraper: true,
      has_oral_argument_scraper: true,
      position: 1.0,
      citation_string: "SCOTUS",
      short_name: "Supreme Court",
      full_name: "Supreme Court of the United States",
      url: "http://supremecourt.gov/",
      start_date: "1789-09-24",
      end_date: null,
      jurisdiction: "F"
    }
  ];

  return (
    <div className="resources__container">
      <header className="resources__heading">
        <h1>School resources</h1>
        <Button>Pobierz dane</Button>
      </header>
      <div className="resources__item">
        {items.map(item => {
          const keys = Object.keys(item);
          return (
            <>
              <h2>{item["id"]}</h2>
              <ul>
                {keys.map(key => (
                  <li className="resources__row">
                    <p className="resources__row__key">{key}:</p>
                    <p className="resources__row__value">
                      {JSON.stringify(item[key])}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Schools;

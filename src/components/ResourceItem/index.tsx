import React, { useState } from "react";

type ResourceItemProps = {
  item: { [key: string]: any };
};

const ResourceItem: React.FC<ResourceItemProps> = ({ item }) => {
  const [isExpanded, set] = useState(false);
  const keys = Object.keys(item);

  return (
    <div className="resources__row" onClick={() => set(!isExpanded)}>
      <header className="resources__item__header">
        <h2>{`${item["id"]}`}</h2>
        <button className="resources__item__button">
          {isExpanded ? "∧" : "∨"}
        </button>
      </header>

      <ul
        className="resources__item__details"
        style={{ display: isExpanded ? "block" : "none" }}
      >
        {keys.map(key => (
          <li>
            <span className="resources__item__key">{key}:</span>
            <span>{JSON.stringify(item[key])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceItem;

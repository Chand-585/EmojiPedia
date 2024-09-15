import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(single) {
  return (
    <Entry
      key={single.id}
      name={single.name}
      emoji={single.emoji}
      meaning={single.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

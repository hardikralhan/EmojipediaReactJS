import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function createList(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createList)}</dl>
    </div>
  );
}
export default App;

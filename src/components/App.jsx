import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojipedia.map((emojipedia) => (
          <Entry
            key={emojipedia.id}
            name={emojipedia.name}
            emoji={emojipedia.emoji}
            meaning={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}
export default App;

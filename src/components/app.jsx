import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";
function createEntry(Term){
    return(
        <Entry
        key={Term.id}
    emoji={Term.emoji}
    name={Term.name}
    desc={Term.meaning}
    />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
         
        
        
        
      </dl>
    </div>
  );
}

export default App;
// if we dont use 
// <Entry
//          emoji="💪"
//          name= "BICEPS"
//          desc= "You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym." /> 
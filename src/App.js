import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  [My Twitter](https://twitter.com/0Rohandas)

  `)

  const handleChange = (e) => {
    setText(e.target.value);
  };
  
  // const placeholder = 

  return (
    <div className="container-fluid">
      <h1 className="text-white text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-6" variant="light">
          <h1 className="text-center text-white">Editor</h1>
          <div>
            <textarea
           
              className="form-control p-7"
              rows="69"
              value={text}
              id="editor"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w74 col-6 d-block p-2">
          <h1 className="text-center text-white">Preview</h1>
          <div id="preview">
            <ReactMarkdown children={text}></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );


  
}
  
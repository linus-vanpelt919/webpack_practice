import ReactDom from "react-dom";
import * as React from "react";


const App = (props) => {
  return (
    <div style={{color: 'red'}}>
      Hello, react app
    </div>
  );
};

const reactRoot = document.querySelector('#root');
console.log(reactRoot);
if(reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No component found');
}

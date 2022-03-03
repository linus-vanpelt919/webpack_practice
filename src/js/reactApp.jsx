import ReactDom from "react-dom";
import * as React from "react";
import Alert from './Alert.tsx';


const App = (props) => {
  return (
    <div style={{color: 'red'}}>
      Hello, react app
      <Alert message="Success" />
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

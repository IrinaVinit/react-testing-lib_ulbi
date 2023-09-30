import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(()=> {
setTimeout(()=> {
  setData({});
}, 100)
  },[])
  return (
    <div>
      {data&& <div>data</div>}
     <h1>Hello World</h1>
     <button>Click me</button>
     <input type='text' placeholder="input value..."/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [toogle, setToogle] = useState(false);

const onClick = () => {
  setToogle(prev=>!prev);
}


  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);


  return (
    <div>
      {toogle&& <div data-testid='toogle-el'>toogle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testid='toogle-btn' onClick={onClick}>Click me</button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;

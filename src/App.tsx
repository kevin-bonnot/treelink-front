import {useEffect} from "react";


const App = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/profile').then(res => {
      res.json().then(json => {
        console.log(json);
      });
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return <h1>Coucou</h1>;
};

export default App;
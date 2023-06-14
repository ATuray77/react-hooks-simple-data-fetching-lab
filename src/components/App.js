// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      //.then(data => console.log(data.message))
      .then((data) => {
        setMessage(data.message)
        setIsLoaded(true);
      })
    
    
  }, []);

  if (!isLoaded) {
     return <p>Loading...</p>;
  }


  return (
    <div>
      <img src={message} alt="A Random Dog" />
    </div>
  );
}

export default App;

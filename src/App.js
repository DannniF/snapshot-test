
import './App.css';
import Display from './GitHubCard';
import { useState, useEffect } from 'react';


function App() {
  const [user, setUser] = useState(null)

  const display = user && <Display user={user} />

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/dannnif`
      const response = await fetch(url)
      const data = await response.json()
      setUser(data)
    }
  
    fetchData()
  }, [])

  return (
    <div className="App">
      <h2>Test</h2>
      {display}
    </div>
  );
}

export default App;

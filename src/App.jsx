import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState('');

    const changeName = () => {
        if (newName.trim() !== '') {
            setName(newName);
            setNewName('');
        }
    };

    return (
        <div className="App">
            <h2>Teacher Name: {name}</h2>
            <ul>
               <li onClick={() => setName("Data")}>Data</li>
               <li onClick={() => setName("Reyes")}>Reyes</li>
                <li onClick={() => setName("Yolanda")}>Yolanda</li>
            </ul>
            <form onSubmit={(e) => { e.preventDefault(); changeName(); }}>
                <input 
                    type="text" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    placeholder="Add a name" 
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default App;
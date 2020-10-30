import React from 'react';
import './App.css';
import { Panel } from './Panel.js'


function App() {
    return (
        <div id="app" className="center" style={{ "background-image": "url(./background.jpeg)" }}>
            <Panel></Panel>
        </div>
    );
}

export default App;

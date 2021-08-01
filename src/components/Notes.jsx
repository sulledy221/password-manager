import React, { useState } from 'react';
import "./Notes.css";


export default function Notes() {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [security, setSecurity] = useState('');
    const [secureAns, setSecureAns] = useState('');
    const [addItems, setAddItems] = useState([]);
    const noted = items => setAddItems([...addItems, items]);
    const renderNotes = addItems.map(item => <li key={item.website}>{JSON.stringify(item)}</li>)
    return (
      
    <div className="notes-container">
    <div className="notes">
      <label htmlFor="website">Notes</label>
      <input
        type="text"
        name="website"
        className="notes-input"
        placeholder="Website Name"
        onChange={e => setWebsite(e.target.value)}
        value={website}
      />
      </div>
    <div className="notes">
      <label htmlFor="username"></label>
      <input
        type="text"
        name="username"
        className="notes-input"
        placeholder="Username or Email used"
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      </div>
    <div className="notes">
      <label htmlFor="pass"></label>
      <input
        type="text"
        name="pass"
        className="notes-input"
        placeholder="Password used"
        onChange={e => setPass(e.target.value)}
        value={pass}
      />
      </div>
    <div className="notes">
      <label htmlFor="security"></label>
      <input
        type="text"
        name="security"
        className="notes-input"
        placeholder="Was there a security question? Put here"
        onChange={e => setSecurity(e.target.value)}
        value={security}
      />
      </div>
    <div className="notes">
      <label htmlFor="secureAns"></label>
      <input
        type="text"
        name="secureAns"
        className="notes-input"
        placeholder="Security question answer"
        onChange={e => setSecureAns(e.target.value)}
        value={secureAns}
      />
      </div>
      <button onClick={() => noted({website, username, pass, security, secureAns})}>Add Note</button>
      <ul>{renderNotes}</ul>
</div>
    )
}
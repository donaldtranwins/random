import React from 'react';
import { Link } from 'react-router';

export default (props) => (
    <ul className="nav navtabs">
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
            <Link to="/new-todo" className="nav-link">Create New To Do Item</Link>
        </li>
    </ul>
);
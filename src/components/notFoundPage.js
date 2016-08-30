import React from 'react';
import { Link, IndexLink } from 'react-router';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <p>nothing to see here</p>
            <p><Link to="/">back to home page</Link></p>
        </div>
    );
};

export default NotFoundPage;

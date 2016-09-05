import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onDelete}) =>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {authors.map((author, index) =>
                <AuthorListRow
                key={index}
                author={author}
                onDelete={onDelete}/>
            )}
            </tbody>
        </table>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default AuthorList;
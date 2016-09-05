import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';

const AuthorListRow = ({author, onDelete}) => {

    return (
        <tr>
            <td>{author.id}</td>
            <td>
                <Link to={'/author/' + author.id}>{author.firstName} {author.lastName}</Link>
            </td>
            <td>
                <input
                    id={author.id}
                    type="submit"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={onDelete}/>
            </td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default AuthorListRow;
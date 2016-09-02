import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

const CourseListRow = ({course, onDelete}) => {

    return (
        <tr>
            <td>
                <a href={course.watchHref} target="_blank">Watch</a>
            </td>
            <td>
                <Link to={'/course/' + course.id}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td>
                <input
                type="submit"
                value="Delete"
                className="btn btn-danger"
                onClick={onDelete}/>
            </td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default CourseListRow;
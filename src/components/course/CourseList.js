import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onDelete, onSortChange}) =>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Link</th>
                    <th
                        id="title"
                        onClick={onSortChange}>Title</th>
                    <th
                        id="authorId"
                        onClick={onSortChange}>Author</th>
                    <th
                        id="category"
                        onClick={onSortChange}>Category</th>
                    <th
                        id="length"
                        onClick={onSortChange}>Length</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {courses.map((course, index) =>
                <CourseListRow
                key={index}
                course={course}
                onDelete={onDelete}/>
            )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired
};

export default CourseList;
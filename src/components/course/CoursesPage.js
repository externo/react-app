import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.sortAsc = true;
        this.sortCol = "title";
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    getSortAsc() {
        return this.sortAsc;
    }

    getSortCol() {
        return this.sortCol;
    }

    setSortAsc() {
        this.sortAsc = !this.sortAsc;
    }

    setSortCol(col) {
        this.sortCol = col;
    }

    deleteCourse(event) {
        event.preventDefault();
        this.props.actions.deleteCourse(event.target.id);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    onSortChange(event) {
        let currSortCol = this.getSortCol();
        let sortCol = event.target.id;

        if (currSortCol!==sortCol && !this.getSortAsc()){
            this.setSortAsc();
        }

        this.setSortCol(event.target.id);

        if (this.getSortAsc()) {
            this.setState({
                courses: this.props.courses.sort(function (a, b) {
                    return a[sortCol] > b[sortCol];
                })
            });
            this.setSortAsc();
        } else {
            this.setState({
                courses: this.props.courses.sort(function (a, b) {
                    return a[sortCol] < b[sortCol];
                })
            });
            this.setSortAsc();
        }
    }

    render() {
        const {courses} = this.props;

        if (courses.length > 0) {
            return (
                <div>
                    <h3>Courses</h3>
                    <input
                        type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage}/>
                    <CourseList
                        onDelete={this.deleteCourse}
                        onSortChange={this.onSortChange}
                        courses={courses}/>
                </div>
            );
        }
        return (
            <div>
                <h3>Courses</h3>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    if (state.course) {
        return {
            course: Object.assign({}, state.course),
            courses: state.courses
        };
    }

    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

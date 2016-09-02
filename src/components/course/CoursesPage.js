import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    updateCoursesState() {

    }

    deleteCourse(event) {
        event.preventDefault();
        this.props.actions.deleteCourse(this.props.course)
            .catch(error => toastr.error('courses page:\n ' + error));
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render(){
        const {courses} = this.props;

        if (courses.length > 0){
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
                        courses={courses}
                        onChange={this.updateCoursesState}/>
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

function mapStateToProps(state, ownProps){
    //console.log('state: ' + state);
    //console.log('ownprops: ' + ownProps);
    if (state.course){
        return {
            course: Object.assign({}, state.course),
            courses: state.courses
        };
    }

    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

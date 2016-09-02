import
* as types
from
'./actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions.js';
import toastr from 'toastr';

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(courseId) {
    console.log('del scc');
    return {type: types.DELETE_COURSE_SUCCESS, courseId};
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function deleteCourse(courseId) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        console.log('del action');
        return courseApi.deleteCourse(courseId)
            .catch(err => toastr.info('courseApi: ' + err))
            .then(courseId => dispatch(deleteCourseSuccess(courseId)))
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}

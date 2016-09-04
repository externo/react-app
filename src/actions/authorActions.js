import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions.js';

export function loadAuthorsSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthor(author){
    return {type: types.CREATE_AUTHOR, author};
}

export function deleteAuthor(authorId){
    return {type: types.DELETE_AUTHOR, authorId};
}

export function loadAuthors(){
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

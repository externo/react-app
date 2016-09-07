import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import AuthorTable from './AuthorTable';

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.sortAsc = true;
        this.sortCol = "id";
        this.onClickDelete = this.onClickDelete.bind(this);
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

    onClickDelete(event) {
        event.preventDefault();
        this.props.actions.deleteAuthor(event.target.id);
    }

    redirectToAddAuthorPage() {
        browserHistory.push('/author');
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
                authors: this.props.authors.sort(function (a, b) {
                    return a[sortCol] > b[sortCol];
                })
            });
            this.setSortAsc();
        } else {
            this.setState({
                authors: this.props.authors.sort(function (a, b) {
                    return a[sortCol] < b[sortCol];
                })
            });
            this.setSortAsc();
        }
    }

    render() {
        const authors = this.props.authors;

        return (
            <div>
                <h3>Authors</h3>
                <input
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.redirectToAddAuthorPage}/>
                <AuthorList
                    onDelete={this.onClickDelete}
                    authors={authors}/>
                <AuthorTable
                    onDelete={this.onClickDelete}
                    onSortChange={this.onSortChange}
                    authors={authors}/>
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createAuthor: author => dispatch(authorActions.createAuthor(author)),
        //deleteAuthor: author => dispatch(authorActions.deleteAuthor(author))
        actions: bindActionCreators(authorActions, dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(AuthorsPage);

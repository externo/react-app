import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authorActions from '../../actions/authorActions';

class AuthorsPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            author: {firstName: ''}
        };

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onFirstNameChange(event){
        const author = this.state.author;
        author.firstName = event.target.value;
        this.setState({author: author});
    }

    onClickSave(){
        this.props.dispatch(authorActions.createAuthor(this.state.author));
    }

    onClickDelete(event){
        this.props.dispatch(authorActions.deleteAuthor(event.target.id));
    }

    authorRow(author, index){
        return <div key={index}>{author.firstName}</div>;
    }

    render(){
        return (
            <div>
                <h3>Authors</h3>
                {this.props.authors.map(
                    (author, index) =>
                        <div key={index}>
                            {author.firstName}
                            <input
                                id={author.id}
                                type="submit"
                                value="Del"
                                className="btn btn-danger"
                                onClick={this.onClickDelete}/>
                        </div>)}
                <h4>Add author</h4>
                <input
                    type="text"
                    onChange={this.onFirstNameChange}
                    value={this.state.author.firstName}/>
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary"
                    onClick={this.onClickSave}/>
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        authors: state.authors
    }
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(AuthorsPage);

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';

export class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            author: Object.assign({}, this.props.author),
            errors: {},
            saving: false,
            dirty: false
        };

        this.updateAuthorState = this.updateAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount () {
        this.context.router.setRouteLeaveHook(this.props.route, () => {
            if (this.state.dirty && !confirm('Leave without saving?')) {
                return false;
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.author) {
            if (this.props.author.id != nextProps.author.id) {
                this.setState({author: Object.assign({}, nextProps.author)});
            }
        }
    }

    updateAuthorState(event) {
        this.setState({dirty: true});
        const field = event.target.name;
        let author = this.state.author;
        author[field] = event.target.value;
        return this.setState({author: author});
    }

    authorFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if (this.state.author.firstName.length < 1) {
            errors.firstName = 'First name must be at least 1 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveAuthor(event) {
        event.preventDefault();
        if (!this.authorFormIsValid()){
            return;
        }
        this.setState({saving: true});
        this.props.actions.saveAuthor(this.state.author)
            .then(() => {
                this.setState({saving: false, dirty: false});
                this.redirect();
            })
            .catch(error => toastr.error(error));
    }

    redirect(){
        this.context.router.push('/authors');
    }

    cancel(event){
        event.preventDefault();
        this.context.router.push('/authors');
    }

    render() {
        return (
            <AuthorForm
                onChange={this.updateAuthorState}
                onSave={this.saveAuthor}
                onCancel={this.cancel}
                dirty={this.state.dirty}
                author={this.state.author}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
    router: PropTypes.object
};

function getAuthorById(authors, id){
    const author = authors.filter(author => author.id == id);
    if (author) return author[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id;

    let author = {
        id: '',
        firstName: '',
        lastName: ''
    };

    if (authorId && state.authors.length > 0){
        author = getAuthorById(state.authors, authorId);
    }

    return {
        author: author
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);

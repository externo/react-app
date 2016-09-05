import React from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onSave, onChange, onCancel, dirty, saving, errors}) => {
    return (
        <form>
            <h1>Manage Author</h1>
            <TextInput
                name="firstName"
                label="First name"
                value={author.firstName}
                onChange={onChange}
                error={errors.firstName}/>

            <TextInput
                name="lastName"
                label="Last name"
                value={author.lastName}
                onChange={onChange}
                error={errors.lastName}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>

            <input
                type="submit"
                disabled={dirty}
                value="Cancel"
                className="btn btn-default"
                onClick={onCancel}/>
        </form>
    );
};

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default AuthorForm;

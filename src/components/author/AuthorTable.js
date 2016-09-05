import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Table, Column, Cell} from 'fixed-data-table';

const AuthorTable = ({authors, onDelete}) => {
    const rowHight = 50;

    const _onSortChange = function () {
        console.log('sort');
        let colKey = "id";
        authors = authors.sort(function (a, b) {
            return a[colKey] > b[colKey];
        });
    };

    return (
        <Table
        width={400}
        height={(authors.length + 1) * rowHight}
        rowsCount={authors.length}
        rowHeight={rowHight}
        headerHeight={rowHight}>
            <Column
            width={100}
            header={
                <Cell
                    onClick={_onSortChange}>ID</Cell>
            }
            cell={props => (
                <Cell {...props}>
                    {authors[props.rowIndex].id}
                </Cell>
            )}/>
            <Column
            width={200}
            header={<Cell>Name</Cell>}
            cell={props => (
                <Cell {...props}>
                    <Link to={'/author/' + authors[props.rowIndex].id}>
                            {authors[props.rowIndex].firstName} {authors[props.rowIndex].lastName}
                    </Link>
                </Cell>
            )}/>
            <Column
            width={100}
            header={<Cell>Action</Cell>}
            cell={props => (
                <Cell {...props}>
                    <input
                    id={authors[props.rowIndex].id}
                    type="submit"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={onDelete}/>
                </Cell>
            )}/>
        </Table>
    );
};

AuthorTable.propTypes = {
    authors: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default AuthorTable;
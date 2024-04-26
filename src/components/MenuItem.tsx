import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    jump:PropTypes.string.isRequired
};

function MenuItem({title, jump}:any) {
    return (
        <div>
            <Link to={jump}>{title}</Link>
        </div>
    );
}

export default MenuItem;
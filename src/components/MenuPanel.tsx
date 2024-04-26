import React, {useState} from 'react';
import PropTypes from 'prop-types';

MenuPanel.propTypes = {
    title: PropTypes.string.isRequired,
    collapsed:PropTypes.bool.isRequired,
    children: PropTypes.node
};



function MenuPanel({title, collapsed,children} :any) {
    const [intCollapsed, setIntCollapsed] = useState(collapsed);
    return (
        <div>
            <div onClick={() => setIntCollapsed(!intCollapsed)}>{title}</div>
            { !intCollapsed &&
            <div>
                {children}
            </div>
            }
        </div>
    );
}

export default MenuPanel;
import React from 'react';

// children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border : '1px solid', height : '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
import React from 'react';
import moment from "moment"
function DateStrip(props) {
    return (
        <time> {
            props.relative ? moment(props.created_at).fromNow() : moment(props.created_at).format('MMMM Do YYYY, h:mm')
        } </time>
    );
}

export default DateStrip;

import React from 'react';

const Task = (props) => {
    
    return (
        <div class="card">
            <p class="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p class="description">{props.description}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Task;


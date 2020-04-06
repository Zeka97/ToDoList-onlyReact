import React from 'react';

import './lista.styles.scss';

const Lista = ({ messages, deleteTodo, completedTodo, completed}) => (
    <div className="body">
        <div className="todo">
        {
            messages.map((list,index) =>(
                <div key={index} className="lista">
                    <span className={completed[index] === true ? 'textline': 'recenica'}>{list}</span>
                    <div className="editovanje" onClick="">
                        <span onClick={() => completedTodo(index)} 
                        className='finished'>&#10004;</span>

                        <span className="remove" onClick={() => deleteTodo(index)}>&#10005;</span>
                        
                    </div>
                
                    
                    </div>
            ))
        }
        </div>
    </div>
);

export default Lista;
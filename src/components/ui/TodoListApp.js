import React from 'react';
import TodoList from './TodoList';
import StateProvider from '../wrappers/StateProvider';
import KeyStrokeHandler from '../wrappers/KeyStrokeHandler';
function Pikeshorttest(){
    return(
        <StateProvider>
        <KeyStrokeHandler>
            <TodoList/>
        </KeyStrokeHandler>
    </StateProvider>
    )
}

export default Pikeshorttest;
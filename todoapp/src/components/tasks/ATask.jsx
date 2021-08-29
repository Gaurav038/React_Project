import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import moment from 'moment'
import {removeTask, toggleChecked} from '../../actions/taskAction'
import {connect} from 'react-redux'
import Check from './Check';

const ATask = ({task, removeTask, toggleChecked}) => {
    const HandleRemove = (task)=>{
        removeTask(task);
    }
    const HandleCheck = (task)=>{
        toggleChecked(task);
    }

    return (
        <>
            <tr>
                <th scope="row">{task.task}</th>
                <td>{moment(task.date.toDate()).calendar()}</td>
                <td> <Check click={()=>HandleCheck(task)} checked={task.checked} />  </td>
                <td><span className="text-danger" style={{cursor:"pointer"}} onClick={()=> { HandleRemove(task) }} >{<DeleteForeverIcon />}</span></td>
            </tr>
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return{  
        removeTask : (task) => {dispatch(removeTask(task))},
        toggleChecked : (task) => {dispatch(toggleChecked(task))}
    }
}

export default connect(null, mapDispatchToProps)(ATask);
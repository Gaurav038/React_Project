import {toast} from 'react-toastify'

const taskReducer = (state = {}, action)=>{
    switch (action.type) {
        case "ADD_TASK":{
            toast.success("Added a Task")
            return state;
        }
        case "ADD_TASK_ERR":{
            toast.error("Error in Add")
            return state;
        } 
        case "REMOVE_TASK":{
            toast.warn("Removed a Task")
            return state;
        }
        case "REMOVE_TASK_ERR":{
            toast.error("Error in REmove Task")
            return state;
        } 
        case "Toggle_Checked":{
            toast.info("Task Status Changed")
            return state;
        }
        case "Toggle_Checked_ERR":{
            toast.error("Error Task Status Changed")
            return state;
        } 
        default:
            return state;
    }
}

export default taskReducer;
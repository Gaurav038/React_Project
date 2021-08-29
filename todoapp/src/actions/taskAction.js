export const addTask = (task) =>{
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const autherId = getState().firebase.auth.uid
        firestore
            .collection("tasks")
            .add({
                ...task,
                autherId : autherId,
                date : new Date()
            })
            .then(()=>{
                dispatch({
                    type: "ADD_TASK",
                    task
                })
            })
            .catch((err)=>{
                dispatch({
                    type: "ADD_TASK_ERR",
                    err
                })
            })
    }
}

export const removeTask = (task) =>{
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("tasks")
            .doc(task.id)
            .delete()
            .then(()=>{
                dispatch({
                    type: "REMOVE_TASK",
                })
            })
            .catch((err)=>{
                dispatch({
                    type: "REMOVE_TASK_ERR",
                    err
                })
            })
    }
}

export const toggleChecked = (task) =>{
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("tasks")
            .doc(task.id)
            .set(
                {
                    ...task,
                    checked: !task.checked
                },
                {merge:true}
            )
            .then(()=>{
                dispatch({
                    type: "Toggle_Checked",
                    task
                })
            }) 
            .catch((err)=>{
                dispatch({
                    type: "Toggle_Checked_ERR",
                    err
                })
            })
    }
}



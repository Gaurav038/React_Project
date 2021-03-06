import React from 'react'
import ATask from './ATask'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Tasks = ({tasks}) => {
    return (
        <>
            <table className="table table-dark table-striped container" style={{marginTop: "30px"}}>
                <thead>
                    <tr className="text-info">
                        <th scope="col">Tasks</th>
                        <th scope="col">Added on</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {tasks && tasks.map((task)=>
                       <ATask task={task} key={task.id} />
                   )}
                </tbody>
            </table>
        </> 
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    const tasks = state.firestore.ordered.tasks;
    return{
        tasks : tasks,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps)=>[{
        collection: "tasks",
        where: ["autherId", "==", ownProps.uid],
        orderBy: ["date", "desc"],
      },]
    )
)(Tasks);
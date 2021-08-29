import React, { Component } from 'react'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { addTask } from '../../actions/taskAction';
import { connect } from "react-redux"

class AddTask extends Component {

    state = {
        task: "",
        checked: "false",
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTask(this.state)
        document.getElementById("addTaskForm").reset();
        console.log(this.state);
    }

    render() {
        return (
            <>
            <form id="addTaskForm" className="container" style={{ marginTop: "30px" }} onSubmit={this.handleSubmit} >
                <legend> </legend>
                <div className="form-group">
                    <label htmlFor="task" >Add a Task</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="task" 
                        onChange={this.handleChange}
                        placeholder="enter the task"
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}><AddToPhotosIcon /> ADD</button>
            </form>
        </>
        )
    }
}

const mapDispachToProp = (dispatch) => {
    return{
        addTask : (task)=> 
        {
            dispatch(addTask(task))
        }
    }
}

export default connect(null, mapDispachToProp)(AddTask);
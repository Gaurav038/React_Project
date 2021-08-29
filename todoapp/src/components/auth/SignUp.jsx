import React, {Component} from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signUp } from "../../actions/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state)
    }

    render() {
        const {uid} = this.props
        if(uid) return <Redirect exact to="/" />
        return (
            <>
            <form className="container" style={{ marginTop: "30px" }} onSubmit={this.handleSubmit} >
                <legend> <h4>SIGN UP</h4> </legend>
                <div className="form-group">
                    <label htmlFor="email" >Email address</label>
                    <input
                        type="email" 
                        className="form-control"
                        id="email" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary"> <ExitToAppIcon /> Sign UP</button>
            </form>
        </>
        );
    }
}

const mapStateToProps = (state) =>{
    const uId = state.firebase.auth.uid
    return{
        uid: uId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        signUp : (creds)=> dispatch(signUp(creds))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
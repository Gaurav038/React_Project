import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const Check = ({checked, click}) =>{
    if(checked===true){
        return(
            <span className="text-success" style={{cursor:"pointer"}} onClick={click}>{<AssignmentTurnedInIcon />} </span>
        )
    }
    else{
        return(
            <span className="text-white" style={{cursor:"pointer"}} onClick={click}>{<AssignmentTurnedInIcon />} </span>
        )
    }
}

export default Check;
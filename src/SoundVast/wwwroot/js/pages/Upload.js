import React from "react";
import { Link } from "react-router";

export default class Upload extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div> 
                <h1>Upload Page ({this.props.params.id})</h1>
                <Link to="/">Audio</Link>
            </div>
        );
    }
}
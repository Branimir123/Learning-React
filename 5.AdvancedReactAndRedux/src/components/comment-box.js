import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component{
    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="row comment-box">
                <label className="col-md-12">Add a comment</label>
                <textarea
                    className="col-md-12"
                    value={this.state.comment} 
                    onChange={this.handleChange.bind(this)}
                />
                <button className="btn btn-primary">Submit comment</button>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);
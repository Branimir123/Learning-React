import React from 'react';
import { Component } from 'react';

export default class CommentBox extends Component{
    render(){
        return(
            <div className="comment-box">
                <textarea />
                <button className="btn btn-primary">Submit comment</button>
            </div>
        );
    }
}
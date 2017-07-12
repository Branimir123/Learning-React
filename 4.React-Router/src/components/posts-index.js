import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                Posts Index Page
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
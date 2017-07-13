import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
 
class PostsShow extends Component{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost();
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(this.props.post.id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        
        if(!post){
            return <div> Loading... </div>;
        }

        return(
            <div>
                <Link to="/">Back to list</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { getPost, deletePost })(PostsShow);
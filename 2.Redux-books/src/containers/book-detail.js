import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return <div className="item-details">Select a book to get started.</div>;
        }

        return(
            <div className="item-details">
                <h3>Details for: </h3>
                <h3>Title: {this.props.book.title}</h3>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
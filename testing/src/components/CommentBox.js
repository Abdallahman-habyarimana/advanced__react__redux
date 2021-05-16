import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import requireAuth from './requireAuth';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <h4>Add a Comment</h4>
                    <textarea onChange={ this.handleChange } value={ this.state.comment } />
                    <div>
                        <button> Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComment}>Fetch comments</button>
            </div>
            
         );
    }
}


 
export default connect(null, actions)(requireAuth(CommentBox));
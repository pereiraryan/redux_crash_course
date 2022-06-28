import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

 class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
    onSubmit(e) {
        e.preventDefault()
        const post ={
            title: this.state.title,
            body: this.state.body
        }

        //Call action
        this.props.createPost(post);
    }

  render() {
    return (
        <>
      <div>Addpost</div>
      <form onSubmit={this.onSubmit}>
        <div>
            <label>
                title
            </label>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
        </div>
        <div>
            <label>
                body
            </label>
            <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
        </div>
        <br />
        <button type="submit"> submit</button>
        </form>
      </>
      
    )
  }
}
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
  }
export default connect(null,{ createPost})(Postform)

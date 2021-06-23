import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'

class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const add = {
            title: this.state.title,
            body: this.state.body
        }
        
        this.props.createPost(add)

    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type= 'text' name='title' onChange={this.onChange} placeholder='Add title' value={this.state.title}/><br />
                <input type= 'text' name='body' onChange={this.onChange} placeholder='Add body' value={this.state.body}/><br />
                <button>Add</button>
            </form>
        )
    }
}
AddPost.propTypes = {
    createPost: PropTypes.func.isRequired   
}

const mapDispatchToProps = {
    createPost
}


export default connect(null, mapDispatchToProps)(AddPost)

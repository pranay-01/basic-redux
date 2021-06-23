import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Modal from 'react-modal'
//import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/postActions'


class Posts extends Component {
    constructor(props) {
         super(props)
         this.state = {
            openModal: false
        }
        //this.doAction = this.doAction.bind(this)
        //this.closeModal= this.closeModal.bind(this)
    }
    componentDidMount(){
       this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {  
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
        //console.log(this.props.posts)
    }
    doAction= () => {
        this.setState({openModal: true})
    }
    closeModal=()=> {
        this.setState({openModal : false})
    }
    modStyle = {
        content: {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
          }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key= {post.id}>
                 <h3>{post.title} <button onClick= {this.doAction}>X</button></h3>
            </div>
        ))
        return (
            <div>
                <h1>Hey There!</h1>
                {postItems}
            </div>
        )
    }
}
 
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapDispatchToProps = {
    fetchPosts
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
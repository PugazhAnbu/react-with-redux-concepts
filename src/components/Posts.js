import React, { useEffect } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import './posts.css'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../redux'
function Posts(props) {


    // const [posts, setPosts] = useState([])

    //  useEffect(()=>{
    //      axios
    //          .get('https://jsonplaceholder.typicode.com/posts')
    //          .then((res) => setPosts(res.data))
    //          .catch((err) => console.log(err))
    //  })

    useEffect(() => {
        props.fetchPosts()
    }, [])


    const displayPostsIncardLayout = (props) => {
        return (
            <>
                <h1 className='heading'>Posts</h1>
                {/* <Button className='float-end'><Link to='/'>Go to Home</Link></Button> */}
                {
                    props.posts.map(post => {
                        return (
                            <Card className='post' border="dark" bg='dark' text='light' key={post.id}>
                                <Card.Header>
                                    <small className='text-muted'>User {post.userId}</small>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title><Link to={`/posts/${post.id}`}>{post.title}</Link></Card.Title>
                                    <Card.Text>
                                        {post.body}
                                    </Card.Text>
                                    <Button variant="primary" className='post-buttons'>Like</Button>
                                    <Button variant="primary" className='post-buttons'>Comments</Button>

                                </Card.Body>
                                <Card.Footer>
                                    <small className='text-muted' > Uploaded {Math.floor(Math.random() * 60)}</small>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }

            </>
        )
    }
    return (
        !props.loading ? (!props.error ? displayPostsIncardLayout(props) : (<h1>{props.error}</h1>)) : (<Spinner animation="border" />)
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        error: state.posts.error,
        loading: state.posts.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)


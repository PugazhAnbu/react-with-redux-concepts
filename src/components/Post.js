import React, { useEffect } from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';

import { useParams } from 'react-router-dom'

import { fetchPost } from '../redux';
import { connect } from 'react-redux';


function Post(props) {



    const { id } = useParams()

    useEffect(() => {
        props.fetchPost()
    }, [id])
    const displayPostLayout = (props) => {
        return (
            <>
                <h1>Post No: {props.post.id}</h1>

                {/* Object.keys(props.post).length ? ( */}

                <Card className='post' border="dark" bg='dark' text='light' key={props.post.id}>
                    <Card.Header>
                        <small className='text-muted'>User {props.post.userId}</small>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.post.title}</Card.Title>
                        <Card.Text>
                            {props.post.body}
                        </Card.Text>
                        <Button variant="primary" className='post-buttons'>Like</Button>
                        <Button variant="primary" className='post-buttons'>Comments</Button>

                    </Card.Body>
                    <Card.Footer>
                        <small className='text-muted' > Uploaded {Math.floor(Math.random() * 60)}</small>
                    </Card.Footer>
                </Card>


            </>
        )
    }

    return (
        !props.loading ? (!props.error ? displayPostLayout(props) : (<h1>{props.error}</h1>)) : (<Spinner animation="border" />)
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        error: state.post.error,
        loading: state.post.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)









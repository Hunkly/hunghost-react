import React from 'react';
import StyledPublicationComments from './PostComments.styled';
import PostCommentItem from './PostCommentItem';
import IComment from '../../../../../shared/models/Comment';
import NewComment from "./NewComment";

interface IComments {
    userID: number,
    postID: number,
    comments: IComment[] | null
}

export default function PublicationComments({userID, postID, comments}: IComments){
    console.log('comments', comments);
    if(comments){
        return (
            <StyledPublicationComments>
                <div className='post-comments__title'>Comments:</div>
                { comments.map((comment: IComment) => {
                    return <PostCommentItem comment={comment} key={comment.id}/>
                }) }
                <NewComment postID={postID} userID={userID}/>
            </StyledPublicationComments>
        )
    } else {
        return (
            <StyledPublicationComments>
                none
            </StyledPublicationComments>
        )
    }

}
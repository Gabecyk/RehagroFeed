import './Input.css';
import { useState } from 'react';
import { ButtonFeed } from '../ButtonFeed/ButtonFeed';

export function Input() {
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        setComments([...comments, newCommentText])
        setNewCommentText('');
        
        event.preventDefault()
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');

        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <form onSubmit={handleCreateNewComment} className='inputForm'>
            <strong>Deixe seu feedback</strong>

            <div className='inputContainer'>
                <textarea 
                    name='comment'
                    placeholder='Deixe seu comentário:'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                 />

                <ButtonFeed />
            </div>
        </form>
    );
}
        
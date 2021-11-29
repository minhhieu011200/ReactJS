import React from 'react';
import '../css/comment.css'

function Comment(props) {
    return (
        <div className="comment">
            <form>
                <div class="form-group m-3 pb-3">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment" placeholder="Describe yourself here..."></textarea>
                </div>
                <input type="submit" className="ml-3" />
            </form>
        </div>
    );
}

export default Comment;
import React, {Component} from 'react';
import {Comment} from '../Comment/Comment';

export class Task extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        }
    }

    addComment() {
        const text = this.state.commentText;
        if (text) {
            this.setState({commentText: ''});
            this.props.addComment(text);
        } else {
            alert('Zadejte prosím komentář.');
        }
    }

    commentChanged(e) {
        this.setState({commentText: e.target.value});
    }

    render() {
        const {task, comments, updateTaskResolved} = this.props;
        return (
            <div className="bg-white rounded shadow p-2 p-sm-3 p-md-5">
                <div className="form-group form-check h5 mb-4 mb-sm-5">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={task.resolved} onChange={updateTaskResolved}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        {task.name}
                        <span
                            className="badge badge-primary badge-pill">{formatDate(task.dueDate)}</span> <img
                            src={task.assignee.profilePicture} className="rounded-circle" style={{width: "1.3rem"}} alt="..."/>
                        <span
                            className="badge badge-secondary badge-pill">{task.assignee.nickname}</span></label>
                </div>
                {comments.map(Comment)}
                <div className="mt-4 bg-light shadow-sm p-3 p-sm-4">
                    <form action="">
                        <div className="form-group flex-fill">
                            <div className="d-sm-flex">
                        <textarea value={this.state.commentText} className="form-control" id="exampleFormControlTextarea1" rows="3"
                                  placeholder="Napiš komentář…" onChange={this.commentChanged.bind(this)}></textarea>
                            </div>
                        </div>
                    </form>
                    <button type="submit" onClick={this.addComment.bind(this)} className="btn btn-success">Uložit komentář</button>
                </div>
            </div>
        );
    }
}

const formatDate = date => {
    const months = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];

    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};
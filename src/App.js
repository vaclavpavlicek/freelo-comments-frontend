import React, {Component} from 'react';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Task} from './components/Task/Task';
import './App.scss';
import {assocPath, append, pipe, takeLast, nth, inc, prop, assoc} from 'ramda';
import {PROGRESS_STATES} from "./constants";
import * as axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: PROGRESS_STATES.LOADING
        };
        this.fetch();
    }

    addComment(text) {
        this.setState({
            comments: append({
                id: this.getId(),
                nickname: 'Dáša',
                text,
            }, this.state.comments)
        });
    }

    fetch() {
        axios.get('http://localhost:8000/rest/task-detail/2')
            .then(({data}) => {
                if (data.message === 'task-not-found') {
                    this.setState({status: PROGRESS_STATES.TASK_NOT_FOUND});
                } else {
                    this.setState({
                            task: assoc('dueDate', new Date(data.task.dueDate), data.task),
                            comments: data.comments,
                            status: PROGRESS_STATES.LOADED
                        }
                    );
                }
            }).catch(console.error);
    }

    getId() {
        return pipe(
            takeLast(1),
            nth(0),
            prop('id'),
            inc
        )(this.state.comments);
    }

    updateTaskResolved(e) {
        this.setState(assocPath(['task', 'resolved'], e.target.checked, this.state));
    }

    render() {
        const loading = this.state.status === PROGRESS_STATES.LOADING;
        const notFound = this.state.status === PROGRESS_STATES.TASK_NOT_FOUND;
        const loaded = this.state.status === PROGRESS_STATES.LOADED;

        return (
            <div className="container container--w1440">
                <div className="d-lg-flex my-4 my-md-5">
                    <div className="flex-fill w-75">
                        <Toolbar/>
                        {loading && <h1 className="status-title">Loading</h1>}
                        {notFound && <h1 className="status-title error">Task not found. :(</h1>}
                        {loaded &&
                        <Task task={this.state.task}
                              comments={this.state.comments}
                              addComment={this.addComment.bind(this)}
                              updateTaskResolved={this.updateTaskResolved.bind(this)}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

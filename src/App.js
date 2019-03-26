import React, {Component} from 'react';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Task} from './components/Task/Task';
import './App.scss';
import {assocPath, append, pipe, takeLast, nth, inc, prop} from 'ramda';
import * as axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fetch();
    }

    addComment(text) {
        this.setState({
            comments: append({
                id: this.getId(),
                nickname: 'Dáša',
                avatar: './images/avatar3.png',
                text,
            }, this.state.comments)
        });
    }

    fetch() {
        axios.get('http://localhost:8000/rest/task-detail/1')
            .then(response => {
                this.setState(assocPath(['task', 'dueDate'], new Date(response.data.task.dueDate), response.data));
            })
            .catch(console.error);
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
        console.log(this.state);
        if (this.state.task) {
            return (
                <div className="container container--w1440">
                    <div className="d-lg-flex my-4 my-md-5">
                        <div className="flex-fill w-75">
                            <Toolbar/>
                            <Task task={this.state.task}
                                  comments={this.state.comments}
                                  addComment={this.addComment.bind(this)}
                                  updateTaskResolved={this.updateTaskResolved.bind(this)}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container container--w1440">
                    <div className="d-lg-flex my-4 my-md-5">
                        <div className="flex-fill w-75">
                            <Toolbar/>
                            <h1>Loading</h1>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;

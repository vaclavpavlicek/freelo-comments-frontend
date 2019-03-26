import React, {Component} from 'react';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Task} from './components/Task/Task';
import avatar3 from './images/avatar3.png';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                name: 'Merchandising stánku snědá tíseň na veletrhu v Mostě',
                resolved: false,
                dueDate: new Date('03-25-2019'),
                assignee: {
                    nickname: 'Dáša',
                    profilePicture: avatar3
                }
            },
            comments: []
        };
    }

    render() {
        return (
            <div className="container container--w1440">
                <div className="d-lg-flex my-4 my-md-5">
                    <div className="flex-fill w-75">
                        <Toolbar/>
                        <Task task={this.state.task}
                              comments={this.state.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

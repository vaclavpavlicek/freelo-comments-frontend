import React, {Component} from 'react';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Task} from './components/Task/Task';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import './App.scss';
import {assocPath, append, pipe, takeLast, nth, inc, prop} from 'ramda';

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
            comments: [
                {
                    id: 1,
                    nickname: 'Dáša',
                    avatar: avatar3,
                    text: '<p>Už mám první vlaštovku merche:</p><p><img src="./images/discussion1.png" className="img-fluid shadow-sm" alt=""/></p><p>Co ty na to brácha? <strong>@Ludan</strong></p>'
                },
                {
                    id: 2,
                    nickname: 'Luďan',
                    avatar: avatar1,
                    text: '<p>Už mám první vlaštovku merche:</p><p><img src="./images/discussion1.png" className="img-fluid shadow-sm" alt=""/></p><p>Co ty na to brácha? <strong>@Ludan</strong></p>'
                },
                {
                    id: 3,
                    nickname: 'Čočkin',
                    avatar: avatar2,
                    text: '<p>Hele a myslíte, že to bude fungovat?</p><p>Třeba já bych si na sebe takovou blbost nepřipnul. Neuděláme něco víc fancy? Třeba šátek?</p><p>Nebo mě ještě napadlo, že bychom mohli vyrábět brejle. Mrkejte:</p><p><img src=./images/discussion2.jpg width="400" className="img-fluid shadow-sm" alt=""/> </p>'
                },
                {
                    id: 4,
                    nickname: 'Luďan',
                    avatar: avatar1,
                    text: '<p>Hele <strong>@Cockin</strong> to mi nepřijde jako nejlepší nápad na to bych se vykašlal.</p>'
                },
            ]
        };
    }

    addComment(text) {
        this.setState({
            comments: append({
                id: this.getId(),
                nickname: 'Dáša',
                avatar: avatar3,
                text,
            }, this.state.comments)
        });
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
    }
}

export default App;

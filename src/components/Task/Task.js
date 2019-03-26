import React, {Component} from 'react';
import avatar1 from '../../images/avatar1.png';
import avatar3 from '../../images/avatar3.png';
import avatar4 from '../../images/avatar4.png';
import discussion1 from '../../images/discussion1.png';
import discussion2 from '../../images/discussion2.jpg';

export class Task extends Component  {


    render() {
        const {task, comments} = this.props;
        return (
            <div className="bg-white rounded shadow p-2 p-sm-3 p-md-5">
                <div className="form-group form-check h5 mb-4 mb-sm-5">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={task.resolved}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        {task.name}
                        <span
                            className="badge badge-primary badge-pill">{formatDate(task.dueDate)}</span> <img
                            src={task.assignee.profilePicture} className="rounded-circle" style={{width: "1.3rem"}} alt="..."/>
                        <span
                            className="badge badge-secondary badge-pill">{task.assignee.nickname}</span></label>
                </div>
                <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                        <img src={avatar3} className="mr-3 rounded-circle"
                             style={{width: '3rem'}} alt="..."/>
                    </div>
                    <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
                        <h5 className="mt-0">Dáša</h5>
                        <p>Už mám první vlaštovku merche:</p>
                        <p>
                            <img src={discussion1} className="img-fluid shadow-sm" alt=""/>
                        </p>
                        <p>Co ty na to brácha? <strong>@Ludan</strong></p>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                        <img src={avatar1} className="mr-3 rounded-circle"
                             style={{width: '3rem'}} alt="..."/>
                    </div>
                    <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
                        <h5 className="mt-0">Luďan</h5>
                        <p>Jo, to není blbý brácha ... good job!</p>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                        <img src={avatar4} className="mr-3 rounded-circle"
                             style={{width: '3rem'}} alt="..."/>
                    </div>
                    <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
                        <h5 className="mt-0">Čočkin</h5>
                        <p>Hele a myslíte, že to bude fungovat?</p>
                        <p>Třeba já bych si na sebe takovou blbost nepřipnul. Neuděláme něco víc fancy?
                            Třeba šátek?</p>
                        <p>Nebo mě ještě napadlo, že bychom mohli vyrábět brejle. Mrkejte:</p>
                        <p>
                            <img src={discussion2} width="400" className="img-fluid shadow-sm"
                                 alt=""/>
                        </p>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                        <img src={avatar1} className="mr-3 rounded-circle"
                             style={{width: '3rem'}} alt="..."/>
                    </div>
                    <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
                        <h5 className="mt-0">Luďan</h5>
                        <p>Hele <strong>@Cockin</strong> to mi nepřijde jako nejlepší nápad na to bych se
                            vykašlal.</p>
                    </div>
                </div>
                <div className="mt-4 bg-light shadow-sm p-3 p-sm-4">
                    <form action="">
                        <div className="form-group flex-fill">
                            <div className="d-sm-flex">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                  placeholder="Napiš komentář…"></textarea>
                            </div>
                        </div>
                    </form>
                    <button type="submit" href="#" className="btn btn-success">Uložit komentář</button>
                </div>
            </div>
        );
    }
}

const formatDate = date => {
    const months = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];

    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};
import React, {Component} from 'react';
import freeloLogo from './images/freelo-logo.svg';
import discussion1 from './images/discussion1.png';
import discussion2 from './images/discussion2.jpg';
import avatar1 from './images/avatar1.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="container container--w1440">
                <div className="d-lg-flex my-4 my-md-5">
                    <div className="flex-fill w-75">
                        <div className="text-center mb-4 mb-md-5">
                            <a href="https://www.freelo.cz">
                                <img src={freeloLogo} width="200" className="" alt=""/>
                            </a>
                        </div>
                        <div className="bg-white rounded shadow p-2 p-sm-3 p-md-5">
                            <div className="form-group form-check h5 mb-4 mb-sm-5">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Merchandising stánku snědá
                                    tíseň na
                                    veletrhu v Mostě <span
                                        className="badge badge-primary badge-pill">25. března 2019</span> <img
                                        src={avatar3} className="rounded-circle" style={{width: "1.3rem"}} alt="..."/>
                                    <span
                                        className="badge badge-secondary badge-pill">Dáša</span></label>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

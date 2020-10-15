import React from "react";
import Prework from "./data/pre-work.json";

function pTag(array){
    return array.map((item, index)=>{
        return(
            <p key={index}>
                {item}
            </p>
        )
    })
}


export default function Blogs() {
    return (
        <>
            <div className="text-center bg-white pb-4">
                <h1 className="text-primary text-center pt-3 pb-3">Blog Posts</h1>
                <i className="fas fa-code fa-spin text-primary pb-3"></i>
                <div className="d-flex justify-content-around pt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Pre-Work
            </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample2"
                    >
                        Front-End
            </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample3"
                    >
                        Back-End
            </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample4"
                        aria-expanded="false"
                        aria-controls="collapseExample4"
                    >
                        Full Stack
            </button>
                </div>

                <div className="collapse mt-3" id="collapseExample">
                    <div className="accordion" id="exampleAccordion">
                        <div className="card">
                            <div className="card-header" id="exItem1Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="false" aria-controls="exItem1">Pre-Work Week 1</button>
                                </h5>
                            </div>
                            <div id="exItem1" className="collapse" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.preweek1)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem2Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="false" aria-controls="exItem2">Pre-Work Week 2</button>
                                </h5>
                            </div>
                            <div id="exItem2" className="collapse" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.preweek2)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem3Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem3" aria-expanded="false" aria-controls="exItem3">Pre-Work Week 3</button>
                                </h5>
                            </div>
                            <div id="exItem3" className="collapse" aria-labelledby="exItem3Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.preweek3)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem4Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem4" aria-expanded="false" aria-controls="exItem4">Pre-Work Week 4</button>
                                </h5>
                            </div>
                            <div id="exItem4" className="collapse" aria-labelledby="exItem4Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.preweek4)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>


                <div className="collapse mt-3 text-center" id="collapseExample2">
                    <div className="accordion" id="exampleAccordion">
                        <div className="card">
                            <div className="card-header" id="exItem1Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="false" aria-controls="exItem1">Front-End Week 1</button>
                                </h5>
                            </div>
                            <div id="exItem1" className="collapse" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front1)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem2Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="false" aria-controls="exItem2">Front-End Week 2</button>
                                </h5>
                            </div>
                            <div id="exItem2" className="collapse" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front2)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem3Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem3" aria-expanded="false" aria-controls="exItem3">Front-End Week 3</button>
                                </h5>
                            </div>
                            <div id="exItem3" className="collapse" aria-labelledby="exItem3Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front3)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem4Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem4" aria-expanded="false" aria-controls="exItem4">Front-End Week 4</button>
                                </h5>
                            </div>
                            <div id="exItem4" className="collapse" aria-labelledby="exItem4Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front4)}</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="exItem5Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem5" aria-expanded="false" aria-controls="exItem5">Front End Week 5</button>
                                </h5>
                            </div>
                            <div id="exItem5" className="collapse" aria-labelledby="exItem5Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front5)}</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="exItem6Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem6" aria-expanded="false" aria-controls="exItem6">Front-End Week 6</button>
                                </h5>
                            </div>
                            <div id="exItem6" className="collapse" aria-labelledby="exItem6Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.front6)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse mt-3" id="collapseExample3">
                    <div className="accordion" id="exampleAccordion">
                        <div className="card">
                            <div className="card-header" id="exItem1Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="false" aria-controls="exItem1">Back-End Week 1</button>
                                </h5>
                            </div>
                            <div id="exItem1" className="collapse" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.back1)}</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="exItem2Header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="false" aria-controls="exItem2">Back-End Week 2</button>
                                </h5>
                            </div>
                            <div id="exItem2" className="collapse" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
                                <div className="card-body">{pTag(Prework.back2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mt-3" id="collapseExample4">
                <div className="accordion" id="exampleAccordion">
                    <div className="card">
                        <div className="card-header" id="exItem1Header">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="false" aria-controls="exItem1">Full Stack Week 1</button>
                            </h5>
                        </div>
                        <div id="exItem1" className="collapse" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
                            <div className="card-body">{pTag(Prework.stack1)}</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="exItem2Header">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="false" aria-controls="exItem2">Full Stack Week 2</button>
                            </h5>
                        </div>
                        <div id="exItem2" className="collapse" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
                            <div className="card-body">{pTag(Prework.stack2)}</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="exItem3Header">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem3" aria-expanded="false" aria-controls="exItem3">Full Stack Week 3</button>
                            </h5>
                        </div>
                        <div id="exItem3" className="collapse" aria-labelledby="exItem3Header" data-parent="#exampleAccordion">
                            <div className="card-body">{pTag(Prework.stack3)}</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="exItem4Header">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#exItem4" aria-expanded="false" aria-controls="exItem4">Full Stack Week 4</button>
                            </h5>
                        </div>
                        <div id="exItem4" className="collapse" aria-labelledby="exItem4Header" data-parent="#exampleAccordion">
                            <div className="card-body">{pTag(Prework.stack4)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
            <p id="contact"></p>   
        </>

    )
}
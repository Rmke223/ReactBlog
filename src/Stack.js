import React from "react";
import REEact from "./img/react.png"


export default function Stack() {
    return (
        <>
            <div className="bg-white text-center">
                <h1 className="text-primary text-center pt-3 pb-3">Stack</h1>
                <i className="fas fa-code fa-spin text-primary pb-3"></i>
                <br />
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carouse-item active">
                            <div className="card">
                                <img className="card-img-top" src={REEact} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">yeet</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="carouse-item">
                            <div className="card">
                                <img className="card-img-top" src={REEact} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Reeeeeeee</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>



            </div>
        </>
    )
}
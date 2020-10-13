import React from "react";
import TicTac from "./img/tictac.jpg"


export default function Portfolio() {
    return (
        <div className="bg-success text-center pt-3 pb-3">
            <h1 class="text-center text-white">Portfolio</h1>
            <i class="fas fa-code fa-spin text-white"></i>
            <div className="row">
                <div class="card col-3 bg-success border-primary">
                    <img class="card-img-top" src={TicTac} alt="Card image cap" />
                    <div class="card-body bg-success">
                        <h3 class="card-title text-primary">Card title</h3>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body bg-success d-flex justify-content-between">
                        <button type="button" class="btn btn-primary text-white btn-lg">Go Play!</button>
                        <button type="button" class="btn btn-primary text-white btn-lg">Primary</button>
                    </div>
                </div>
                <div class="card col-3 bg-success border-primary">
                    <img class="card-img-top" src={TicTac} alt="Card image cap" />
                    <div class="card-body bg-success">
                        <h3 class="card-title text-primary">Card title</h3>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body bg-success d-flex justify-content-between">
                        <button type="button" class="btn btn-primary text-white btn-lg">Go Play!</button>
                        <button type="button" class="btn btn-primary text-white btn-lg">Primary</button>
                    </div>
                </div>
                <div class="card col-3 bg-success border-primary">
                    <img class="card-img-top" src={TicTac} alt="Card image cap" />
                    <div class="card-body bg-success">
                        <h3 class="card-title text-primary">Card title</h3>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body bg-success d-flex justify-content-between">
                        <button type="button" class="btn btn-primary text-white btn-lg">Go Play!</button>
                        <button type="button" class="btn btn-primary text-white btn-lg">Primary</button>
                    </div>
                </div>
                <div class="card col-3 bg-success border-primary">
                    <img class="card-img-top" src={TicTac} alt="Card image cap" />
                    <div class="card-body bg-success">
                        <h3 class="card-title text-primary">Card title</h3>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body bg-success d-flex justify-content-between">
                        <button type="button" class="btn btn-primary text-white btn-lg">Go Play!</button>
                        <button type="button" class="btn btn-primary text-white btn-lg">Primary</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

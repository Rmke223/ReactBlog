import React from "react";



export default function Portfolio(props) {
    return (
        <div className="bg-success text-center pt-3 pb-3">
            <h1 class="text-center text-white">Portfolio</h1>
            <i class="fas fa-code fa-spin text-white"></i>
            <div className="row pt-3 pb-3">
                {
                    props.sources.map((item) => {
                        return (
                            <div class="card col-lg-3 col-md-6 col-sm-12 bg-success border-primary">
                                <img class="card-img-top img-fluid" src={item.source} alt="Card image cap" />
                                <div class="card-body bg-success">
                                    <h3 class="card-title text-primary">{item.title}</h3>
                                    <p class="card-text text-white">{item.subTitle}</p>
                                </div>
                                <div class="card-body bg-success">
                                    <a href={item.link} class="btn btn-primary">View Now</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p id="blog" ></p>
        </div>
    )
}

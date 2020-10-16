import React from "react";



export default function Portfolio(props) {
    let i=0;
    return ( 
        <div className="bg-success text-center pt-3 pb-3">
            <h1 className="text-center text-white">Portfolio</h1>
            <i className="fas fa-code fa-spin text-white"></i>
            <div className="row pt-3 pb-3">
                {
                    
                    props.sources.map((item) => {
                        i++;
                        return (
                            
                            <div key={i} className="card col-lg-3 col-md-6 col-sm-12 bg-success border-primary">
                                <img className="card-img-top img-fluid" src={item.source} alt="Card image cap" />
                                <div className="card-body bg-success">
                                    <h3 className="card-title text-primary">{item.title}</h3>
                                    <p className="card-text text-white">{item.subTitle}</p>
                                </div>
                                <div className="card-body bg-success">
                                    <a href={item.link} className="btn btn-primary">View Now</a>
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

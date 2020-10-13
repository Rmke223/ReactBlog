import React from "react";


export default function Header(props) {
  return (
    <>
      <nav className="navbar stick-top navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-white">Bootcamp Blog</a>
        <button className="navbar-toggler bg-success text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          Menu
        <i class="fas fa-bars pl-2"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              props.pages.map((item) => {
                return (
                  <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                    <a className="nav-link text-white">{item}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </>
  )
}



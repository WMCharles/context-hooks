import {Link, Outlet} from "react-router-dom"

import React from 'react'

export default function Nav() {
  return (
    <div>
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

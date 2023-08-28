import React, { useState } from "react";

const AppHeader = (props) => {
   const [isOpen, setOpen] = useState(false)

   const handleToggle = e => {
      setOpen(open => !open)
   }

   return (
      <>
         <header>
            <div className="logo-wrap">
               <h1>{props.title ? props.title : 'appName' }</h1>
            </div>
            <div className="menu-btn-wrap">
               <p onClick={handleToggle}>menu</p>
            </div>
         </header>
         <nav className="nav" style={{display: isOpen ? 'flex' : 'none'}}>
            <ul>
               {props.navObject?.map(nav => {
                  return (
                     <li key={nav.name}>{nav.name}</li>
                  )
               })}
            </ul>
         </nav>
      </>
   )
}

export default AppHeader
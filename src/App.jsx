import React, { useState } from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import Grid from './components/grid'
import Navbody from './components/navbody'
function App() {
  const [open, setopen] = useState(true)
  function toggle() {
    setopen(prevopen => !prevopen)
  }
  return (
    <> <Nav
      open={open}
      toggle={toggle}
    />
      {/* <Navbody
        open={open}
        toggle={toggle}
      /> */}
      <Hero
        open={open}
        toggle={toggle}
      />
      <Grid
        open={open}
      />
    </>
  )
}

export default App

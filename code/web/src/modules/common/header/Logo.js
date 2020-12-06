// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// UI Imports
import { secondary } from '../../../ui/common/fonts'
import { textLevel1 } from '../../../ui/common/shadows'

// App Imports
import home from '../../../setup/routes/home'

// Component
// others is also used in Menu.js 
// logo is also the 'take me home' button
// stying is imported and font size/color is identified in code 
const Logo = (props) => {
  const { ...others } = props

  return (
    <Link to={home.home.path} {...others}>
      <span style={{ fontFamily: secondary, fontSize: '2em', color: 'white', textShadow: textLevel1 }}>Crate</span>
    </Link>
  )
}

export default Logo

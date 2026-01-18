import { Icon } from '@iconify/react'

const Icons = ({ icon, size = 20, color = "currentColor", className = ""}) => {
    return(
        <Icon icon={icon} 
        style={{color: color, fontSize: `${size}px`}}
        className={className}
        />
    )
}

export default Icons;

{/* <Icon 
      icon={icon} 
      style={{ 
        fontSize: `${size}px`, 
        color: color // If this is "currentColor", it follows the button's text color
      }} 
    /> */}
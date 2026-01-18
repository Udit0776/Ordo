import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icons from './Icons'

const Button = ({
    text = "Button",
    size = "md",
    variant = "primary", //blue
    icon = null,
    iconSize = 20,
    iconColor = "currentColor",
    navigate = null,
    className = "",
    onClick
}) => {
    const router = useNavigate();

    const sizeStyles = {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-1 text-md",
        lg: "px-8 py-4 text-lg",
    }
    const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    outline: "border-2 border-gray-300 hover:bg-gray-100 text-gray-700"
  };

  const handlePress = (e) => {
    if (navigate) {
      router(navigate);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handlePress}
      className={`
        flex items-center justify-center gap-2 rounded-lg transition-all duration-200 
        font-medium active:scale-95 disabled:opacity-50
        ${sizeStyles[size] || sizeStyles.md}
        ${variantStyles[variant] || variantStyles.primary}
        ${className}
      `}
    >
      {/* Pass size and color directly to our Icons component */}
      {icon && (
        <Icons 
          icon={icon} 
          size={iconSize} 
          color={iconColor} 
        />
      )}
      
      <span>{text}</span>
    </button>
  );
}

export default Button

{/* <Button 
  text="Premium Member" 
  icon="mdi:crown" 
  iconColor="#FFD700" 
  iconSize={24} 
/> */}
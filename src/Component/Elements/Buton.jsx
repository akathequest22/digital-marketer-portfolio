
const Button = ({isPri,bnText,className,style}) => {
  return (
    <button className={`py-2 px-3 rounded-md ${isPri ?"bg-[#8fd694]":" "} ${className} `} style={style} >{bnText}</button>


  )
}

export default Button
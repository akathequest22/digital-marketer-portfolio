
const Button = ({isPri,bnText,className,style}) => {
  return (
    <button className={`md:py-4 md:px-6 px-4 py-2 text-[#062d3e] rounded-md ${isPri ?"bg-[#8fd694]":" "} ${className} `} style={style} >{bnText}</button>


  )
}

export default Button
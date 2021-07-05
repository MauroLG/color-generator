const rgbToHex = (rgb) => {
  return rgb.map((component)=>{return Number(component).toString(16)}).join('')
}

export default rgbToHex;
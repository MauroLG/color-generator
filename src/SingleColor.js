import React, {useState, useEffect} from 'react'
import rgbToHex from './rgbToHex'

const SingleColor = ({rgb, type, weight}) => {
  const hexColor = "#".concat(rgbToHex(rgb))
  const rgbColor = rgb.join(',')

  const [copiedAlert, setCopiedAlert] = useState(false);

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setCopiedAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [copiedAlert])
  
  return (
    <div className={type === 'base' || type === 'tint' ? `color black` : `color white`} style={{backgroundColor: `rgb(${rgbColor})`}} onClick={()=>{setCopiedAlert(true);
    navigator.clipboard.writeText(hexColor)}}>
      <span className="color-weight">{weight}%</span>
      <span className="color-code">{hexColor}</span>
      {copiedAlert && <p className="alert">copied to clipboard</p>}
    </div>
  )
}

export default SingleColor

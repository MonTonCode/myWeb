import { useEffect, useState } from "react";

export default function ImageResize() {
  const [handleFileInput, sethandleFileInput] = useState(false)
  const [widthValue, setWidthValue] = useState(0)
  const [heightValue, setHeightValue] = useState(0)
  
  
  useEffect(()=>{
    const uploadBox = document.querySelector('#image-resize .upload-box'),
      fileInput = uploadBox.querySelector('input'),
      previewImage = uploadBox.querySelector('img'),
      ratioInput = document.querySelector('#ratio'),
      widthInput = document.querySelector('#width'),
      heightInput = document.querySelector('#height'),
      qualityInput = document.querySelector('#quality'),
      btnDownload = document.querySelector('#btn-uploadImage'),
      wrapper = document.querySelector('.wrapper')
    
    let imageRatio

    if ( handleFileInput ) {
      fileInput.click()
      sethandleFileInput(false)
    }

    function loadFile() {
      const file = fileInput.files[0]
      previewImage.src = URL.createObjectURL(file)
      wrapper.classList.add('active')
    }

    function previewImageActive() {
      setHeightValue(previewImage.naturalHeight)
      setWidthValue(previewImage.naturalWidth)
      imageRatio = previewImage.naturalWidth / previewImage.naturalHeight
    }

    function resizeW() {   
      const height = ratioInput.checked ? widthInput.value / imageRatio : heightInput.value
      setHeightValue(Math.floor(height))
    }

    function resizeH() { 
      if (!heightValue) return 
      const width = ratioInput.checked ? heightInput.value * imageRatio : widthInput.value
      setWidthValue(Math.floor(width))
    }

    function resizeAndDownload() {
      const canvas = document.createElement("canvas")
      const a = document.createElement('a')
      const ctx = canvas.getContext('2d')

      // if quality checkbox is checked, pass 0.7 to imgQuality else pass 1.0
      // 1.0 is 100% quality where 0.7 is 70% of total. you can pass from 0.1 - 1.0
      const imageQulity = qualityInput.checked ? 0.7 : 1.0

      canvas.width = widthInput.value
      canvas.height = heightInput.value

      ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height)
      document.body.appendChild(canvas)

      a.href = canvas.toDataURL("image/jpeg", imageQulity)
      a.download = new Date().getTime()
      a.click()
      wrapper.classList.remove('active')
    }

    
    fileInput.addEventListener('change', loadFile)
    previewImage.addEventListener('load', previewImageActive)
    widthInput.addEventListener('change', resizeW)
    heightInput.addEventListener('change', resizeH)
    widthInput.addEventListener('keyup', resizeW)
    heightInput.addEventListener('keyup', resizeH)
    btnDownload.addEventListener('click', resizeAndDownload)
    return ()=>{
      handleFileInput.about
      fileInput.removeEventListener('change', loadFile)
      previewImage.removeEventListener('load', previewImageActive)
      widthInput.removeEventListener('change', resizeW)
      heightInput.removeEventListener('change', resizeH)
      widthInput.removeEventListener('keyup', resizeW)
      heightInput.removeEventListener('keyup', resizeH)
      btnDownload.removeEventListener('click', resizeAndDownload)
      btnDownload.removeEventListener('keyup', resizeAndDownload)
    }
  },[handleFileInput])

  // *********************************************************************

  return (
    <div id="image-resize">
      <div className="wrapper">
        <div className="upload-box" onClick={()=>sethandleFileInput(true)} >
          <input type="file" name="" id="" hidden />
          <i className="bx bx-cloud-upload"></i>
          <img src="" alt="image for resize" />
          <p>Browse File to Upload</p>
        </div>
        <div className="content">
          <div className="colume left">
            <label htmlFor="width">Width</label>
            <input type="number" value={widthValue} onChange={(e)=>setWidthValue(e.target.value)} name="width" id="width" />
            <div>
              <input type="checkbox" name="ratio" id="ratio" defaultChecked />
              <label htmlFor="ratio">Lock aspect ratio</label>
            </div>
          </div>

          <div className="colume right">
            <label htmlFor="height">Height</label>
            <input type="number" name="height" value={heightValue} id="height" onChange={(e)=>setHeightValue(e.target.value)} />
            <div>
              <input type="checkbox" name="quality" id="quality" />
              <label htmlFor="quality">Reduce quality</label>
            </div>
          </div>
        </div>
        <button id="btn-uploadImage">Download Image</button>
      </div>
    </div>
  );
}

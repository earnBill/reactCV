
export default function Sidebar({
    mainColor,
    changeColor
}) {
  return (
    <div className="sidebar"> 
      <button className="export-pdf">Export PDF</button>
      <div className="color-div">
        <label htmlFor="fav-color">Change Color</label>
        <input type="color" id="fav-color" value={mainColor} onChange={changeColor}/>
      </div>
        
    </div>
  )
}
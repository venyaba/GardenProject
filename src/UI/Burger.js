import './SideBar.css'
import SideBar from './SideBar.js';
function Burger() {
    return (
      <div id='burger'>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"burger"} />
        <div id="page-wrap"> 
        </div>
      </div>
    );
  }

  export default Burger;
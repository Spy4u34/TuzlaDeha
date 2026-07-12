// src/pages/Puantaj/Puantaj.jsx

import "./Puantaj.css";

import PuantajOzet from "./PuantajOzet";
import PuantajTable from "./PuantajTable";

function Puantaj(){

return(

<div className="puantaj">

<div className="page-header">

<div>

<h1>Puantaj</h1>

<p>Günlük personel puantaj ekranı</p>

</div>

<button className="save-btn">

Kaydet

</button>

</div>

<PuantajOzet/>

<div className="toolbar">

<input type="date"/>

<select>

<option>Tüm Personeller</option>

</select>

</div>

<PuantajTable/>

</div>

)

}

export default Puantaj;
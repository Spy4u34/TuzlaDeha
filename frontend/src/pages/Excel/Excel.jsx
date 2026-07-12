// src/pages/Excel/Excel.jsx

import "./Excel.css";

import ExcelHistory from "./ExcelHistory";
import ExcelTable from "./ExcelTable";
import ExcelResult from "./ExcelResult";

function Excel(){

return(

<div className="excel-page">

<div className="page-header">

<div>

<h1>Excel Aktar</h1>

<p>İçtaş personel giriş / çıkış dosyasını yükleyin.</p>

</div>

</div>

<div className="upload-box">

<div className="upload-icon">

📄

</div>

<h2>

Excel Dosyası

</h2>

<p>

Desteklenen formatlar : XLSX / XLS

</p>

<input

type="file"

accept=".xlsx,.xls"

/>

<button>

Dosyayı İçeri Aktar

</button>

</div>

<ExcelResult/>

<ExcelHistory/>

<ExcelTable/>

</div>

)

}

export default Excel;
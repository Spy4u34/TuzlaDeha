// src/pages/Puantaj/PuantajTable.jsx

import "./PuantajTable.css";

function PuantajTable(){

return(

<div className="puantaj-table">

<table>

<thead>

<tr>

<th>Personel</th>

<th>Giriş</th>

<th>Çıkış</th>

<th>Normal</th>

<th>Mesai</th>

<th>Durum</th>

</tr>

</thead>

<tbody>

<tr>

<td>Ahmet Yılmaz</td>

<td>08:00</td>

<td>18:10</td>

<td>1 Gün</td>

<td>2 Saat</td>

<td>

<span className="ok">

Tamamlandı

</span>

</td>

</tr>

</tbody>

</table>

</div>

)

}

export default PuantajTable;
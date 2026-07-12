// src/pages/Yevmiye/Yevmiye.jsx

import "./Yevmiye.css";

import YevmiyeFilter from "./YevmiyeFilter";
import YevmiyeSummary from "./YevmiyeSummary";
import YevmiyeTable from "./YevmiyeTable";

function Yevmiye(){

return(

<div className="yevmiye-page">

<div className="page-header">

<div>

<h1>Yevmiye</h1>

<p>Aylık hakediş hesaplama ekranı</p>

</div>

<button className="calculate-btn">

Hesapla

</button>

</div>

<YevmiyeFilter/>

<YevmiyeSummary/>

<YevmiyeTable/>

</div>

)

}

export default Yevmiye;
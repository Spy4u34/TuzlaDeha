// src/pages/Yevmiye/YevmiyeCard.jsx

import "./YevmiyeCard.css";

function YevmiyeCard({

title,

value,

color

}){

return(

<div className="yev-card">

<div

className="line"

style={{

background:color

}}

></div>

<span>

{title}

</span>

<h2>

{value}

</h2>

</div>

)

}

export default YevmiyeCard;
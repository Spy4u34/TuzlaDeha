// src/components/PageTitle/PageTitle.jsx

import "./PageTitle.css";

function PageTitle({

title,

subtitle,

children

}){

return(

<div className="page-title">

<div>

<h1>

{title}

</h1>

<p>

{subtitle}

</p>

</div>

<div>

{children}

</div>

</div>

)

}

export default PageTitle;
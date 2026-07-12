// src/pages/NotFound/NotFound.jsx

import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound(){

return(

<div className="notfound">

<h1>

404

</h1>

<p>

Sayfa bulunamadı.

</p>

<Link to="/dashboard">

Dashboard'a Dön

</Link>

</div>

)

}

export default NotFound;
// src/components/Toast/Toast.jsx

import "./Toast.css";

function Toast({

message="İşlem Başarılı",

type="success"

}){

return(

<div className={`toast ${type}`}>

{message}

</div>

)

}

export default Toast;
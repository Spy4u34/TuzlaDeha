// src/components/ConfirmDialog/ConfirmDialog.jsx

import "./ConfirmDialog.css";

function ConfirmDialog({

title,

message,

onConfirm,

onCancel

}){

return(

<div className="confirm-overlay">

<div className="confirm-box">

<h2>

{title}

</h2>

<p>

{message}

</p>

<div className="confirm-buttons">

<button

className="cancel"

onClick={onCancel}

>

Vazgeç

</button>

<button

className="confirm"

onClick={onConfirm}

>

Onayla

</button>

</div>

</div>

</div>

)

}

export default ConfirmDialog;
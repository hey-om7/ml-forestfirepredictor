import React, { useState } from 'react'
import "./inputFields.scss"

export default function InputFields(prop) {
    function txtChanged(e) {
        prop.changeWord(e.target.value);
    }
    return (
        <div className="inputField">
            <input type={prop.type} placeholder={prop.text} onChange={txtChanged} />
        </div>
    )
}

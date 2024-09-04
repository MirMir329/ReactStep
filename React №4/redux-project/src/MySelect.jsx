import React from 'react'
import styles from "./MySelect.module.css"

export default function MySelect({defaultValue, options, onChange}) {
    return (
        <div>
           <select onChange={(event) => onChange(event.target.value)} className={styles.my_select}>
                <option disabled selected>{defaultValue}</option>
                {options.map((option, idx) => 
                    <option key={idx} value={option.value}>{option.text}</option>
                )}
            </select> 
        </div>
    )
}

import React, { useRef } from 'react'
import styles from '../../styles/Home.module.css'

function Toggle({ setDarkMode, checked, setChecked }) {
  const ref = useRef(null)
  function handleChange() {
    setChecked(ref.current.checked)
   
  }

  return (
    <div className="dark-mode" >
      <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className={styles.CheckboxToggle} id="checkbox" />
      <label className={styles.Toggle} htmlFor="checkbox">
      </label>
    </div>
  )
}

export default Toggle
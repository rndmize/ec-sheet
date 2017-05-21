import React from 'react';

const Aptitude = (props) => {

  const baseChange = e => {
    let val = Number(e.target.value);
    if (val < 5) val = 5;
    if (val > 30) val = 30;
    props.baseChange(val, props.index);
  }

  const clickBonus = e => {
    props.clickBonus(props.index);
  }

  const scroll = e => {};

  const total = props.aptVal + props.morphBonus + props.customBonus;

  return (
    <label>
      <span title={props.aptDef}>{props.aptName}</span>
      <div className="row">
        <div className="cell">
          <input type="number" 
                 defaultValue={props.aptVal} 
                 onBlur={baseChange} 
                 onWheel={scroll} 
          />
        </div>
        <div className="cell">
          <input type="number" 
                 className={props.customBonus === 0 ? "bonus" : "bonus custom"} 
                 readOnly 
                 value={props.morphBonus + props.customBonus} 
                 onClick={clickBonus} 
          />
        </div>
        <div className="cell">
          <input type="number" 
                 className="total" 
                 readOnly 
                 value={total > props.morphAptMax ? props.morphAptMax : total} 
          />
        </div>
      </div>
    </label>      
  );
}

export default Aptitude;
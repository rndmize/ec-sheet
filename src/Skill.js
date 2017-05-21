import React from 'react';

const Skill = (props) => {

  const skillChange = e => {
    let val = Number(e.target.value);
    if (val < 0) val = 0;
    if (val > 95) val = 95;
    props.skillChange(val, props.index);
  };

  const scroll = e => {};

  const total = () => {
    let skillVal = props.aptVal + props.skillPoints - (10 * props.negMods);
    if (skillVal > 99) skillVal = 99;
    if (skillVal < 0) skillVal = 0;
    if (props.skill.noDefault && props.skillPoints === 0) skillVal = 0;

    return skillVal;
  }

  return (
    <label className={props.skillPoints ? "" : "unskilled"}>
      <span title={props.skill.def}>{props.skill.name}</span>
      <div className="row">
        <div className="cell">
          <input type="number" 
                 title={props.skill.aptitude} 
                 readOnly
                 value={props.aptVal} 
          />
        </div>
        <div className="cell">
          <input type="number" 
                 defaultValue={props.skillPoints} 
                 onBlur={skillChange} 
                 onWheel={scroll} 
          />
        </div>
        <div className="cell">
          <input type="number"
                 className="total" 
                 readOnly 
                 value={total()} 
          />
        </div>
      </div>
    </label>      
  );
}

export default Skill;
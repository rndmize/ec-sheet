import React from 'react';
import Skill from './Skill.js';

const SkillsDetail = (props) => {

  const fieldCategories = ['Academics', 'Art', 'Exotic Melee Weapon', 'Exotic Ranged Weapon', 'Hardware', 'Interest', 'Language', 'Medicine', 'Networking', 'Pilot', 'Profession'];
  const options = fieldCategories.map(category => {
    return (<option key={Math.random()}>{category}</option>);
  });

  return (
    <div className="row">
      <div className="sortBy cell">
        <label>
          <span>Sort By</span>
          <div className="row">
            <div className="cell"><button>Alphabetical</button></div>
            <div className="cell"><button>Aptitude</button></div>
            <div className="cell"><button>Category</button></div>
          </div>
        </label>
      </div>
      <div className="addSkill cell">
        <label className="row">
          <span>Add Field Skill</span>
          <div className="cell">
            <select>
            {options}
            </select>              
          </div>
          <div className="cell">
            <input type="text" />
          </div>
          <div className="cell">
            <button>Add Skill</button>
          </div>
        </label>
      </div>
      <div className="skillList">
      </div>
    </div>
  );
}

export default SkillsDetail;
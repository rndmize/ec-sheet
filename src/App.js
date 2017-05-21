import React, { Component } from 'react';
import Aptitude from './Aptitude.js';
import Skill from './Skill.js';

import './App.css';
import data from './data.js';

class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      route: '',
      name: '',
      aptitudes: [15, 15, 15, 15, 15, 15, 15],
      morph: data.morphs[0],
      customAptBonusList: [0, 0, 0, 0, 0, 0, 0],
      skills: data.skills.map(item => { return 0; }),
      durabilityCurrent: 30,
      lucidityCurrent: 30,
      wounds: 0,
      traumas: 0,
      initiativeBonus: 0,
      damageBonus: 0,
      speed: 1,
      moxieCurrent: 1,
      moxieMax: 1
    };

  }

  get rezPointTotal() {
    const aptCost = this.state.aptitudes.reduce((sum, apt) => {
      return sum + apt;
    }, -105) * 10;

    const moxCost = 15 * (this.state.moxieMax - 1);

    const skillCost = this.state.skills.reduce((sum, skill, index) => {
      const aptIndex = data.aptAbbreviations.indexOf(data.skills[index].aptitude);
      if (skill + this.state.aptitudes[aptIndex] > 60) {
        const subSixtyPoints = 60 - this.state.aptitudes[aptIndex];
        return sum + subSixtyPoints + (2 * (skill - subSixtyPoints));
      }
      return sum + skill;
    }, 0);

    return aptCost + moxCost + skillCost + this.state.morph.cpCost;
  }

  morphChange(e) {
    const newMorph = data.morphs.find(item => {
      if (item.name === e.target.value) return true;
      return false;
    });

    this.setState({
      morph: newMorph,
      customAptBonusList: [0, 0, 0, 0, 0, 0, 0]
    });
  }



  buildAptitudes() {
    const baseChange = (val, index) => {
      this.setState(prevState => {
        prevState.aptitudes[index] = val;
        return prevState;
      });
    }

    const clickBonus = index => {
      const bonusTotal = this.state.customAptBonusList.reduce((sum, item) => {
        return sum + item;
      }, 0);

      this.setState(prevState => {
        if (prevState.customAptBonusList[index] === 0 && bonusTotal < this.state.morph.customAptBonuses * 5) prevState.customAptBonusList[index] = 5;
        else prevState.customAptBonusList[index] = 0;
        return prevState;
      });
    }

    return this.state.aptitudes.map((aptitude, index) => {
      return (
        <Aptitude
          key={Math.random()}
          aptName={data.aptitudes[index]}
          aptDef={data.aptitudeDefs[index]}
          aptVal={aptitude}
          morphBonus={this.state.morph.aptMods[index]}
          morphAptMax={this.state.morph.aptMax}
          customBonus={this.state.customAptBonusList[index]}
          index={index}

          baseChange={baseChange}
          clickBonus={clickBonus}
        />
      );
    });
  }

  buildSkills() {
    const skillChange = (val, index) => {
      this.setState(prevState => {
        prevState.skills[index] = val;
        return prevState;
      });
    }

    // Put skills with points in them at the top
    const remapped = this.state.skills.map((item, index) => {
      return {val: item, index: index};
    });

    let unskilled = [];
    let skilled = remapped.filter(item => {
      if (item.val === 0) unskilled.push(item);
      return item.val;
    });

    const sortedSkills = skilled.concat(unskilled);


    return sortedSkills.map(item => {
      const skill = data.skills[item.index];
      const aptIndex = data.aptAbbreviations.indexOf(skill.aptitude);
      let aptVal = this.state.aptitudes[aptIndex];
      aptVal += this.state.morph.aptMods[aptIndex] + this.state.customAptBonusList[aptIndex];
      if (aptVal > this.state.morph.aptMax) aptVal = this.state.morph.aptMax;

      return (
        <Skill
          key={Math.random()}
          skill={skill}
          skillPoints={item.val}
          aptVal={aptVal}
          negMods={this.state.wounds + this.state.traumas}
          index={item.index}

          skillChange={skillChange}
        />
      )
    });
  }



  render() {
    const aptitudes = this.buildAptitudes();
    const skills = this.buildSkills();
    const morphList = data.morphs.map(morph => {
      return <option key={Math.random()}>{morph.name}</option>;
    });

    const charSheetHeader = (
      <div className="row statblock">
        <div className="cell u-1of4">
          <label>
            <span>Player Name</span>
            <input type="text" style={{textAlign: 'left'}} placeholder="WHO ARE YOU?!" onBlur={e => this.setState({name: e.target.value})} />
          </label>
        </div>
        <div className="cell">
          <div className="row">
            <label className="cell">
              <span>Init Bonus</span>
            <input type="number" readOnly value={this.state.aptitudes[2] + this.state.aptitudes[3]} />
            </label>
            <label className="cell">
              <span>Dmg Bonus</span>
              <input type="number" readOnly value={Math.floor(this.state.aptitudes[5] / 10)} />
            </label>
            <label className="cell u-1of3">
              <span>Moxie</span>
              <div className="row">
                <div className="cell"><input type="number" defaultValue={this.state.moxieCurrent} onBlur={e => {this.setState({moxieCurrent: e.target.value})}} /></div>
                <div className="cell u-1of5"><input type="text" disabled value="/" style={{background: '#fff', border: '#fff'}} /></div>
                <div className="cell"><input type="number" defaultValue={this.state.moxieMax} onBlur={e => {this.setState({moxieMax: e.target.value})}} /></div>
              </div>
            </label>
            <label className="cell u-1of3">
              <span>Rez Point Total</span>
              <input type="number" readOnly value={this.rezPointTotal} />
            </label>
          </div>
        </div>
      </div>
    );

    const charSheetBody = (
      <div className="row">
        <div className="cell statblock">
          <div className="row">
            <label className="cell">
              <span>Morph</span>
              <select value={this.state.morph.name} onChange={this.morphChange.bind(this)}>{morphList}</select>
            </label>
          </div>
          <div className="row">
            <div className="cell">
              <p style={{fontSize: '.7em', lineHeight: '1.5em', color: '#666', height: '10em', overflowY: 'scroll', margin: 0}}>{this.state.morph.description}</p>
            </div>
          </div>
          {aptitudes}
        </div>
        <div className="cell statblock">
          <label>
            <span>Durability</span>
            <div className="row">
              <div className="cell"><input type="number" defaultValue={this.state.morph.durability} style={{color: '#933'}} /></div>
              <div className="cell u-1of5"><input type="text" disabled value="/" style={{background: '#fff', border: '#fff'}} /></div>
              <div className="cell"><input type="number" readOnly value={this.state.morph.durability} /></div>
            </div>
          </label>
          <div className="row">
            <label className="cell u-1of3">
              <span>Current <br />Wounds</span>
              <input type="number" defaultValue={this.state.wounds} style={{color: '#933'}} onBlur={e => {if (e.target.value > -1) this.setState({wounds: Number(e.target.value)})}} />
            </label>
            <label className="cell u-1of3">
              <span>Wound <br />Threshold</span>
              <input type="number" readOnly value={Math.floor(this.state.morph.durability / 5)} />
            </label>
            <label className="cell u-1of3">
              <span>Death <br />Rating</span>
              <input type="number" readOnly value={-(Math.floor(this.state.morph.durability / 2))} />
            </label>
          </div>
          <div className="row">
            <div className="cell">
              <button onClick={e => {localStorage.setItem(this.state.name, JSON.stringify(this.state))}}>Save</button>
            </div>
            <div className="cell">
              <button onClick={e => {this.setState(JSON.parse(localStorage.getItem(this.state.name)))}}>Load</button>
            </div>
          </div>
        </div>
        <div className="cell statblock">
          <label>
            <span>Lucidity</span>
            <div className="row">
              <div className="cell"><input type="number" defaultValue={this.state.aptitudes[6] * 2} style={{color: '#933'}} /></div>
              <div className="cell u-1of5"><input type="text" disabled value="/" style={{background: '#fff', border: '#fff'}} /></div>
              <div className="cell"><input type="number" readOnly value={this.state.aptitudes[6] * 2} /></div>
            </div>
          </label>
          <div className="row">
            <label className="cell u-1of3">
              <span>Current <br />Trauma</span>
              <input type="number" defaultValue={this.state.traumas} style={{color: '#933'}} onBlur={e => {this.setState({traumas: Number(e.target.value)})}} />
            </label>
            <label className="cell u-1of3">
              <span>Trauma <br />Threshold</span>
              <input type="number" readOnly value={Math.floor(this.state.aptitudes[6] / 2.5)} />
            </label>
            <label className="cell u-1of3">
              <span>Insanity <br />Rating</span>
              <input type="number" readOnly value={-(this.state.aptitudes[6] * 2)} />
            </label>
          </div>
        </div>
        <div className="cell statblock skills">
          {skills}
        </div>
      </div>
    );

    return (
      <div className="App">
        {charSheetHeader}
        {this.state.route === '' ? charSheetBody : ''}
      </div>
    );
  }
}

export default App;

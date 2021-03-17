
import React, { Component } from 'react';

const audios=["https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/20[kb]ETOM_H.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/31[kb]ETOM_L.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/22[kb]ETOM_M.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/20[kb]BASSELEC.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/35[kb]BASSFNK1.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/22[kb]BASSFNK2.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/14[kb]BD1_ELEC.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/29[kb]BD2_REV.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/15[kb]BD3_ACOU.wav.mp3"];

const keyChar=["Q","W","E","A","S","D","Z","X","C"];


function SoundButton(props){
  return(
      <button
        className="drum-pad"
        onClick={props.onClick}
        id={props.description}>{keyChar[props.value]}
        <audio className="clip" src={audios[props.value]} id={keyChar[props.value]}>
        </audio>
      </button>
  );

}




class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      power:true,
      volume:0.3,
      displayText:"@fotsme"
    }
    this.handleClick=this.handleClick.bind(this);
    this.getDescription=this.getDescription.bind(this);
    this.handleVolume=this.handleVolume.bind(this);
    this.handlePower=this.handlePower.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown',(e)=>this.handleClick(keyChar.indexOf(e.key.toUpperCase())));
    keyChar.map(item=>document.getElementById(item).load());
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',(e)=>this.handleClick(keyChar.indexOf(e.key.toUpperCase())));
  }


  getDescription(i){
      let audiosSplited=audios[i].split("/");
      let wantedString = audiosSplited[audiosSplited.length-1].match(/\w\w\w\w+/);
      return wantedString[0];
  }

  renderSoundButton(i){
    return(
    <SoundButton onClick={()=>this.handleClick(i)} value={i} description={this.getDescription(i)}/>
      );
  }

  handleClick(i){
    if (this.state.power){
      let audio = document.getElementById(keyChar[i]);
	  audio.volume=this.state.volume;
	  audio.currentTime=0;
	  audio.play();
      let button = document.getElementById(this.getDescription(i));
      button.style.transform="translateY(4px)";
      button.style.backgroundColor="#f5c444";
      setTimeout(function(){
        button.style.transform="translateY(0px)";
        button.style.backgroundColor="#f7e018";
      },40);
      this.setState({
        displayText:this.getDescription(i)
      })
    }
  }

  handleVolume(event){
    this.setState({
      volume:event.target.value/100,
      displayText:"Volume: "+event.target.value
    })
  }

  handlePower(event){
    this.setState({
      power:event.target.checked
    })
  }

  render(){
    return(
       <div id="drum-machine">
        <div id="pads-container">
          {this.renderSoundButton(0)}
          {this.renderSoundButton(1)}
          {this.renderSoundButton(2)}
          {this.renderSoundButton(3)}
          {this.renderSoundButton(4)}
          {this.renderSoundButton(5)}
          {this.renderSoundButton(6)}
          {this.renderSoundButton(7)}
          {this.renderSoundButton(8)}
        </div>
        <section id="configuration">
          <div id="power-container">
            <p><label for="power">Power</label></p>
            <label class="switch">
             <input type="checkbox" id="power" checked={this.state.power} onClick={this.handlePower}></input>
             <span class="slider"></span>
            </label>
          </div>
          <div id="display-container">
            <p id="display">{this.state.displayText}
            </p>
          </div>
          <div id="volume-container">
            <p><label for="volume">Volume</label></p>
            <input className="volume-slider" id="volume" value={this.state.volume*100} type="range" min="0" max="100" onChange={this.handleVolume}></input>
          </div>
          <div id="set">
          </div>
        </section>
      </div>
    );
  }
}

export default DrumMachine;

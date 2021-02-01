
import React, { Component } from 'react';

const audios=["https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/94[kb]80s-CRASH2.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/73[kb]80s-CRASH3.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/7[kb]80s-HHCLOSE1.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/5[kb]80s-HHCLOSE2.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/38[kb]80s-HHOPEN2.aif.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/9[kb]80s-HICONGA.aif.mp3"];

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
          <div id="power">
            <p>Power</p>
            <label class="switch">
             <input type="checkbox" checked={this.state.power} onClick={this.handlePower}></input>
             <span class="slider"></span>
            </label>
          </div>
          <div id="display-container">
            <p id="display">{this.state.displayText}
            </p>
          </div>
          <div id="volume-container">
            <p>Volume</p>
            <input className="volume-slider" value={this.state.volume*100} type="range" min="0" max="100" onChange={this.handleVolume}></input>
          </div>
          <div id="set">
          </div>
        </section>
      </div>
    );    
  }
}

export default DrumMachine;
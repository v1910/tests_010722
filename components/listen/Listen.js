//Listen.js------------------

import React from 'react';

import { useSelector } from 'react-redux';

import './Listen.css';

import  { ShowCurrentListen } from "../showCurrentListen/ShowCurrentListen.js";

import  { upButton } from "../upButton/upButton.js";


let showHideListen        = null;

let showCurrentListenWork = null;

let showHideListenText    = null;

let UP_btn_visibility     = null;


export function Listen() {
//console.log('Listen:  +++++++++++++++++++++++');
    
    showHideListen      = useSelector((store) => store.showHideListen);

    showHideListenText  = useSelector((store) => store.showHideListenText);


    if(showHideListenText){
        UP_btn_visibility = {display: 'block'} 
      } else {
        UP_btn_visibility = {display: 'none'}; 
      } 

//console.log('Listen:  showHideListen=',showHideListen);

    let UP_button_listen = <button id='footerBtnListen' style={UP_btn_visibility} onClick= {upButton}>UP</button>;

    if(showHideListen === 'showHideListen') showCurrentListenWork = <ShowCurrentListen />
    else {
        showCurrentListenWork = null;
        UP_button_listen      = null;
    } 

    return <section id="listen_wrapper">
        {showCurrentListenWork}
        {UP_button_listen}
    </section>
}//end of Listen.js

//Phrases.js------------------
// Show Phrases

import React from 'react';

import './Phrases.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  { ShowCurrentPhrases } from "../showCurrentPhrases/ShowCurrentPhrases.js";

import  { upButton } from "../upButton/upButton.js";


let showHidePhrases             = null;

let showCurrentPhrasesWork      = null;

let currentPhrases              = null;

let currentPhrasesServer        = null;

let phrases_wrapper_visibility  = null;


export function Phrases() {
//console.log('Phrases +++++++++++')        

    showHidePhrases = useSelector((store) => store.showHidePhrases);

    currentPhrases = useSelector((store) => store.currentPhrases);

    phrases_wrapper_visibility = useSelector((store) => store.phrases_wrapper_visibility);

    let dispatch = useDispatch();
    
    if(currentPhrases !== null) {
        currentPhrasesServer = '/get' + currentPhrases;
    } else currentPhrasesServer = '/home';


//console.log('Phrases: currentPhrases=',currentPhrases);
//console.log('Phrases: phrases_wrapper_visibility=',phrases_wrapper_visibility);

    const axios = require('axios');

    async function makeGetRequest() {

    let res = await axios.get(currentPhrasesServer);

    let data = res.data;
    //  console.log('Phrases: /getPhrasalVerbs data=', data);

    dispatch({type: 'ShowCurrentPhrases', 
        payload: {
            phrases: data
        }
    })

    }

    makeGetRequest();



//console.log('Phrases: showHidePhrases=',showHidePhrases);     
//console.log('Phrases: showCurrentPhrasesWork=',showCurrentPhrasesWork);

    let phrases_button = <button id='footerBtnListen'  onClick= {upButton}>UP</button>;

    if(showHidePhrases === 'showHidePhrases') showCurrentPhrasesWork = <ShowCurrentPhrases />
    else {
        showCurrentPhrasesWork = null;
        phrases_button         = null;
    } 

    return <section id="phrases_wrapper" style={phrases_wrapper_visibility}>

        {showCurrentPhrasesWork}
        {phrases_button}

    </section>    
}//end of Phrases.js


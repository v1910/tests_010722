//Words.js------------------

import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import  { ShowWordTest } from "../showWordTest/ShowWordTest.js";

export function Words() {
//console.log('Words +++++++++++++++++++++++');   

    let showHideWords = useSelector((store) => store.showHideWords);
     
    let showCurrentWordsWork = null;

    useEffect(() => {
        if(showHideWords === 'showHideWords') {
            let id_word = 'input_input_word';  
//            let id_word = 'desc';              
//console.log('current_question=',current_question);                    
            let first_word = document.getElementById(id_word);
            
//console.log('HeaderTestsList id_test1=',id_test1);                 
            first_word.scrollIntoView(true);
            
        };//if
    })//useEffect

    if(showHideWords === 'showHideWords') {
        showCurrentWordsWork = <ShowWordTest /> //<ShowCurrentTest parCallback = {testCallback} />;
    }
    else showCurrentWordsWork = null;
    
    return <section id="words_wrapper">
                {showCurrentWordsWork}
            </section>
}

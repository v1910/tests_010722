//HeaderListenList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  "./HeaderListenList.css";

//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";


//let list_tests_wrapper      = null;

let nAudio                  = null;

let list_listen_wrapper     = null;

let all_input_sections      = null;

let all_input_sectionsDB    = null;


export function HeaderListenList() {

//console.log('HeaderTestsList -------------');


    let dispatch = useDispatch();  

    
    nAudio                  = useSelector((store) => store.nAudio);

    list_listen_wrapper     = useSelector((store) => store.list_listen_wrapper);

    all_input_sections      = useSelector((store) => store.all_input_sections);

    all_input_sectionsDB    = useSelector((store) => store.all_input_sectionsDB);

    
/*
    const currentTests = useSelector((store) => store.currentTest);

    list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 
*/
//console.log('1 HeaderistenList:  list_listen_wrapper=',list_listen_wrapper);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';
/*
    useEffect(() => {
        fetch('/getAllInsertSections')
        .then(response => response.json())
        .then(all_input_sectionsDB => {           
//console.log('Statistics: /getAllInsertSections all_input_sectionsDB=',all_input_sectionsDB);            
            dispatch({type: 'Statistics_AllInsertSectionsDB', 
            payload: {
                all_input_sectionsDB: all_input_sectionsDB[0],
                all_input_sections:   all_input_sectionsDB[0]
            }
            })
        })
    });
*/
//console.log('Statistics: /getAllInsertSections all_input_sections=',all_input_sections);            

    for(let kk = 1; kk <= nAudio; kk++){
            work3 = 'STORY' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_listen_list" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderListenList', 
                                                                                payload: {
                                                                                    currentAudio:       kk-1, 
                                                                                    showHideTest:       'showHideListen',
                                                                                    showHideWords:      'showHideListen',  
                                                                                    showHideListen:     'showHideListen',                                                                                  
                                                                                    showHidePhrases:    'showHideListen',
                                                                                    showHideJokes:      'showHideListen',
                                                                                    showHideStatistics: 'showHideListen',
                                                                                    showHideListenText: false,
                                                                                    phrases:            '',
                                                                                    list_tests_wrapper: 'hidden',
                                                                                    list_words_wrapper: 'hidden',
                                                                                    statistics_wrapper_visibility: {display: 'none'},
                                                                                    phrases_wrapper_visibility:    {display: 'none'},
                                                                                    all_input_sections:  
                                                                                        {
                                                                                            all_input_tests: all_input_sections.all_input_tests,
                                                                                            all_input_words: all_input_sections.all_input_words,
                                                                                            all_input_listen: all_input_sections.all_input_listen + 1,
                                                                                            all_input_phrases: all_input_sections.all_input_phrases,
                                                                                            all_input_jokes: all_input_sections.all_input_jokes,
                                                                                            all_input_statistics: all_input_sections.all_input_statistics
                                                                                        }
                                                                                }
                                                                            })
                                                            }
                            >
                                {work3}
                            </div>)
    }

    if(list_listen_wrapper === 'visible') return work2
    else return null;

}// end of HeaderListenList------------



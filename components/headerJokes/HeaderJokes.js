
//HeaderJokes.js------------------
//Show Jores menu

import React from 'react';

import { useEffect } from 'react';

//import {HeaderJokesList} from "../headerJokesList/HeaderJokesList.js";

import  "./HeaderJokes.css";

import { useSelector, useDispatch } from 'react-redux';


let list_jokes_wrapper      = null;
let all_input_sections      = null;
let all_input_sectionsDB    = null;


export function HeaderJokes() {

//    console.log('HeaderJokes-----');  


    function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------
        
//console.log('HeaderListen: mouseEnterList--------------')
//console.log('2 HeaderListen:  list_tests_wrapper=',list_tests_wrapper);
        
        dispatch({  type: 'HeaderJokes_mouseEnterList', 
                payload: {
                    list_jokes_wrapper: 'visible'
                    
                }
        });
        
    }//end of mouseEnterList--------------------


    function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
//console.log('HeaderListen: mouseLeaveList-------')
                dispatch({  type: 'HeaderJokes_mouseLeaveList', 
                            payload: {
                                list_jokes_wrapper: 'hidden'
                            }
                });
    }// end of mouseLeaveList------------------------


    let dispatch = useDispatch();


    //let work = null;

    list_jokes_wrapper      = useSelector((store) => store.list_jokes_wrapper);

    all_input_sections      = useSelector((store) => store.all_input_sections);

    all_input_sectionsDB    = useSelector((store) => store.all_input_sectionsDB);

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

    let menuJokes = 
    <div id="header_menu_jokes" className="header_menu_item">
        Jokes
    </div>

/*
    if(list_jokes_wrapper === 'visible') {
        work =  (<div id="list_jokes_wrapper" style={{visibility:{list_jokes_wrapper}}}>
                    <HeaderJokesList />
                </div>)
    }
    else work = null;
*/    
    
    return  (
            <div  id="header_menu_jokes_cont_id"  
                  fontSize="11px" 
                  onClick =    {() => {   dispatch({  type: 'HeaderJokes', 
                                                        payload: {
                                                            showHideTest:       'showHideJokes',
                                                            showHideWords:      'showHideJokes',  
                                                            showHideListen:     'showHideJokes',                                                                                  
                                                            showHidePhrases:    'showHideJokes',    
                                                            showHideJokes:      'showHideJokes',
                                                            showHideStatistics: 'showHideJokes',
                                                            list_tests_wrapper: false,
                                                            list_words_wrapper: false,
                                                            list_listen_wrapper:false,
                                                            phrases:            '',
                                                            statistics_wrapper_visibility: {display: 'none'},
                                                            phrases_wrapper_visibility:    {display: 'none'},
                                                            all_input_sections:  
                                                                {
                                                                    all_input_tests: all_input_sections.all_input_tests,
                                                                    all_input_words: all_input_sections.all_input_words,
                                                                    all_input_listen: all_input_sections.all_input_listen,
                                                                    all_input_phrases: all_input_sections.all_input_phrases,
                                                                    all_input_jokes: all_input_sections.all_input_jokes + 1,
                                                                    all_input_statistics: all_input_sections.all_input_statistics
                                                                }
                                                        }
                                                    });

                                        }
                                }                                     
            >
                {menuJokes}
            </div>
    )
}//end of HeaderJokes --------------------
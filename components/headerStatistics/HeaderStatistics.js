//HeaderStatistics.js------------------
//Show Statistics menu

import React from 'react';

import { useEffect } from 'react';

import  "./HeaderStatistics.css";

import { useSelector, useDispatch } from 'react-redux';

let showHideStatistics  = null;
let all_input_sections  = null;


export function HeaderStatistics() {

//    console.log('HeaderStatistics-----');  

    showHideStatistics  = useSelector((store) => store.showHideStatistics);

    all_input_sections  = useSelector((store) => store.all_input_sections);


    let dispatch = useDispatch();

    let menuStatistics = 
    <div id="header_menu_statistics" className="header_menu_item">
        Statistics
    </div>

    
    return  (
            <div  id="header_menu_statistics_cont_id"  
                  fontSize="11px" 
                  onClick =    {() => {   dispatch({  type: 'HeaderStatistics', 
                                                        payload: {
                                                            showHideTest:       'showHideStatistics',
                                                            showHideWords:      'showHideStatistics',  
                                                            showHideListen:     'showHideStatistics',                                                                                  
                                                            showHidePhrases:    'showHideStatistics',    
                                                            showHideJokes:      'showHideStatistics',
                                                            showHideStatistics: 'showHideStatistics',
                                                            list_tests_wrapper: false,
                                                            list_words_wrapper: false,
                                                            list_listen_wrapper:false,
                                                            phrases:            '',
                                                            statistics_wrapper_visibility: {display: 'block'},
                                                            all_input_sections:
                                                                {
                                                                  all_input_tests:      all_input_sections.all_input_tests,
                                                                  all_input_words:      all_input_sections.all_input_words,
                                                                  all_input_listen:     all_input_sections.all_input_listen,
                                                                  all_input_phrases:    all_input_sections.all_input_phrases,
                                                                  all_input_jokes:      all_input_sections.all_input_jokes,
                                                                  all_input_statistics: all_input_sections.all_input_statistics + 1
                                                                },
                                                            phrases_wrapper_visibility: {display: 'none'}
                                                        }
                                                    });

                                        }
                                }                                     
            >
                {menuStatistics}
            </div>
    )
}//end of HeaderStatistics --------------------
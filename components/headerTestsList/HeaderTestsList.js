//HeaderTestsList.js------------------

import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderTestsList.css";

//import  "../scrollToTopBtn/scrollToTopBtn.css";

//import  "../scrollToTopBtn/scrollToTopBtn.js";


//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";

let list_tests_wrapper        = null;

let all_input_sections        = null;

let WHY_botton_visibility     = null;


export function HeaderTestsList() {

//console.log('HeaderTestsList -------------');


    let dispatch = useDispatch();  

    
    const tests           = useSelector((store) => store.tests);

    const currentTest     = useSelector((store) => store.currentTest);

    list_tests_wrapper    = useSelector((store) => store.list_tests_wrapper); 

    all_input_sections    = useSelector((store) => store.all_input_sections); 

    WHY_botton_visibility = useSelector((store) => store.WHY_botton_visibility); 


//console.log('1 HeaderTestsList:  all_input_sections=',all_input_sections);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
//console.log('HeaderTestsList:  currentTest=',currentTest);

//    first_test.addEventListener('click', function(){
//console.log('ggggggggggggg');
//        return false;
//    });

//    first_test.click();


//    let a_link = <a href={id_test1} style={a_style}>test</a>;


    let work2 = [];
    let work3 = '';

//    work_state_test[0] = false;

//    const passNumberTest = e => dispatch({type: 'SET_TESTS', currentTest: e.currentTarget.value});


    for(let kk = 1; kk <= tests.length; kk++){
            work3 = 'TEST' + kk + '(B1)';
            work2[kk-1] =  (<div id={work3} class="menu_test_list" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderTestsList', 
                                                                                payload: {
                                                                                    currentTest:        kk-1, 
                                                                                    showHideTest:       true,
                                                                                    list_tests_wrapper: 'hidden',
                                                                                    countDownDate:      new Date().getTime(), // start time for the chosing test
                                                                                    countDownDate_qst:  new Date().getTime(), // start time for the chose question
                                                                                    state_test:         Array(tests[currentTest].length).fill(true),
                                                                                    state_green_red:    Array(tests[currentTest].length).fill([-1,-1]),
                                                                                    firstTimer:         null,
                                                                                    showHideTest:       'showHideTest',
                                                                                    showHideWords:      'showHideTest',
                                                                                    showHideListen:     'showHideTest',
                                                                                    showHidePrases:     'showHideTest',
                                                                                    showHideJokes:      'showHideTest',
                                                                                    showHideStatistics: 'showHideTest',
                                                                                    prases:             null,
                                                                                    phrases_wrapper_visibility: {display: 'none'},
                                                                                    WHY_botton_visibility: WHY_botton_visibility.fill({display: 'none'}),
                                                                                    congrFinishTest:    null,
                                                                                    up:                 false,
                                                                                    all_input_sections:  
                                                                                        {
                                                                                            all_input_tests: all_input_sections.all_input_tests + 1,
                                                                                            all_input_words: all_input_sections.all_input_words,
                                                                                            all_input_listen: all_input_sections.all_input_listen,
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

    if(list_tests_wrapper === 'visible') return work2
    else return null;

}// end of HeaderTestsList------------

//                                               fontSize="16px" 

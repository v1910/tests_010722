//HeaderPhrasesList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  "./HeaderPhrasesList.css";


let list_test_wrapper       = null;

let list_words_wrapper      = null;

let list_listen_wrapper     = null;

let nPhrases                = null;

let list_phrases_wrapper    = null;

let phrases_collections     = null;

let all_input_sections      = null;

let all_input_sectionsDB    = null;


export function HeaderPhrasesList() {

//console.log('HeaderPhrasesList -------------');


    let dispatch = useDispatch();  

    
    list_phrases_wrapper  = useSelector((store) => store.list_phrases_wrapper);

    phrases_collections   = useSelector((store) => store.phrases_collections);

    all_input_sections    = useSelector((store) => store.all_input_sections);

    all_input_sectionsDB  = useSelector((store) => store.all_input_sectionsDB);

    

    nPhrases = phrases_collections.length;

//console.log('1 HeaderPhrasesList:  list_phrases_wrapper=',list_phrases_wrapper);
//console.log('HeaderTestsList phrases_collections=',phrases_collections);
    
    let work2 = [];
    let work3 = '';

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

    for(let kk = 1; kk <= nPhrases; kk++){
            work3 = phrases_collections[kk-1].toUpperCase();
            work2[kk-1] =  (<div id={work3} class="menu_phrases_list" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                                onClick =    {() => {   dispatch({  type: 'HeaderPhrasesList', 
                                                                                    payload: {
                                                                                        currentPhrases:     phrases_collections[kk-1], 
                                                                                        showHideTest:       'showHidePhrases',
                                                                                        showHideWords:      'showHidePhrases',  
                                                                                        showHideListen:     'showHidePhrases',                                                                                  
                                                                                        showHidePhrases:    'showHidePhrases',    
                                                                                        showHideJokes:      'showHidePhrases',
                                                                                        showHideStatistics: 'showHidePhrases', 
                                                                                        list_tests_wrapper: false,
                                                                                        list_words_wrapper: false,
                                                                                        list_listen_wrapper:false,
                                                                                        statistics_wrapper_visibility: {display: 'none'},
                                                                                        phrases_wrapper_visibility:    {display: 'block'},
                                                                                        phrasesTitle:       work3,
                                                              
                                                                                        all_input_sections:  
                                                                                        {
                                                                                            _id: 0,
                                                                                            all_input_tests: all_input_sections.all_input_tests,
                                                                                            all_input_words: all_input_sections.all_input_words,
                                                                                            all_input_listen: all_input_sections.all_input_listen,
                                                                                            all_input_phrases: all_input_sections.all_input_phrases + 1,
                                                                                            all_input_jokes: all_input_sections.all_input_jokes,
                                                                                            all_input_statistics: all_input_sections.all_input_statistics
                                                                                        }
                                                                                    }
                                                                                });

                                                                    }
                                                            }
                            >
                                {work3}
                            </div>)
    }

//console.log('HeaderPhrasesList list_phrases_wrapper=',list_phrases_wrapper);

    if(list_phrases_wrapper === 'visible') return work2
    else return null;


}// end of HeaderListenList------------

/*

let dispatch = useDispatch();  

useEffect(() => {
  fetch('/getGreatings')
  .then(response => response.json())
  .then(phrases => {
    dispatch({type: 'ShowCurrentPhrases', 
      payload: {
        phrases: phrases
      }
    })

  })
});

*/
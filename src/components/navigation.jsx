import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function navigation() {
  return (
    <div>
        <div id='navbg'>
        <div className="navu">
        <input type="text" placeholder="Search.."></input>    
        <a id="dropdown" href="#">Relevance
        <FontAwesomeIcon className='icons' icon={icon({name: 'chevron-down', style: 'solid'})} flip style={{color: "#343232",}} />
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        </a>
         <a id="dropdown2" href="#contact">All brands
         <FontAwesomeIcon className='icons' icon={icon({name: 'chevron-down', style: 'solid'})} flip style={{color: "#343232",}} />
         <div class="dropdown-content2">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
         </a>
        </div>
        </div>
    </div>
  )
}

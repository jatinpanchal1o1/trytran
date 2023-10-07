import React from 'react'
import Cards from '../components/carscards';
import BMW from '../Images/car.jpg';
import Cadilla from '../Images/Cadillac.jpg';
import Mercedes from '../Images/mercedes.jpg';
import Toyota from '../Images/toyota rav4.jpg';
import Urus from '../Images/urus.jpg';
import Volks from '../Images/Volks.jpg';

export default function pagination() {
  return (
    <div>
      <div id="flex-box">
        <Cards img={Cadilla} carname="Cadilla" alt='Cadilla' model="2021" numofpeople="6" gastype="Gasoline" km="7" type="Manual" price="950"/>
        <Cards img={BMW} carname="BMW GT" alt='BMW GT' model="2023" numofpeople="2" gastype="Gasoline" km="12" type="Manual" price="750"/>
        <Cards img={Mercedes} carname="Mercedes" alt='Mercedes' model="2018" numofpeople="5" gastype="Gasoline" km="11" type="Manual" price="850"/>
        <Cards img={Toyota} carname="Toyota" alt='Toyota' model="2020" numofpeople="4" gastype="Gasoline" km="20" type="Manual" price="650"/>
        <Cards img={Urus} carname="Urus" alt='Urus' model="2021" numofpeople="4" gastype="Gasoline" km="12" type="Manual" price="950"/>
        <Cards img={Volks} carname="Volks" alt='Volks' model="2022" numofpeople="4" gastype="Gasoline" km="22" type="Manual" price="550"/>
      </div>
    <div id='pagenav'>
        <div className="pagecount">
            <p>6 from 129</p>
        </div>
        <div class="pagination">
            <a href="#">&#129136;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&#129138;</a>
        </div>
    </div>
    </div>
  )
}

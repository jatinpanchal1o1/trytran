import React from 'react' 
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function carscards(props) {
  return (
    <div id='card-cars'>
       <div class="card">

                <img src={props.img} alt={props.alt}/>
                <div className='img-title'>
                  <h3>{props.carname}</h3>
                  <h5>{props.model}</h5>
                </div>
                <div className="img-spec">
                  <div className="spec">
                  <FontAwesomeIcon className="cardsicon" icon={icon({name: 'user', style: 'regular'})} style={{color: "#4999ec",}} />
                    <p>{props.numofpeople} People</p>
                  </div>
                  <div className="spec">
                  <FontAwesomeIcon className="cardsicon" icon={icon({name: 'gas-pump', style: 'solid'})} style={{color: "#4999ec",}} />
                    <p>{props.gastype}</p>
                  </div>
                </div>
                <div className="img-spec" id='img-spec2'>
                  <div className="spec">
                  <FontAwesomeIcon className="cardsicon" icon={icon({name: 'gauge', style: 'solid'})} style={{color: "#4999ec",}} />
                    <p>{props.km}km/1-litre</p>
                  </div>
                  <div className="spec">
                  <FontAwesomeIcon className="cardsicon" icon={icon({name: 'car', style: 'solid'})} style={{color: "#4999ec",}} />
                    <p>{props.type}</p>
                  </div>
                </div>
                <hr/>
                <div className='card-bottom'>
                 <div className='bottom-title'>
                  <h3>${props.price}</h3>
                  <h5>/month</h5>
                  </div>
                  <div className='bottom-title'>
                  <FontAwesomeIcon className="cardsicon-bottom" icon={icon({name: 'heart', style: 'regular'})} style={{color: "#4999ec",}} />
                  <Button variant="primary" size="sm">Rent now</Button>
                  </div>
                </div>
        </div>
    </div>
  )
}

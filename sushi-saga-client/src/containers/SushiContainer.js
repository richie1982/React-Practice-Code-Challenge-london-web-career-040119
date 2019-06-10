import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log("props", props)
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi, index) => {
          return <Sushi eatenSushi={props.eatenSushi} sushi={sushi} key={index} deductWallet={props.deductWallet} selectSushi={props.selectSushi}/>
          })}

        <MoreButton handleMoreSushi={props.handleMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
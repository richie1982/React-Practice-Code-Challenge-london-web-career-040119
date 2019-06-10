import React, { Fragment } from 'react'

class Sushi extends React.Component  {

  // state = {
  //   eaten: false
  // }

  // eatSushi = () => {
  //   this.setState({eaten: !this.state.eaten})
  //   this.props.deductWallet(this.props.sushi.price)
  // }

  render () {
    // console.log("props", this.props.sushi)
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.props.selectSushi(this.props.sushi)}>
          {this.props.eatenSushi.find(el => el === this.props.sushi)
            ? null
            :<img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )

  }
}

export default Sushi

// {
//   "id": 1,
//   "name": "Tako Supreme",
//   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
//   }
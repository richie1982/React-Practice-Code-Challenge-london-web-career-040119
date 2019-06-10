import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    wallet: 100,
    selectedSushi: null,
    sushiIndex: 0
  }

  filterSushi = () => {
    const i = this.state.sushiIndex
    return this.state.sushis.slice(i, i + 4)
  }

  handleMoreSushi =() => {
    this.setState({sushiIndex: this.state.sushiIndex + 4})
  }

  deductWallet = (price) => {
      this.setState({ wallet: this.state.wallet - price })
  }

  selectSushi = (sushi) => {
    this.setState({ selectedSushi: sushi })
    if (!this.state.eatenSushi.find(el => el === sushi) && this.state.wallet >= sushi.price) {
      this.setState({ eatenSushi: [...this.state.eatenSushi, sushi] })
      this.deductWallet(sushi.price)
    }
  }

  sushiArray = () => {
    if (this.state.selectedSushi) {
      return this.filterSushi().filter(sushi => sushi.id !== this.state.selectedSushi.id)
    } else {
      return this.filterSushi()
    }
  }

  getSushis = () => {
    fetch(API)
        .then(resp => resp.json())
        .then(sushis => this.setState({sushis}))

  }
  
  componentDidMount () {
    this.getSushis()
    // console.log('App mounted!')
  }

  render() {
    console.log(this.state.eatenSushi.length)
    return (
      <div className="app">
        <SushiContainer  eatenSushi={this.state.eatenSushi} sushis={this.filterSushi()} deductWallet={this.deductWallet} handleMoreSushi={this.handleMoreSushi} selectSushi={this.selectSushi}/>
        <Table wallet={this.state.wallet} sushis={this.state.eatenSushi} eatenSushi={this.state.selectedSushi}/>
      </div>
    );
  }
}

export default App;
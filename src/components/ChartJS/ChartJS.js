import React from 'react';
const ChartJs = require("chart.js");

class Chart extends React.Component{
  
  renderMoneyChart = () => {
    let labelsData = [];
    let totalsData = [];
    
    for(let i=0; i<this.props.contributors.length; i++){
      labelsData.push(this.props.contributors[i].name);
    };

    for(let j=0; j<this.props.contributors.length; j++){
      totalsData.push(this.props.contributors[j].total);
    };

    const ctx = document.getElementById('my-chart-funding');
    new ChartJs(ctx, {
      type: "pie",
      data: {
        labels: labelsData,
        datasets: [
          {
            label: "# of Likes",
            data: totalsData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 100, 132, 0.2)",
              "rgba(54, 172, 235, 0.2)",
              "rgba(255, 246, 86, 0.2)",
              "rgba(255, 199, 132, 0.2)",
              "rgba(54, 172, 235, 0.2)",
              "rgba(255, 236, 86, 0.2)",
              "rgba(255, 299, 132, 0.2)",
              "rgba(54, 132, 235, 0.2)",
              "rgba(255, 106, 86, 0.2)",
              "rgba(255, 399, 132, 0.2)",
              "rgba(54, 152, 235, 0.2)",
              "rgba(255, 306, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }
  
  render(){

    let positions = {
      yes: [],
      no: [],
      other: []
    }
    
    this.props.voting.map((vote, i) => {
      if(vote.position.toLowerCase() === 'yes'){
        positions.yes.push(vote.description);
      } else if(vote.position.toLowerCase() === 'no'){
        positions.no.push(vote.description);
      } else {
        positions.other.push(vote.description);
      }
    })
  
    return(
      <>
        <button onClick={this.renderMoneyChart}>Who Funds This Representative?</button>
        <canvas id="my-chart-funding"></canvas>
        
        <h2>How Did My Representative Vote?</h2>
        <div id="yes">
          <h3>YES</h3>
          {positions.yes.map((description, i)=> (
            <p key={i}>{description}</p>
          ))}
        </div>
        <div id="no">
          <h3>NO</h3>
          {positions.no.map((description, i)=> (
            <p key={i}>{description}</p>
          ))}
        </div>
        <div id="other">
          <h3>PRESENT</h3>
          {positions.other.map((description, i)=> (
            <p key={i}>{description}</p>
          ))}
        </div>
      </>
    );
  }
}

export default Chart;
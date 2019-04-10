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

    console.log('chart data ', labelsData, totalsData);
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

  renderVotingChart = () => {
    let labelsData = [];
    let voteData = [];
    
    for(let i=0; i<this.props.voting.length; i++){
      labelsData.push(this.props.voting[i].description);
    };

    for(let j=0; j<this.props.voting.length; j++){
      voteData.push(this.props.voting[j].position);
    };

    console.log('chart data ', labelsData, voteData);
    const ctx = document.getElementById('my-chart-funding');
    new ChartJs(ctx, {
      type: "bar",
      data: {
        labels: labelsData,
        datasets: [
          {
            label: "# of Likes",
            data: voteData,
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
    return(
      <>
        <button onClick={this.renderMoneyChart}>Who Funds This Representative?</button>
        <canvas id="my-chart-funding"></canvas>
        
        <button onClick={this.renderVotingChart}>How Did My Representative Vote?</button>
        <canvas id="my-chart-voting"></canvas>
      </>
    );
  }
}

export default Chart;
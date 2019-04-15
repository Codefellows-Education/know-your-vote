import React from 'react';
import superagent from 'superagent';
import IndividualRep from '../individualRep/individualRep';
import ChartJS from '../ChartJS/ChartJS';

class DisplayReps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contributors: [],
      voting: []
    }
  }
  handleRepClick = async(repID) => {
    console.log('my rep id is ', repID);
    let URL = 'http://localhost:3001';
    let data = await superagent.get(`${URL}/loadrep/:id`).query({id: repID});

    let something = data.body.value;
    let contributors = something.contributors;
    let voting = something.voting;

    console.log('contributors', contributors, 'voting', voting);

    this.setState({ contributors: contributors });
    this.setState({ voting: voting });
  }

  render(){
    return(
      <>
        <section id="display-reps">
          <h2>Your district is:</h2>
          <p>Your Federal District: {this.props.district.federalDistrict}</p>
          <p>Your State District: {this.props.district.stateDistrict}</p>

          <h2>Your representatives are:</h2>
          <ul>
          {this.props.reps.map((rep, i)=> (
            <li key={i}>
              <button onClick={() => this.handleRepClick(rep.id)}>
                <h3 className="name">{rep.name}</h3>
                <img src={rep.img_url} alt={rep.name} />
                <p className="office">{rep.officialOffice}</p>
                <p className="phone">{rep.phone}</p>
                <p className="political-affilation">{rep.political_affiliation}</p>
                <p className="role">{rep.role}</p>
              </button>
              <p><a href={rep.website_url}>Website</a></p>
            </li>
          ))}
          </ul>
        </section>
        <IndividualRep contributors={this.state.contributors} voting={this.state.voting} />
        <ChartJS contributors={this.state.contributors} voting={this.state.voting} />
      </>
    );
  }
}

export default DisplayReps;

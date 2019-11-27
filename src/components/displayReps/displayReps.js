import React from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './displayReps.scss';

class DisplayReps extends React.Component{
  
  handleRepClick = async(repID, rep) => {
    console.log('my rep id is ', repID);
    let URL = 'https://know-your-vote-backend.herokuapp.com';
    let data = await superagent.get(`${URL}/loadrep/:id`).query({name: rep.name});

    let something = data.body.value;
    let contributors = something.contributors;
    let voting = something.voting;

    console.log('contributors', contributors, 'voting', voting);

    this.props.updateContributors(contributors);
    this.props.updateVoting(voting);
    this.props.showRepFunction(true);
    this.props.showRepsFunction(false);
    this.props.repFunction(rep);
  }

  render(){
    return(
      <>
          <h2>Your representatives are:</h2>
          <ul id="repsList">
            {this.props.reps.map((rep, i)=> (
              <li key={i}>
                
                  <h3 className="name">{rep.name}</h3>
                  <img src={rep.image_url} alt={rep.name} />
                  <p className="phone">{rep.phone}</p>
                  <p className="political-affilation">{rep.party}</p>
                  <p className="office">{rep.office}</p>
 
                <p><a href={rep.website_url}>Website</a></p>
              </li>
            ))}
          </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  showRep: state.data.showRep,
  showReps: state.data.showReps,
  rep: state.data.rep
});

const mapDispatchToProps = (dispatch, getState) => ({
  showRepFunction: (boo) => dispatch(actions.showRepFunction(boo)),
  showRepsFunction: (boo) => dispatch(actions.showRepsFunction(boo)),
  repFunction: (rep) => dispatch(actions.repFunction(rep))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayReps);

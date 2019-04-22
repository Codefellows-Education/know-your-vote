import React from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './displayReps.scss';

class DisplayReps extends React.Component{
  
  handleRepClick = async(repID, rep) => {
    console.log('my rep id is ', repID);
    let URL = 'http://localhost:3001';
    let data = await superagent.get(`${URL}/loadrep/:id`).query({id: repID});

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
        <section id="display-reps">
          <div id="district">
            <p>Your Federal District: {this.props.district.federalDistrict}</p>
            <p>Your State District: {this.props.district.stateDistrict}</p>
          </div>

          <h2>Your representatives are:</h2>
          <ul id="repsList">
            {this.props.reps.map((rep, i)=> (
              <li key={i}>
                <button onClick={() => this.handleRepClick(rep.id, rep)}>
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

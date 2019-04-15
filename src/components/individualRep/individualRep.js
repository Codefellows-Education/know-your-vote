import React from 'react';


class IndividualRep extends React.Component {
  render(){
    return (
      <>
        <h2>I am an IndividualRep</h2>
        <div>
          {this.props.contributors.map((contributor, index) => (
            <p key={index}>{contributor.name}</p>
          ))};
        </div>
      </>
    )
  }
}

export default IndividualRep;

// render() {
//   return (<div>
//   {this.state.people.map((person, index) => (
//       <p>Hello, {person.name} from {person.country}!</p>
//   ))}
//   </div>);
// }
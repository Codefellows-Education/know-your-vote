import React from 'react';
import superagent from 'superagent';
import DisplayReps from '../displayReps/displayReps';

class FindReps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      district: {},
      reps: []
    }
  }
  handleSubmit = async(e) => {
    e.preventDefault();

    let address = e.target.street.value;
    let city = e.target.city.value;
    let state = e.target.state.value;
    let fullAddress = `${address} ${city} ${state}`;

    let URL = `http://localhost:3001`

    let data = await superagent.get(`${URL}/representatives`).query({address: fullAddress});

    this.setState({ district: data.body.value.district });
    this.setState({ reps: data.body.value.reps });

  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let url = 'https://recordshelf-backend.herokuapp.com';
  //   let searchQuery = e.target.inputSearch.value;
  //   console.log(' 💿 search query 📀 ', searchQuery);
  //   let data = await superagent.get(`${url}/search`).query({ artist: searchQuery });

  //   this.setState({ dataBody: data.body });
  //   console.log(this.state.dataBody);
  // }
  render(){
    return(
      <>
        <section className="deck" >
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset>
              <legend>Who Are My Representives?</legend>
              <div id="address" className="card">
                <input type="text" name="street" id="street-address" placeholder="address" required />
                <input type="text" name="city" id="city-state-address" placeholder="city" required />
                <select name="state">
                  <option value="AK">AK</option>
                  <option value="AL">AL</option>
                  <option value="AR">AR</option>
                  <option value="AS">AS</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="GU">GU</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="PR">PR</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VA">VA</option>
                  <option value="VI">VI</option>
                  <option value="VT">VT</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
                <button>Find My Reps</button>
              </div>
            </fieldset>
          </form>
        </section>
        <DisplayReps district={this.state.district} reps={this.state.reps} />
      </>
    );
  }
}

export default FindReps;
import React from 'react'

class StudyTipsView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      localString:''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const input = e.target.value;
    this.setState({localString: input});
  }

  handleFormSubmit() {
    console.log('handleFormSubmit');
    const localString = this.state.localString;
    localStorage.setItem('localString', localString);
  }

    render() {
      return (
        <div>
          <h2>Spara något i LocalStorage och skriv ut</h2>
          <br />
          <form onSubmit={this.handleFormSubmit}>
            <label>
            Spara LocalString: <br/> <input value={this.state.localString} onChange={this.handleChange} />
            </label>
            <button type="submit">Spara Sträng</button>
          </form>
          <div>
            Du sparade: <br /> Sparat stuff renderas HÄR
          </div>
        </div>
      );
    }
  }
   
  export default StudyTipsView;
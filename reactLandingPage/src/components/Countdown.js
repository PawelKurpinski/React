import React, { Component } from 'react';
import moment from 'moment';

const hStyle = {
  fontSize: '45px',
};

class Countdown extends Component {
  constructor(props){
    super(props)

    this.state = {
    duration: this.getRemainingTime()
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({
      duration: this.getRemainingTime()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  getRemainingTime() {   /* moment is a library witch we nedd to install using npm */
    let now = moment(),
        newYear =  moment({year: now.year()+ 1}),
        diff = newYear.diff(now)
    return moment.duration(diff)
  }  

    // let now = new Date(),
    // newYear = new Date(now.getFullYear() + 1, 0, 1) 
    // /* +1 because we will compare current date with the one in a year 
    // or do sth like this ;) 0 i January and on is the first */
    // console.log(now, newYear) 


	render() {
    const {duration} = this.state

    return (
    <section className="hero is-success is-fullheight has-text-centered">
   	 <div className="hero-body">
      <div className="container">
        <h1 className="title" style={hStyle}>
          New Year is comming up soon ;) <br/>only in:
        </h1>
        <div className='section'>
                  <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">DAYS</p>
                <p className="title">{Math.floor(duration.asDays())}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">HOURS</p>      {/* padStart(2, '0')  this is ES2017 !! this allows me adding zero when there is only one digit hour*/}
                <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">MINUTES</p>
                <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">SECONDS</p>
                <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
	);
	}
}

export default Countdown;
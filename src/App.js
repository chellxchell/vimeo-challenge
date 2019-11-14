import React from 'react';
import './stylesheets/styles.scss';
import beams from './images/beams.jpg';
import TextBlock from './components/TextBlock';
import Section from './components/Section';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stack: false // state to keep track of columns stacking or not
    }
  }

  // sets state.stack to true when innerWidth changes
  // toggle between two column view and one column view
  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            stack: window.innerWidth < 1200
        });
    }, false);
  };

  render(){
    const className = this.state.stack ? 'column marginAuto' : 'row';
    const colClassName = this.state.stack ? '' : 'column column--1/2'; // toggle between column spanning 50%, and no column for stacking

    return (
      <div>
  
        <section className="monsoon">
          <Section title="MONSOON III" stack={this.state.stack} name="monsoon"/>
        </section>

        <section className="beams">
          <div className={className}>
            <TextBlock title="BEAMS" stack={this.state.stack} />
            <div className={colClassName}>
              <img src={beams} alt="beams"/>
            </div>
          </div>

          <Section title="Move2" stack={this.state.stack} name="move"/>
        </section>
      </div>
    );
  }
}

export default App;

import React from 'react';
import '../stylesheets/styles.scss';
import TextBlock from './TextBlock';

class Section extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const className = this.props.stack ? 'column marginAuto' : 'row';
    let section;

    if (!this.props.stack){
      section = (
      <React.Fragment>
        <div className="column column--1/2">
        <img src={require(`../images/${this.props.name.toLowerCase()}.jpg`)} alt={this.props.name}/>
        </div>
        <TextBlock title={this.props.title} stack={this.props.stack} />
        </React.Fragment>
      )
    }
    else{
      section = (
        <React.Fragment>
          <TextBlock title={this.props.title} stack={this.props.stack} />
          <img src={require(`../images/${this.props.name.toLowerCase()}.jpg`)}/>
        </React.Fragment>
      )
    }

    return(
        <div className={className}>
            {section}
        </div>
    )
  }

}

export default Section;
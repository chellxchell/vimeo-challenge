import React from 'react';
import '../stylesheets/styles.scss';

class TextBlock extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // if its not stacked (large window size), make it a column thats 1/2 width
    const className = this.props.stack ? 'marginTop marginBottom' : 'column column--1/2';

    return(
      <div className={className}>
        <h1>{this.props.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }

}

export default TextBlock;
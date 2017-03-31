import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.state ={
      value : '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }
  handleClick(){
    this.setState({value:'你好啊'});
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
        <div onClick={this.handleClick}>点击我会显示:{this.state.value}</div>
      </div>
    );
  }
}
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});
function RadioOption(props){
  return(
    <lable>
      <input type="radio" value={props.value} name={props.name}/>
      {props.label}
    </lable>
  )
}

//父组件使用，props是指父组件的props
function renderChildren(props){

  return React.Children.map(props.children, child=>{
    if (child.type === RadioOption)
      return React.cloneElement(child, {
        name:props.name
      })
    else
      return child
  })
}

function RadioGroup(props){
  return(
    <div>
      {renderChildren(props)}
    </div>
  )
}


const Footer = React.createClass({
	render(){
		return(
			<footer className={this.props.name}>
      <RadioGroup name="hello">
        <RadioOption label="选项一" value="1" />
        <RadioOption label="选项一" value="1" />
        <RadioOption label="选项一" value="1" />
      </RadioGroup>
			</footer>
		)
	}
})

export default Footer
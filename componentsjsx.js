
class App extends React.Component {

    constructor(props) { //Es el metodo de las clases que nos permiten construir datos, y el unico valor que toma son las propiedades. 
        super(props); //super es un metodo para quitar heredacion y que las propiedades de la clase React component no se le pase a nuestro componente
    }
  
  
    render(){//metodo que nos dice que tenemos que mostrar
        return (
        <div>
            <PageTitle title="Register"/>
            <RegisterForm/>
        </div>
        )
    }
  
  
  }
  
  
  class PageTitle extends React.Component {
    constructor(props){
      super (props)
    } 
  
    render() {
      return(
        <div>
        <h1>{this.props.title}</h1>
        </div>  
      )
    }
  
  }
  
  class RegisterForm extends React.Component{
    constructor(props){
      super(props);
    }
  
    render() {
      
  
      return(
        <div>
            <InputTitle label="Name"/>
            <FormInput label="Name"/>
  
            <InputTitle label="Username"/>
            <FormInput label="Username"/>
  
            <InputTitle label="Email"/>
            <FormInput label="Email"/>
  
            <InputTitle label="Password"/>
            <FormInput label="Password"/>
  
            <SubmitButton label="Register"/>
        </div>
      )
    }
  }
  
  class InputTitle extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <p className="input-title">{this.props.label}</p>
        </div>
      )
    }
  }
  
  class FormInput extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div><input type="text" className="form-input" placeholder={this.props.label}/></div>
      )
    }
  
  }
  
  class SubmitButton extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div><button>{this.props.label}</button></div>
      )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById("app"));
  
  
  
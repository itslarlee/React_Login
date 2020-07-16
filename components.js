
class Boton extends React.Component {

  constructor(props) { //Es el metodo de las clases que nos permiten construir datos, y el unico valor que toma son las propiedades. 
      super(props); //super es un metodo para quitar heredacion y que las propiedades de la clase React component no se le pase a nuestro componente
  }


  render(){//metodo que nos dice que tenemos que mostrar
      return (
      <div>
          <button>{this.props.texto/*Esto sirve para que cada  boton sea independiente*/ }</button>
          <Hello msg='Hola como esta'/>
          <Hello msg='She said koniqiwa'/>
      </div>
      )
  }


}

class Hello extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {
      return(
          <h1>{this.props.msg}</h1>
      )
  }



}


class InputTitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div></div>
    )
  }
}

class FormInput extends React.Component {
}

class SubmitButton extends React.Component {

}






ReactDOM.render(<Boton texto='Holaa'/>, document.getElementById("app"));



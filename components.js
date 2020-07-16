
class App extends React.Component {

  constructor(props) { //Es el metodo de las clases que nos permiten construir datos, y el unico valor que toma son las propiedades. 
      super(props); //super es un metodo para quitar heredacion y que las propiedades de la clase React component no se le pase a nuestro componente
  }


  render(){//metodo que nos dice que tenemos que mostrar
      return (
      <div>
          <InputTitle label="Name"/>
          <FormInput/>
          <InputTitle label="Username"/>
          <FormInput/>
          <InputTitle label="Email"/>
          <FormInput/>
          <InputTitle label="password"/>
          <FormInput/>
      </div>
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






ReactDOM.render(<App/>, document.getElementById("app"));



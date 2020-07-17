// Comentarios realizados por André marcados al final con un 🍣. Yeehaw.

class App extends React.Component {

    /* Acá, tener cuidado, no es necesario explicar que hacen estructuras lógicas del lenguaje si lo que que buscas es
    documentar, por ejemplo, estos comentarios están bien si alguien no sabe qué es una clase, pero en este caso sería mejor 
    utilizar los comentarios para dar detalles de funcionalidades. En caso de que hicieras estos comentarios para ti mismo, 
    no hay problema, están bien. 🍣 */
    constructor(props) { //Es el metodo de las clases que nos permiten construir datos, y el unico valor que toma son las propiedades. 
        super(props); //super es un metodo para quitar heredacion y que las propiedades de la clase React component no se le pase a nuestro componente
    }
    /* Ten cuidado con los espacios a la hora de programar ya que puede ser muuuy difícil para las personas que lean tu código
    identificar donde inicia o termina algo. 🍣 */
  
    render(){//metodo que nos dice que tenemos que mostrar
        return (
        <div>
            <PageTitle title="Register"/>
            <RegisterForm/>
        </div>
        )
    }
  
  
  }
  
  /* Considero que esto debería llamarse FormTitle no PageTitle, una "PageTitle" sería más para algo global, por ejemplo, si
  la idea es utilizar este componente en un futuro para algo, podrías confundir a quien lo está utilizando. 🍣 */
  class PageTitle extends React.Component {
    constructor(props){
      super (props)
    } 
  
    render() {
      // Cuida los tabs.🍣
      return(
        <div> 
          <h1>{this.props.title}</h1>
        </div>  
      )
    }
  
  }
  
  /* Disculpa si estoy siendo muy quisquilloso respecto a como introduzco mi pensamiento a React, pero, analicemos que
  los formularios podrías hacer esto no un REGISTER form si no un login/register form, ya que, podrías condicionar el renderizado con
  una propiedad que te indique si el formulario que necesitas renderizar es el de registro o el de ingreso y  si el botón que debe de
  renderizar tendrá que registrar o logear a la persona, la idea es empaquetar las funcionalidades lo mejor posible. 🍣*/
  class RegisterForm extends React.Component{
    constructor(props){
      super(props);
    }
  
    render() {
      
      // El campo para contraseña recuerda debe de ser una contraseña, quizás deberías de pasar una propiedad que indique eso.
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
  
  /* Algo que me di cuenta y que es necesario para los Forms, es que necesitas manejar un estado de cada uno de los
  campos del form para luego sacar su contenido, de esta manera realmente no tenemos cómo referirnos a cada campo. 🍣 */
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


  // Buen trabajo Lee, me alegra saber que aplicas bien los conceptos técnicos de React. 🍣
  ReactDOM.render(<App/>, document.getElementById("app"));
  
  
  
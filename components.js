"use strict";

class App extends React.Component {
  constructor(props) {
    //Es el metodo de las clases que nos permiten construir datos, y el unico valor que toma son las propiedades. 
    super(props); //super es un metodo para quitar heredacion y que las propiedades de la clase React component no se le pase a nuestro componente
  }

  render() {
    //metodo que nos dice que tenemos que mostrar
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, {
      title: "Register"
    }), /*#__PURE__*/React.createElement(RegisterForm, null));
  }

}

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title));
  }

}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InputTitle, {
      label: "Name"
    }), /*#__PURE__*/React.createElement(FormInput, {
      label: "Name"
    }), /*#__PURE__*/React.createElement(InputTitle, {
      label: "Username"
    }), /*#__PURE__*/React.createElement(FormInput, {
      label: "Username"
    }), /*#__PURE__*/React.createElement(InputTitle, {
      label: "Email"
    }), /*#__PURE__*/React.createElement(FormInput, {
      label: "Email"
    }), /*#__PURE__*/React.createElement(InputTitle, {
      label: "Password"
    }), /*#__PURE__*/React.createElement(FormInput, {
      label: "Password"
    }), /*#__PURE__*/React.createElement(SubmitButton, {
      label: "Register"
    }));
  }

}

class InputTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "input-title"
    }, this.props.label));
  }

}

class FormInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-input",
      placeholder: this.props.label
    }));
  }

}

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, this.props.label));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
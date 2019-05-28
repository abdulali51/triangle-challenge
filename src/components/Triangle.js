'use strict';

class Triangle {

  constructor() {

    // Shortcuts to DOM Elements.
    this.form = document.getElementById('MyForm');
    this.userInput = document.querySelectorAll('.user-input');
    this.submitButton = document.getElementById('submit');

    // Validate all input fields on blur.
    this.userInput.forEach((element, index) => {
      element.addEventListener('blur', event => this.validateInput(event));
    });

    // Validate the submit button on click.
    this.submitButton.addEventListener('click', event => this.validateButton(event));
  }

  // Fires when blur event triggers on input fields.
  validateInput(event) {
    const id = event.target.id;
    const input = document.getElementById(id);
    const parent = input.parentElement;

    if (input.checkValidity()) {
      parent.classList.remove('ts-error');
      parent.nextSibling.nextSibling.style.display = 'none';
    } else {
      parent.classList.add('ts-error');
      parent.nextSibling.nextSibling.style.display = 'block';
    }
  }

  // Validates the form and perform further action.
  validateButton(event) {
    const id = event.target.id;
    let isValidForm = this.form.checkValidity();

    this.toggleBtnSpinner(id, true);
    this.checkErrors();
    isValidForm ? this.validateTriangle() : this.toggleBtnSpinner(id, false);
  }

  // Enables or disables the submit button depending on the values of the input field.
  toggleBtnSpinner(id, value) {
    document.getElementById(id).setAttribute('data-ts.busy', value);
  }

  // Checks input field errors on form submit and sets the focus on the first error input.
  checkErrors() {
    let errorInputs = [];

    this.userInput.forEach((element, index) => {
      let parent = element.parentElement;

      if (element.checkValidity()) {
        parent.classList.remove('ts-error');
        parent.nextSibling.nextSibling.style.display = 'none';
      } else {
        parent.classList.add('ts-error');
        parent.nextSibling.nextSibling.style.display = 'block';
        errorInputs.push(element);
      }
    });

    /* Set focus on the first error input. */
    errorInputs.length > 0 ? errorInputs[0].focus() : false;
  }

  // Validates if provided input can form a triangle.
  validateTriangle() {
    const a = parseInt(document.getElementById('firstSide').value);
    const b = parseInt(document.getElementById('secondSide').value);
    const c = parseInt(document.getElementById('thirdSide').value);

    /* Check if all sides are valid to form a triangle */
    if (a + b <= c || a + c <= b || b + c <= a) {
      let errMsg = 'Entered values cannot form a triangle.';
      this.notify('error', errMsg);
    } else {
      this.determineTriangleType(a, b, c);
    }
  }

  // Fires to show error or success message and reset form.
  notify(method, text) {
    ts.ui.Notification[method](text, {
      onaccept: () => {
        this.form.reset();
      }
    });
    this.toggleBtnSpinner('submit', false);
  }

  // Validates the type of Triangle.
  determineTriangleType(a, b, c) {
    let type = 'Entered sides will form a ';

    if (a == b && b == c) {
      /* If all sides are equal */
      type += 'Equilateral triangle.';
    } else if (a == b || a == c || b == c) {
      /* If any two sides are equal */
      type += 'Isosceles triangle.';
    } else {
      /* If none sides are equal */
      type += 'Scalene triangle.';
    }

    this.notify('info', type);
  }
}

export default Triangle;

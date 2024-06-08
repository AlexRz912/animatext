const DOM_ELEMENTS_INTERFACE = {
  insertDomElement: ({tag, id = null}) => !id ? `<${tag}></${tag}>` : `<${tag} id="${id}"></${tag}>`,

  buildParagraph: (letter) => `<p id="letter">${letter}</p>`,
  insertLetter: (letter, domElem) => domElem.innerText = letter,
  getDomElement: (elem) => document.querySelector(elem)
}

export default DOM_ELEMENTS_INTERFACE

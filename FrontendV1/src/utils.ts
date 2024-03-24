export function cleanElement(element) {
    element.innerHTML = '';
}

export function createHeadingTitle(h1Content, parentDiv) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    div.classList.add('headingDiv');
    h1.textContent = h1Content;
    h1.classList.add('mainH1');
    div.appendChild(h1);
    parentDiv.appendChild(div);
}

export function createListItem(h1Content, parentDiv) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = h1Content;
    h1.classList.add('listH1');
    div.appendChild(h1);
    parentDiv.appendChild(div);
}

export function createFormItem(
    labelText,
    formElement,
    inputType,
    inputName,
    optionalValue?
) {
    const label = document.createElement('label');
    label.textContent = labelText;
    formElement.appendChild(label);
    const nameInput = document.createElement('input');
    nameInput.type = inputType;
    nameInput.name = inputName;
    nameInput.value = optionalValue || null;
    formElement.appendChild(nameInput);
}

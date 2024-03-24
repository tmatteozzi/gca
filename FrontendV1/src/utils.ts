import { navigateToInsuredDetailPage } from './routes';

export function cleanElement(element) {
    element.innerHTML = '';
}

export function createHeadingTitle(
    h1Content: string,
    parentDiv: HTMLDivElement
) {
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

export function createPageContainer() {
    const appDiv = document.getElementById('app');
    if (appDiv) cleanElement(appDiv);

    const containerDiv = document.createElement('div');
    if (appDiv) appDiv.appendChild(containerDiv);

    return containerDiv;
}

export function renderInsureds(insureds, containerDiv, searchInput) {
    cleanElement(containerDiv);
    // RENDER INSUREDS AFTER SEARCH
    if (searchInput.value.trim() !== '') {
        insureds.forEach((insured) => {
            // INSURED CONTAINER
            const clientDiv = document.createElement('div');
            clientDiv.classList.add('insuredItem'); // Aplicar clase de estilo

            // INSURED NAME
            const nameText = document.createTextNode(
                `${insured.name} ${insured.lastName}`
            );

            // DETAILS BUTTON FOR EACH INSURED
            const detailButton = document.createElement('button');
            detailButton.textContent = 'Detalles';

            // EVENT HANDLER
            detailButton.addEventListener('click', () => {
                navigateToInsuredDetailPage(insured.id);
            });

            clientDiv.appendChild(nameText);
            clientDiv.appendChild(detailButton);
            containerDiv.appendChild(clientDiv);
        });
    }
}

export function createDropdown(labelText, form, name, options, selectedOption) {
    const label = document.createElement('label');
    label.textContent = labelText;
    form.appendChild(label);

    const dropdown = document.createElement('select');
    dropdown.name = name;
    options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        if (option === selectedOption) {
            optionElement.selected = true;
        }
        dropdown.appendChild(optionElement);
    });
    form.appendChild(dropdown);
}

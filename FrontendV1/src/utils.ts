import {
    navigateToInsuredDetailPage,
    navigateToPolicyDetailPage
} from './routes';

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

export function createListItem(title, content, parentDiv) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = title;
    h1.classList.add('listH1');
    h2.textContent = content;
    h2.classList.add('listH2');
    div.appendChild(h1);
    div.appendChild(h2);
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

export function renderInsureds(insureds, containerDiv, searchInput) {
    cleanElement(containerDiv);
    // RENDER INSUREDS AFTER SEARCH
    if (searchInput.value.trim() !== '') {
        insureds.forEach((insured) => {
            // INSURED CONTAINER
            const clientDiv = document.createElement('div');
            clientDiv.classList.add('insuredItem');

            // INSURED NAME
            const nameHeader = document.createElement('h2');
            nameHeader.textContent = `${insured.name} ${insured.lastName}`;

            // DETAILS BUTTON FOR EACH INSURED
            const detailButton = document.createElement('button');
            detailButton.textContent = 'Detalles';

            // EVENT HANDLER
            detailButton.addEventListener('click', () => {
                navigateToInsuredDetailPage(insured.id);
            });

            clientDiv.appendChild(nameHeader);
            clientDiv.appendChild(detailButton);
            containerDiv.appendChild(clientDiv);
        });
    }
}

export function renderPolicies(policies, insuredId, containerDiv) {
    policies.forEach((policy) => {
        // POLICY CONTAINER
        const policyDiv = document.createElement('div');
        policyDiv.classList.add('policyItem');

        // POLICY NAME
        const nameHeader = document.createElement('h2');
        nameHeader.textContent = `${policy.productName}`;

        // DETAILS BUTTON FOR EACH POLICY
        const detailButton = document.createElement('button');
        detailButton.textContent = 'Detalle';

        // EVENT HANDLER
        detailButton.addEventListener('click', () => {
            navigateToPolicyDetailPage(insuredId, policy.id);
        });

        // APPENDS
        policyDiv.appendChild(nameHeader);
        policyDiv.appendChild(detailButton);
        containerDiv.appendChild(policyDiv);
    });
}

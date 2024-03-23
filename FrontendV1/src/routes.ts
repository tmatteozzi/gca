import { cleanElement, createHeadingTitle, createListItem } from './utils';
import { getAllInsureds, getInsured } from './Insureds';
import { getAllPoliciesByUser, getPolicyById } from './Policies';

export async function showHomePage() {
    try {
        const insureds = await getAllInsureds();
        const appDiv = document.getElementById('app');
        if (appDiv) cleanElement(appDiv);

        // HEADING
        createHeadingTitle('Asegurados de {nombreUsuario}', appDiv);
        // INSURED SEARCH INPUT
        const searchInput = document.createElement('input');
        searchInput.placeholder = 'Buscar...';
        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();
            const filteredInsureds = insureds.filter((insured) =>
                `${insured.name.toLowerCase()} ${insured.lastName.toLowerCase()}`.includes(
                    searchText
                )
            );
            renderInsureds(filteredInsureds, containerDiv, searchInput);
        });
        appDiv && appDiv.appendChild(searchInput);

        // INSUREDLIST DIV
        const containerDiv = document.createElement('div');
        if (appDiv) appDiv.appendChild(containerDiv);
    } catch (error) {
        console.error('Error al cargar los clientes:', error);
    }
}

function renderInsureds(insureds, containerDiv, searchInput) {
    cleanElement(containerDiv);
    // SHOW CLIENTS WHEN USER PROMPTS
    if (searchInput.value.trim() !== '') {
        insureds.forEach((insured) => {
            // INSURED DIV
            const clientDiv = document.createElement('div');
            // CLIENT NAME
            const nameText = document.createTextNode(
                `${insured.name} ${insured.lastName}`
            );
            // BUTTON FOR EACH CLIENT
            const detailButton = document.createElement('button');
            detailButton.textContent = 'Detalles';
            // EVENT HANDLER
            detailButton.addEventListener('click', () => {
                navigateToInsuredDetailPage(insured.id);
            });
            // APPENDS
            clientDiv.appendChild(nameText);
            clientDiv.appendChild(detailButton);
            containerDiv.appendChild(clientDiv);
        });
    }
}

export async function showInsuredDetails(id) {
    try {
        const insured = await getInsured(id);
        const policies = await getAllPoliciesByUser(insured.id);
        const appDiv = document.getElementById('app');
        if (appDiv) cleanElement(appDiv);
        // INSURED CONTAINER DIV
        const containerDiv = document.createElement('div');
        // INSURED DETAILS
        createHeadingTitle(
            `${insured.name + ' ' + insured.lastName}`,
            containerDiv
        );
        createListItem(`${insured.address}`, containerDiv);
        createListItem(
            `${insured.birthDay.toLocaleDateString()}`,
            containerDiv
        );
        createListItem(`${insured.phone}`, containerDiv);
        createListItem(`${insured.country}`, containerDiv);
        // INSURED POLICIES
        createHeadingTitle('Polizas', containerDiv);
        policies.forEach((policy) => {
            const policyDiv = document.createElement('div');
            const nameText = document.createTextNode(`${policy.productName}`);
            const detailButton = document.createElement('button');
            detailButton.textContent = 'Detalle';
            // EVENT HANDLER
            detailButton.addEventListener('click', () => {
                navigateToPolicyDetailPage(insured.id, policy.id);
            });

            // APPENDS
            policyDiv.appendChild(nameText);
            policyDiv.appendChild(detailButton);
            containerDiv.appendChild(policyDiv);
        });
        if (appDiv) appDiv.appendChild(containerDiv);
    } catch (error) {
        console.error('Error al cargar los detalles del cliente:', error);
    }
}

export async function showPolicyDetails(policyId) {
    const policy = await getPolicyById(policyId);
    const appDiv = document.getElementById('app');
    if (appDiv) cleanElement(appDiv);

    // MAIN HEADING
    createHeadingTitle('Poliza', appDiv);
    // MAIN DIV
    const mainDiv = document.createElement('div');
    // DIV PARA GUARDAR LA LISTA DE POLIZAS
    const containerDiv = document.createElement('div');
    // POLICY DATA
    createListItem(
        `Start Date: ${policy.startDate.toLocaleDateString()}`,
        containerDiv
    );
    createListItem(
        `End Date: ${policy.endDate.toLocaleDateString()}`,
        containerDiv
    );
    createListItem(`Product Name: ${policy.productName}`, containerDiv);
    createListItem(`Branch Name: ${policy.branchName}`, containerDiv);
    createListItem(`Company Name: ${policy.companyName}`, containerDiv);

    // EDIT BUTTOn
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('editButton');
    editButton.addEventListener('click', () => {
        showPolicyEditForm(policy);
    });
    containerDiv.appendChild(editButton);

    // AGREGAR A EL DIV PRINCIPAL EL DIV DE POLIZAS
    mainDiv.appendChild(containerDiv);

    if (appDiv) appDiv.appendChild(mainDiv);
}

function showPolicyEditForm(policy) {}

// NAVIGATION
function navigateToInsuredDetailPage(id) {
    const detailPageUrl = `/client/${id}`;

    // NAVIGATE TO CLIENT DETAIL PAGE
    history.pushState(
        { page: 'clientDetail', clientId: id },
        '',
        detailPageUrl
    );
    showInsuredDetails(id);
}

function navigateToPolicyDetailPage(insuredId, policyId) {
    const detailPageUrl = `/client/${insuredId}/policy/${policyId}`;

    // NAVIGATE TO POLICY DETAIL PAGE
    history.pushState(
        { page: 'policyDetail', insuredId: insuredId, policyId: policyId },
        '',
        detailPageUrl
    );
    showPolicyDetails(policyId);
}

window.onpopstate = function (event) {
    const state = event.state;
    if (state) {
        if (state.page === 'clientDetail') {
            showInsuredDetails(state.clientId);
        } else if (state.page === 'policyDetail') {
            showPolicyDetails(state.policyId);
        } else {
            // IF NOT CLIENT OR POLICY PAGE, THEN HOME PAGE
            showHomePage();
        }
    } else {
        // IF NO STATE, THEN HOMEPAGE
        showHomePage();
    }
};

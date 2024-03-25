import type { Insured } from './types/Insured';
import {
    createFormItem,
    createHeadingTitle,
    createListItem,
    createDropdown,
    createPageContainer,
    renderInsureds,
    renderPolicies,
    createHeaderContainer
} from './utils';
import {
    getAllInsureds,
    getInsured,
    addInsured,
    editInsured
} from './InsuredsService';
import {
    getAllPoliciesByUser,
    getPolicyById,
    editPolicy
} from './PoliciesService';
import { userName } from './Login';

export async function showHomePage() {
    try {
        // REQUEST
        const insureds = await getAllInsureds();

        const containerDiv = createPageContainer();

        // NUEVO DIV PARA ASEGURADOS Y BOTÓN
        const headerContainer = createHeaderContainer(containerDiv);

        // HEADING
        createHeadingTitle(`Asegurados de ${userName}`, headerContainer);

        // ADD INSURED BUTTON
        const addInsuredButton = document.createElement('button');
        addInsuredButton.textContent = 'Agregar Asegurado';
        addInsuredButton.classList.add('actionButton');
        addInsuredButton.addEventListener('click', () => {
            navigateToAddInsuredPage();
        });
        headerContainer.appendChild(addInsuredButton);

        // INSURED SEARCH INPUT
        const searchInput = document.createElement('input');
        searchInput.classList.add('insuredsSearchInput');
        containerDiv.appendChild(searchInput);
        searchInput.placeholder = 'Buscar...';
        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();
            const filteredInsureds = insureds.filter((insured) =>
                `${insured.name.toLowerCase()} ${insured.lastName.toLowerCase()}`.includes(
                    searchText
                )
            );
            renderInsureds(filteredInsureds, userInsuredsDiv, searchInput);
        });

        // INSUREDS DIV
        const userInsuredsDiv = document.createElement('div');
        containerDiv.appendChild(userInsuredsDiv);
    } catch (error) {
        console.error('Error al cargar los clientes:', error);
    }
}

async function showAddInsuredForm() {
    const containerDiv = createPageContainer();

    // HEADING
    const headerContainer = createHeaderContainer(containerDiv);
    createHeadingTitle('Agregar nuevo asegurado', headerContainer);

    // FORM
    const addInsuredForm = document.createElement('form');
    addInsuredForm.id = 'addInsuredForm';

    createFormItem('Nombre', addInsuredForm, 'text', 'name');
    createFormItem('Apellido', addInsuredForm, 'text', 'lastName');
    createFormItem('Fecha de nacimiento', addInsuredForm, 'date', 'birthDay');
    createFormItem('Dirección', addInsuredForm, 'text', 'address');
    createFormItem('Teléfono', addInsuredForm, 'text', 'phone');
    createFormItem('País', addInsuredForm, 'text', 'country');

    // CREATE BUTTON
    const createButton = document.createElement('button');
    createButton.classList.add('actionButton');
    createButton.type = 'submit';
    createButton.textContent = 'Crear';

    // EVENT HANDLER
    createButton.addEventListener('click', async (event) => {
        event.preventDefault();

        // GET FORM DATA AND TURN IT INTO INSURED TYPE
        const formData = new FormData(addInsuredForm);
        const newInsured: Insured = {
            name: formData.get('name') as string,
            lastName: formData.get('lastName') as string,
            birthDay: new Date(formData.get('birthDay') as string),
            address: formData.get('address') as string,
            phone: formData.get('phone') as string,
            country: formData.get('country') as string,
            userId: 0
        };

        try {
            // ADD INSURED
            await addInsured(newInsured);
            alert('Asegurado agregado exitosamente.');
            // REDIRECT
            window.location.href = '/';
        } catch (error) {
            console.error('Error al agregar el asegurado:', error);
            alert(
                'Se produjo un error al agregar el asegurado. Por favor, inténtalo de nuevo.'
            );
        }
    });
    headerContainer.appendChild(createButton);
    containerDiv.appendChild(addInsuredForm);
}

async function showInsuredDetails(id) {
    try {
        // REQUESTS
        const insured = await getInsured(id);
        const policies = await getAllPoliciesByUser(insured.id);

        const containerDiv = createPageContainer();

        // CLIENT INFO DIV
        const clientInfoDiv = document.createElement('div');
        clientInfoDiv.classList.add('clientInfoDiv');
        containerDiv.appendChild(clientInfoDiv);

        // HEADER
        const headerContainer = createHeaderContainer(clientInfoDiv);
        createHeadingTitle(
            `${insured.name + ' ' + insured.lastName}`,
            headerContainer
        );

        const editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
            navigateToEditInsuredPage(insured.id);
        });
        headerContainer.appendChild(editButton);

        // CLIENT DATA
        createListItem('Address:', `${insured.address}`, clientInfoDiv);
        createListItem(
            'Birthday:',
            `${insured.birthDay.toLocaleDateString()}`,
            clientInfoDiv
        );
        createListItem('Phone:', `${insured.phone}`, clientInfoDiv);
        createListItem('Country', `${insured.country}`, clientInfoDiv);

        // INSURED POLICIES DIV
        const insuredPoliciesDiv = document.createElement('div');
        containerDiv.appendChild(insuredPoliciesDiv);

        // INSURED POLICIES
        createHeadingTitle('Polizas', insuredPoliciesDiv);
        renderPolicies(policies, insured.id, insuredPoliciesDiv);
    } catch (error) {
        console.error('Error al cargar los detalles del cliente:', error);
    }
}

async function showEditInsuredForm(insured) {
    const containerDiv = createPageContainer();

    // HEADING
    const headerContainer = createHeaderContainer(containerDiv);
    createHeadingTitle('Editar Asegurado', headerContainer);

    // CREATE BUTTON
    const editButton = document.createElement('button');
    editButton.classList.add('actionButton');
    editButton.textContent = 'Guardar';

    // FORM
    const editInsuredForm = document.createElement('form');
    editInsuredForm.id = 'editInsuredForm';

    createFormItem('Nombre', editInsuredForm, 'text', 'name', insured.name);
    createFormItem(
        'Apellido',
        editInsuredForm,
        'text',
        'lastName',
        insured.lastName
    );
    createFormItem(
        'Fecha de nacimiento',
        editInsuredForm,
        'date',
        'birthDay',
        insured.birthDay
    );
    createFormItem(
        'Dirección',
        editInsuredForm,
        'text',
        'address',
        insured.address
    );
    createFormItem('Teléfono', editInsuredForm, 'text', 'phone', insured.phone);
    createFormItem('País', editInsuredForm, 'text', 'country', insured.country);

    // EVENT HANDLER
    editButton.addEventListener('click', async (event) => {
        event.preventDefault();

        // GET FORM DATA AND TURN IT INTO INSURED TYPE
        const formData = new FormData(editInsuredForm);
        const editedInsured = {
            name: formData.get('name') as string,
            lastName: formData.get('lastName') as string,
            birthDay: new Date(formData.get('birthDay') as string),
            address: formData.get('address') as string,
            phone: formData.get('phone') as string,
            country: formData.get('country') as string,
            userId: insured.userId
        };

        try {
            // EDIT INSURED
            await editInsured(editedInsured);
            alert('Asegurado editado exitosamente.');
            // REDIRECT
            navigateToInsuredDetailPage(insured.id);
        } catch (error) {
            console.error('Error al editar el asegurado:', error);
            alert(
                'Se produjo un error al editar el asegurado. Por favor, inténtalo de nuevo.'
            );
        }
    });
    headerContainer.appendChild(editButton);
    containerDiv.appendChild(editInsuredForm);
}

async function showPolicyDetails(insuredId, policyId) {
    // REQUEST
    const policy = await getPolicyById(policyId);

    const containerDiv = createPageContainer();

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    // MAIN HEADING
    createHeadingTitle('Poliza', headerContainer);
    // EDIT BUTTON
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('editButton');
    editButton.addEventListener('click', () => {
        navigateToEditPolicyPage(insuredId, policy.id);
    });
    headerContainer.appendChild(editButton);

    containerDiv.appendChild(headerContainer);
    // INSUREDS DIV
    const policyDataDiv = document.createElement('div');
    containerDiv.appendChild(policyDataDiv);
    // POLICY DATA
    createListItem(
        'Start Date:',
        `${policy.startDate.toLocaleDateString()}`,
        policyDataDiv
    );
    createListItem(
        'End Date:',
        `${policy.endDate.toLocaleDateString()}`,
        policyDataDiv
    );
    createListItem('Product Name: ', `${policy.productName}`, policyDataDiv);
    createListItem('Branch Name: ', `${policy.branchName}`, policyDataDiv);
    createListItem('Policy Name: ', `${policy.companyName}`, policyDataDiv);
}

async function showEditPolicyForm(insuredId, policy) {
    try {
        const containerDiv = createPageContainer();

        // HEADING
        const headerContainer = createHeaderContainer(containerDiv);
        createHeadingTitle('Editar Póliza', headerContainer);

        // CREATE BUTTON
        const editButton = document.createElement('button');
        editButton.classList.add('actionButton');
        editButton.textContent = 'Guardar';

        // FORM
        const editPolicyForm = document.createElement('form');
        editPolicyForm.id = 'editPolicyForm';

        createFormItem(
            'Start Date',
            editPolicyForm,
            'date',
            'startDate',
            policy.startDate.toLocaleDateString()
        );
        createFormItem(
            'End Date',
            editPolicyForm,
            'date',
            'endDate',
            policy.endDate.toLocaleDateString()
        );

        // PRODUCT DROPDOWN
        const products = ['Product A', 'Product B', 'Product C']; // HARDCODEADO
        createDropdown(
            'Product',
            editPolicyForm,
            'product',
            products,
            policy.productName
        );

        // BRANCH DROPDOWN
        const branches = ['Branch A', 'Branch B', 'Branch C']; // HARDCODEADO
        createDropdown(
            'Branch',
            editPolicyForm,
            'branch',
            branches,
            policy.branchName
        );

        // COMPANY DROPDOWN
        const companies = ['Company A', 'Company B', 'Company C']; // HARDCODEADO
        createDropdown(
            'Company',
            editPolicyForm,
            'company',
            companies,
            policy.companyName
        );

        // EVENT HANDLER
        editButton.addEventListener('click', async (event) => {
            event.preventDefault();

            // GET FORM DATA AND TURN IT INTO POLICY TYPE
            const formData = new FormData(editPolicyForm);
            const editedPolicy = {
                startDate: new Date(formData.get('startDate') as string),
                endDate: new Date(formData.get('endDate') as string),
                productName: formData.get('product') as string,
                branchName: formData.get('branch') as string,
                companyName: formData.get('company') as string
            };

            try {
                // EDIT POLICY
                await editPolicy(editedPolicy);
                alert('Póliza editada exitosamente.');
                // REDIRECT
                navigateToPolicyDetailPage(insuredId, policy.id);
            } catch (error) {
                console.error('Error al editar la póliza:', error);
                alert(
                    'Se produjo un error al editar la póliza. Por favor, inténtalo de nuevo.'
                );
            }
        });
        headerContainer.appendChild(editButton);

        // ADD FORM TO MAIN DIV
        containerDiv.appendChild(editPolicyForm);
    } catch (error) {
        console.error(
            'Error al cargar el formulario de edición de la póliza:',
            error
        );
    }
}

// NAVIGATION
export function navigateToInsuredDetailPage(id) {
    const detailPageUrl = `/client/${id}`;

    // NAVIGATE TO CLIENT DETAIL PAGE
    history.pushState(
        { page: 'clientDetail', clientId: id },
        '',
        detailPageUrl
    );
    showInsuredDetails(id);
}

function navigateToAddInsuredPage() {
    const addInsuredPageUrl = '/client/add';
    history.pushState({ page: 'addInsured' }, '', addInsuredPageUrl);
    showAddInsuredForm();
}

function navigateToEditInsuredPage(id) {
    const editInsuredPageUrl = `/client/${id}/edit`;
    history.pushState(
        { page: 'editInsured', insuredId: id },
        '',
        editInsuredPageUrl
    );
    getInsured(id)
        .then((insured) => showEditInsuredForm(insured))
        .catch((error) =>
            console.error('Error al obtener el asegurado:', error)
        );
}

function navigateToEditPolicyPage(insuredId, policyId) {
    const editPolicyPageUrl = `/policy/${policyId}/edit`;
    history.pushState(
        { page: 'editPolicy', policyId: policyId },
        '',
        editPolicyPageUrl
    );
    getPolicyById(policyId)
        .then((policy) => showEditPolicyForm(insuredId, policy))
        .catch((error) =>
            console.error('Error al obtener el asegurado:', error)
        );
}

export function navigateToPolicyDetailPage(insuredId, policyId) {
    const detailPageUrl = `/client/${insuredId}/policy/${policyId}`;

    // NAVIGATE TO POLICY DETAIL PAGE
    history.pushState(
        { page: 'policyDetail', insuredId: insuredId, policyId: policyId },
        '',
        detailPageUrl
    );
    showPolicyDetails(insuredId, policyId);
}

window.onpopstate = function (event) {
    const state = event.state;
    if (state) {
        if (state.page === 'clientDetail') {
            showInsuredDetails(state.clientId);
        } else if (state.page === 'policyDetail') {
            showPolicyDetails(state.insuredId, state.policyId);
        } else if (state.page === 'addInsured') {
            showAddInsuredForm();
        } else if (state.page === 'editInsured') {
            showEditInsuredForm(state.insuredId);
        } else if (state.page === 'editPolicy') {
            showEditPolicyForm(state.insuredId, state.policy);
        } else {
            // IF NOT CLIENT OR POLICY PAGE, THEN HOME PAGE
            showHomePage();
        }
    } else {
        // IF NO STATE, THEN HOMEPAGE
        showHomePage();
    }
};

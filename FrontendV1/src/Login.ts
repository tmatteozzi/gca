import { createPageContainer, createFormItem } from './utils';
import { showHomePage } from './routes';

export let userName;
export let isLoggedIn;

// TEST DATA
userName = 'Tomas';
isLoggedIn = true;
// END TEST DATA

export const login = () => {
    // const containerDiv = createPageContainer();
    // const loginForm = document.createElement('form');
    // loginForm.id = 'loginForm';
    // createFormItem('Usuario', loginForm, 'text', 'username');
    // createFormItem('Contraseña', loginForm, 'password', 'password');
    // // LOGIN BUTTON
    // const submitButton = document.createElement('button');
    // submitButton.type = 'submit';
    // submitButton.textContent = 'Iniciar Sesión';
    // loginForm.appendChild(submitButton);
    // // EVENT HANDLER
    // loginForm.addEventListener('submit', async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(loginForm);
    //     const username = formData.get('username') as string;
    //     const password = formData.get('password') as string;
    //     try {
    //         const response = await fetch('/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ username, password })
    //         });
    //         if (response.ok) {
    //             isLoggedIn = true;
    //             const userData = await response.json();
    //             userName = userData.username;
    //             showHomePage();
    //         } else {
    //             console.error('Error al iniciar sesión:', response.statusText);
    //             alert(
    //                 'Error al iniciar sesión. Por favor, inténtalo de nuevo.'
    //             );
    //         }
    //     } catch (error) {
    //         console.error('Error al iniciar sesión:', error);
    //         alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    //     }
    // });
    // containerDiv.appendChild(loginForm);
};

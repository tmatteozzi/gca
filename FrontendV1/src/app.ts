import { login } from './Login';
import { showHomePage } from './routes';

const userAuthenticated = true;

if (userAuthenticated) {
    showHomePage();
} else {
    login();
}

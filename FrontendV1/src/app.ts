import { login, isLoggedIn } from './Login';
import { showHomePage } from './routes';

if (isLoggedIn) {
    showHomePage();
} else {
    login();
}

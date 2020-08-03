import { User } from './models/User';
import Axios from 'axios';
import { UserEdit } from './views/UserEdit';

Axios.defaults.baseURL = 'http://localhost:3000';

const user = User.build({ name: 'Dainius', age: 20 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
}

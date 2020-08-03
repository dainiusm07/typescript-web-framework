import { User } from './models/User';
import Axios from 'axios';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { userInfo } from 'os';

Axios.defaults.baseURL = 'http://localhost:3000';

const root = document.getElementById('root');
const users = User.buildCollection();

users.fetch();

users.on('change', () => {
  if (root) new UserList(root, users).render();
});

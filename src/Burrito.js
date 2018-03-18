import { Trello } from 'burrito-trello';

import { trelloAPIKey } from '../config.json';

export const logout = () => {
  localStorage.removeItem('burrito-token');
  window.location.reload();
};

export default new Trello({
  key: trelloAPIKey,
  token: localStorage.getItem('burrito-token')
});

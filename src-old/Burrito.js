import { Trello } from 'burrito-trello';

import appConfig from '../config.json';

const trello = new Trello({
  key: appConfig.trelloAPIKey,
  token: localStorage.getItem('burrito-token')
});

export default trello;
export { trello };

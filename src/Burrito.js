import { Trello, TrelloTokenAuth } from 'burrito-trello';

/**
 * Get the login url.
 *
 * @since 2.0.0
 *
 * @return string   The login URL.
 */
export const getAuthUrl = () => {
  const auth = new TrelloTokenAuth({
    key: __TRELLO_API_KEY__,
  });

  const authUrl = auth.getURL({
    name: 'Burrito',
    return_url: window.location,
    expiration: 'never',
    scope: [
      'read',
      'write',
      'account',
    ],
  });

  return authUrl;
};

/**
 * Log the user out of Burrito.
 *
 * @since 2.0.0
 */
export const logout = () => {
  localStorage.removeItem('burrito-token');
  window.location.reload();
};

/**
 * Return an instance of the `burrito-trello` client.
 *
 * @since 2.0.0
 */
export default new Trello({
  key: __TRELLO_API_KEY__,
  token: localStorage.getItem('burrito-token'),
});

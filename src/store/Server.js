const fetch = require('cross-fetch');
const { HttpException } = require('@loginline/methods-common/HttpException');

export const Server = new Proxy(
  {},
  {
    get(obj, module) {
      return new Proxy(
        {},
        {
          get(obj, method) {
            return async function(data) {
              try {
                const response = await fetch(
                  `http://localhost:3001/api/method/${module}/${method}`,
                  {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  }
                );

                if (response.status === 200) {
                  return await response.json();
                }
                const message = await response.text();
                throw new HttpException(message, response.status);
              } catch (err) {
                throw err;
              }
            };
          },
        }
      );
    },
  }
);

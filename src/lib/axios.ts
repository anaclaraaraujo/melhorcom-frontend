import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://phones--melhorcom.repl.co',
});

api.interceptors.request.use(
  (options) => {
    options.headers['cpf'] = 94950873253;
    return options;
  },
  (error) => Promise.reject(error)
);

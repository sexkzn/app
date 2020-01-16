import 'whatwg-fetch';
import RequestError from './RequestError';

const parseResponse = (response) =>
  response.text().then((body) => ({
    response,
    body,
  }));

const checkStatus = ({ status, statusText, body }) => {
  let json;
  try {
    json = JSON.parse(body);
  } catch (e) {}
  if (status < 200 || status >= 300) {
    return Promise.reject(new RequestError(statusText, status, body, json));
  }
  return json;
};

export default (url, options = {}) =>
  fetch(url, options)
  .then(parseResponse)
  .then(checkStatus);

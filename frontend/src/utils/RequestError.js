class RequestError extends Error {
  constructor(message, status, body, json) {
    super(message, status, body, json);
    this.message = message;
    this.status = status;
    this.body = JSON.parse(body);
    this.json = json;
  }
}

export default RequestError;

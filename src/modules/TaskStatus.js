export default class Status {
  constructor(status) {
    this.status = status;
  }

  completed() {
    this.status = true;
  }
}
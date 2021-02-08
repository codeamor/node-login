"use strict";

class UserStorage {
  static #users = {
    id: ["oh", "my", "God"],
    psword: ["1234", "12345", "123456"],
    name: ["손수민", "김수민", "박수민"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;

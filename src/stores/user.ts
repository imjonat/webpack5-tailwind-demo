import { makeAutoObservable } from 'mobx'

class User {
  constructor() {
    makeAutoObservable(this)
  }
}

export const userStore = new User()

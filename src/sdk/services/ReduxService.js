class ReduxService {
  constructor(dependencies, reducers) {
    this.dependencies = dependencies
    this.store = null
    this.reducers = reducers
  }

  setStore(store) {
    this.store = store

    this.store.attachReducers(this.reducers)
  }

  onDateUpdate(callback) {
    this.store.subscribe(callback)
  }
}

export default ReduxService

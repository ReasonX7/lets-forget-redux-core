class DependencyInjector {
  constructor(constructors) {
    this.dependencies = Object.entries(constructors).reduce((acc, [name, creator]) => {
      acc[name] = creator(acc)
      return acc
    }, {})
  }
}

export default DependencyInjector

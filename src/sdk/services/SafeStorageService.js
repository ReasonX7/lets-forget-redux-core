class SafeStorageService {
  constructor(instance) {
    this.instance = instance
  }

  setItem(key, value) {
    try {
      return JSON.stringify(this.instance.setItem(key, value))
    } catch (err) {
      return err
    }
  }

  getItem(key) {
    try {
      return JSON.parse(this.instance.getItem(key))
    } catch (err) {
      return err
    }
  }

  removeItem(key) {
    try {
      this.instance.removeItem(key)
    } catch (err) {
      return err
    }
  }

  clear() {
    try {
      this.instance.clear()
    } catch (err) {
      return err
    }
  }
}

export default SafeStorageService

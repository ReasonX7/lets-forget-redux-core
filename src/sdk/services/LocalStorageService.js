import SafeStorageService from './SafeStorageService'

class LocalStorageService extends SafeStorageService {
  constructor() {
    super(global.localStorage)
  }
}

export default LocalStorageService

import React from 'react'
import ReactDOM from 'react-dom'

import LocalStorageService from '$sdk/services/LocalStorageService'
import DependencyInjector from '$sdk/DependencyInjector'

import UserReduxService from '$app/services/UserReduxService'

import store from '$app/store'

const injector = new DependencyInjector({
  user: deps => new UserReduxService(deps).setStore(store),
  // exporter: new Exporter(),
  // flow: new Flow(),
  // doc: new Doc(),
  permanentStorage: deps => new LocalStorageService(deps),
  api: () => ({
    get: () => Promise.resolve()
  })
})

const AccountInfo

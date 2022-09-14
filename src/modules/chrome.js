/*global chrome*/
import { CopyToClickboard } from './index'

export const copyURL = (url) => {
  chrome.runtime.sendMessage({
    message: url,
    type: 'copyURL',
  })
}

export const getURL = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    CopyToClickboard(url)
    copyURL(url)
  })
}

export const deleteContent = (index) => {
  chrome.runtime.sendMessage({
    message: index,
    type: 'deleteContent',
  })
}

export const deleteLocalStorage = () => {
  chrome.runtime.sendMessage({
    type: 'deleteStorage',
  })
}

export const getLocalStorage = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get('key', (value) => {
      resolve(value)
    })
  })
}

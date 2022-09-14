/*global chrome*/
import { CopyToClickboard } from './index'

export const copyURL = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    CopyToClickboard(url)
    chrome.runtime.sendMessage({
      url: url,
      type: 'copyURL',
    })
  })
}

export const deleteContent = (index) => {
  chrome.runtime.sendMessage({
    index: index,
    type: 'delete',
  })
}

export const deleteAllContents = () => {
  chrome.runtime.sendMessage({
    type: 'deleteAll',
  })
}

export const getLocalStorage = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get('key', (value) => {
      resolve(value)
    })
  })
}

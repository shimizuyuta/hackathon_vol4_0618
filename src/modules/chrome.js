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
    console.log(url)
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

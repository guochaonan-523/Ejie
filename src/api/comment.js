import request from '@/utils/request'
export function fetchList() {
  return request({
    url: '/comment/findAll',
    method: 'get',
  })
}

export function addressList() {
  return request({
    url: '/address/findAll',
    method: 'get',
  })
}

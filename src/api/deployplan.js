import request from '../utils/request'

export function deployplanList(projectId) {
  return request({
    url: 'projects/' + projectId + '/deploymentdesigns',
    method: 'get'
  })
}

export function createDeployplan(data, projectId) {
  return request({
    url: 'projects/' + projectId + '/deploymentdesigns',
    method: 'post',
    data
  })
}

export function updateDeployplan(data, id) {
  return request({
    url: 'deploymentdesigns/' + id,
    method: 'patch',
    auth: {
      username: 'admin',
      password: 'admin'
    },
    data
  })
}

export function deleteDeployplan(id) {
  return request({
    url: 'deploymentdesigns/' + id,
    method: 'delete',
    auth: {
      username: 'admin',
      password: 'admin'
    }
  })
}


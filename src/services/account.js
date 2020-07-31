import request from '@/utils/request';

//GET {params}={params:params}
//POST {method:'POST',data: params}
export async function queryList(params) {
  return request('/api/mock/account/123456', {
    params,
  });
}

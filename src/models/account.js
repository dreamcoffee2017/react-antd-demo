import { queryList } from '@/services/account';

const Model = {
  namespace: 'account',
  state: {
    list: [],
  },
  effects: {
    *queryList({ payload }, { call, put }) {
      const response = yield call(queryList, payload);
      yield put({
        type: 'afterQueryList',
        payload: response.data,
      });
    },
  },
  reducers: {
    afterQueryList(state, action) {
      return { ...state, list: action.payload };
    },
  },
};
export default Model;

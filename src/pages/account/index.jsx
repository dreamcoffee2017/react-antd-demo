import React, { useEffect } from 'react';
import { List } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';

const AccountList = props => {
  const {
    loading,
    dispatch,
    account: { list },
  } = props;

  //execute once useEffect(...,[]);
  //no need for click event
  useEffect(() => {
    dispatch({
      type: 'account/queryList',
      payload: {
        count: 5,
      },
    });
  }, []);

  return (
    <div>
      <PageHeaderWrapper>
        <div>
          <List
            size="large"
            rowKey="id"
            loading={loading}
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <div>
                  <p>{item.team1}</p>
                </div>
              </List.Item>
            )}
          />
        </div>
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(({ account, loading }) => ({
  account,
  loading: loading.models.account,
}))(AccountList);

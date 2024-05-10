import { Button, Space, Table, Typography } from 'antd';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { commonApi } from '../apis/common';

const { Title } = Typography;

const { Column } = Table;

function Home() {
  const listQuery = useQuery({
    queryKey: ['commonApi.list'],
    queryFn: commonApi.list,
  });

  const data = listQuery.data?.data.data ?? [];

  const [count, setCount] = useState(0);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setCount((s) => s + 1)}>
          点击次数：{count}
        </Button>
        <Button onClick={() => setCount(0)}>reset</Button>
      </Space>

      <Title level={2}>这是数据列表</Title>
      <Table dataSource={data} rowKey={(r) => r.id}>
        <Column title="ID" dataIndex="id" />
        <Column title="Name" dataIndex="name" />
      </Table>
    </>
  );
}

export default Home;

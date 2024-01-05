import React from 'react';
import { Form, Input, Space } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
const Test = () => {
  return (
    <Form labelCol={{ span: 2 }} wrapperCol={{ span: 6 }}>
      <Form.Item 
        label="第一笔支付金额" 
        required
      >
        {/* 表单项嵌套，space下的表单项不一定非要设置noStyle, 可以设置space的align进行调整, align: baseline space下的子项的第一行文字的基线对齐 */}
        <Space align='baseline'>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Username is required' }]}
            extra={
              <Space style={{ width: 510, marginTop: '6px' }} align='start' wrap>
                <div>支付时间：2022-10-22</div>
                <div>订单编号：7865123456789543</div>
                <div>支付金额：300000元</div>
              </Space> 
            }
          >
            <Input style={{ width: 510 }} placeholder="请输入支付金额" />
          </Form.Item>
          {/* <Button type="primary">增加</Button>  */}
          <CheckCircleFilled 
            style={{ 
              fontSize: '16px', 
              color: '#73d13d', 
              verticalAlign: 'middle'
            }} 
          />
          <div>已支付</div>
        </Space>
      </Form.Item>
     </Form>

    // 方案3，不推荐，订单描述信息的位置样式受到上方表单具体的表单控件（订单状态是否展示，金额输入框长度的影响），还需要额外修改formItem的样式
    // <Form labelCol={{ span: 2 }} wrapperCol={{ span: 6 }}>
    //   <Form.Item 
    //     label="第一笔支付金额" 
    //     required
    //     style={{ marginBottom: 0 }}
    //   >
    //     <Space align='baseline'>
    //       <Form.Item
    //         name="username"
    //         rules={[{ required: true, message: 'Username is required' }]}
    //         style={{ marginBottom: 0 }}
    //       >
    //         <Input style={{ width: 491 }} placeholder="请输入支付金额" />
    //       </Form.Item>
    //       <Button type="primary">增加</Button>
    //       <CheckCircleFilled 
    //         style={{ 
    //           fontSize: '16px', 
    //           color: '#73d13d', 
    //           verticalAlign: 'middle'
    //         }} 
    //       />
    //       <div>已支付</div>
    //     </Space>
    //   </Form.Item>
    //   <Form.Item label=" " colon={false} wrapperCol={{ span: 1 }}>
    //     <Space style={{ width: 491 }} align='start' wrap>
    //       <div>支付时间：2022-10-22</div>
    //       <div>订单编号：7865123456789543</div>
    //       <div>支付金额：3元</div>
    //     </Space> 
    //   </Form.Item>
    //  </Form>
  )
}

export default Test

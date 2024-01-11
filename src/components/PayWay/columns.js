import React from 'react'
import { Button } from 'antd'
import moment from 'moment'
import { thirdOrderTypeForTmall } from './const'
const FORMAT_STRING = 'YYYY-MM-DD HH:mm:ss'
export const getColumns = ({
  isToBeConfirm = false,
  handleDelete = () => {},
  channel
}) => {
  if (channel === thirdOrderTypeForTmall) {
    return [
      {
        title: '订单编号',
        dataIndex: 'third_order_id',
        render: (text) => {
          return text || '-'
        }
      },
      {
        title: '订单平台',
        dataIndex: 'third_order_channel',
        render: () => '天猫'
      },
      {
        title: '支付时间',
        dataIndex: 'third_order_paid_time',
        render: (text) => (text ? moment(text).format(FORMAT_STRING) : '-')
      },
      {
        title: '订单状态',
        dataIndex: 'third_order_status_desc',
        render: (text) => text || '-'
      },
      {
        title: '支付金额',
        dataIndex: 'third_real_amount'
      },
      {
        title: '订单关联状态',
        dataIndex: 'can_bind',
        render: (text) => (text ? '未绑定' : '无法绑定')
      },
      {
        title: '操作',
        render: () => (
          <Button
            type="link"
            disabled={isToBeConfirm}
            style={{ padding: 0 }}
            onClick={() => handleDelete()}
          >
            删除
          </Button>
        )
      }
    ]
  }
}

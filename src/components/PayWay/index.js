/**
 * @Author       : kangdongxia
 * @Date         : 2024-01-10 19:48:02
 * @LastEditors  : kangdongxia
 * @LastEditTime : 2024-01-11 20:57:17
 * @Description  : 
 * @
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React, { useState, useMemo } from 'react'
import {
    Form,
    Checkbox,
    Select,
    Input,
    Button,
    Table,
    Alert,
    Space
} from 'antd'
import { getColumns } from './columns'
import { payWayOptions, searchTipConfig, thirdOrderTypeForTmall } from './const'
// import './index.css'
const DEFAULT_EMPTY_TIP = '暂无数据'
const PayWay = ({
    isToBeConfirm
}) => {  
    const [form] = Form.useForm()
    const [dataSource, setDataSource] = useState([])
    const [emptyText, setEmptyText] = useState(DEFAULT_EMPTY_TIP)
    const [loading, setLoading] = useState(false)
    const [tips, setTips] = useState('输入的拆分金额与第三方平台金额不一致，请检查后重试')
    const checkOtherPayWayField = Form.useWatch('check_other_pay_way', form)
    const orderChannelField = Form.useWatch('third_order_channel', form)

    const columns = useMemo(() => {
        return getColumns({
            isToBeConfirm,
            handleDelete: () => setDataSource([]),
            channel: orderChannelField
        })
    }, [isToBeConfirm, orderChannelField])
    return (
        <div className='root'>
            <Form
                layout="inline"
                form={form}
                initialValues={{
                third_order_channel: thirdOrderTypeForTmall
                }}
            >
                <Form.Item
                    name="check_other_pay_way"
                    valuePropName="checked"
                >
                <Checkbox>其他付款方式</Checkbox>
                </Form.Item>
                {checkOtherPayWayField && (
                    <>
                        <Form.Item label='' name="third_order_channel">
                            <Select options={payWayOptions} />
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="third_order_id"
                            rules={[
                                {
                                required: true,
                                message: `请输入${searchTipConfig[orderChannelField]}`
                                }
                            ]}
                            normalize={(value) => value?.trim()}
                        >
                        <Input
                            placeholder={`请输入${searchTipConfig[orderChannelField]}`}
                            style={{ width: '180px' }}
                        />
                        </Form.Item>
                        <Form.Item>
                        <Button
                            type="primary"
                            htmlType='submit'
                            size="small"
                            loading={loading}
                        >
                            新增关联
                        </Button>
                        </Form.Item>
                    </>
                )}
            </Form>
            {
                checkOtherPayWayField && (
                    <Space direction="vertical" align='start'>
                        {tips && (
                            <Alert
                                message={tips}
                                type="warning"
                                showIcon
                                style={{ marginTop: '8px' }}
                            />
                        )}
                        <Table
                            bordered
                            rowKey="third_order_id"
                            size="small"
                            dataSource={dataSource}
                            columns={columns}
                            locale={{ emptyText }}
                            pagination={false}
                            loading={{
                                spinning: loading,
                                tip: '订单数据加载中，请稍候'
                            }}
                        />
                    </Space>
                )
            }
        </div>
      )
}

export default PayWay

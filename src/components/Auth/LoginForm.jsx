import {  Form, Button  } from 'antd'
import TextField from '../../utils/Form/TextField'
const LoginForm = () => {
    const [form] = Form.useForm()
  return (
    <Form form={form}>
        <TextField name="employeeName" placeholder="Employee Name" />
        <TextField name="password" placeholder="Password" password />
        <Button className='bg-primary text-secondary h-[47.53px] text-center w-full text-[0.89375rem] font-medium mt-[2rem]'>LOG IN</Button>
    </Form>
  )
}

export default LoginForm
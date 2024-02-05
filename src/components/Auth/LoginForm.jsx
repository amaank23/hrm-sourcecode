import {  Form, Button  } from 'antd'
import TextField from '../../utils/Form/TextField'
import { useDispatch } from 'react-redux'
import { authSuccess } from '../../redux/slices/Auth/authSlice'
const LoginForm = () => {
    const dispatch = useDispatch()
    function onFinish(){
      dispatch(authSuccess())
    }
  return (
    <Form onFinish={onFinish}>
        <TextField name="employeeName" placeholder="Employee Name" required={false} />
        <TextField name="password" placeholder="Password" password required={false} />
        <Button htmlType='submit' className='bg-primary text-secondary h-[47.53px] text-center w-full text-[0.89375rem] font-medium mt-[2rem]'>LOG IN</Button>
    </Form>
  )
}

export default LoginForm
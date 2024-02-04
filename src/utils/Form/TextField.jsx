import { Form, Input } from "antd";
import PropTypes from "prop-types";

const TextField = ({
  name,
  required = true,
  extraClasses = "",
  password = false,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: required,
          message: "required",
        },
      ]}
    >
      {password ? (
        <Input.Password className={`text-[0.89375em] h-[41.56px] ${extraClasses}`} size="large" {...rest} />
      ) : (
        <Input className={`text-[0.89375em] h-[41.56px] ${extraClasses}`} size="large" {...rest} />
      )}
    </Form.Item>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  extraClasses: PropTypes.string,
  password: PropTypes.bool,
};

export default TextField;

import React, { forwardRef, useImperativeHandle } from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import SchemaFilterForm from './SchemaFilterForm';
import { SchemaFilterFormProps } from './types';

import './global.scss';

const Index = forwardRef<FormComponentProps, SchemaFilterFormProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    form: props.form,
  }));

  return <SchemaFilterForm {...props} />;
});

export default Form.create<SchemaFilterFormProps>()(Index);

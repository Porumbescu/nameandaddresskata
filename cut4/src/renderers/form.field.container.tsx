// src/renderers/form.field.container.tsx

import React from 'react';

export interface FormFieldContainerProps {
  children: React.ReactNode;
}

export type FieldContainerType = React.FC<FormFieldContainerProps>;

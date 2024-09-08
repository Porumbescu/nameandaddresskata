import React, { CSSProperties } from "react";
import { FormFieldContainerProps } from "../form.field.container";

const formContainerStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  } as CSSProperties,
};

export const SimpleFieldContainer: React.FC<FormFieldContainerProps> = ( { children } ) => {
  return <form style={formContainerStyles.form}>{children}</form>;
};

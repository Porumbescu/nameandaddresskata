import React, { CSSProperties } from 'react';

const formContainerStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  } as CSSProperties,
};

interface FormFieldContainerProps {
  children: React.ReactNode;
}

export const FormFieldContainer: React.FC<FormFieldContainerProps> = ( { children } ) => {
  return <form style={formContainerStyles.form}>{children}</form>;
};

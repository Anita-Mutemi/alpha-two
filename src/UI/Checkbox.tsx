import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: var(--prime);
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px var(--prime);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

const Checkbox: React.FC<IProps> = ({ checked, labelWrap = true, ...props }) => {
  const content = (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

export default Checkbox;

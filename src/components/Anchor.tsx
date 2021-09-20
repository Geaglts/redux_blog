import { AnchorHTMLAttributes, HTMLAttributeAnchorTarget } from 'react';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  label: string;
}

function Anchor(props: AnchorProps) {
  const { label, link, ...restProps } = props;
  return (
    <a href={link} target="_blank" {...restProps}>
      {label}
    </a>
  );
}

export default Anchor;

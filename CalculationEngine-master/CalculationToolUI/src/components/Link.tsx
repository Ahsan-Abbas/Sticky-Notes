
const Link = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
  <a target="_blank" {...props}>{children}</a>;

export default Link;

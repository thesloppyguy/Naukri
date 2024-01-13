import PropTypes from "prop-types";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface RouterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref) => <Link ref={ref} to={href} {...other} />
);

RouterLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default RouterLink;

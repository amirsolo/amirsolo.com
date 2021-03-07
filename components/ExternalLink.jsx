const ExternalLink = ({ className, href, children, ...props }) => (
  <a
    className={`text-primary-color ${className && className}`}
    target='_blank'
    rel='noopener noreferrer'
    href={href}
    {...props}
  >
    {children}
  </a>
)

export default ExternalLink

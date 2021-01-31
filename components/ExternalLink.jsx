const ExternalLink = ({ className, href, children }) => (
  <a
    className={`text-primary-color ${className && className}`}
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default ExternalLink

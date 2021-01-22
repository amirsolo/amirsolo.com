export const getCurrentRoute = (path, setCurrentRoute, setActivePath) => {
  if (path === '/') {
    setCurrentRoute('Home')
    setActivePath('/')
  } else if (path.startsWith('/about')) {
    setCurrentRoute('About')
    setActivePath('/about')
  } else if (path.startsWith('/blog')) {
    setCurrentRoute('Blog')
    setActivePath('/blog')
  }
}

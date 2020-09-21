import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import * as RawPagesModels from '../index'

function pagesToMap(): Map<string, string> {
  // Create and return page map with key page uri and value page name
  const pages: Map<string, string> = new Map()

  // Iterate over page files
  Object.values(RawPagesModels).forEach((page) => {
    pages.set(page.defaultProps.uri, page.name)
  })

  return pages
}

function findPage(pagename: string | undefined): any {
  if (!pagename) {
    return undefined
  }
  const pageArray = Object.values(RawPagesModels)
  return pageArray[pageArray.findIndex(page => page.name === pagename)]
}

function pagesToRoutes(): Array<JSX.Element> {
  const pages = pagesToMap()
  const routes: Array<any> = []

  for (const key of pages.keys()) {
    const value = pages.get(key)
    const page = findPage(value)
    routes.push(
      <Route key={`routes-${key}`} exact path={key}>
        {React.createElement(page, {})}
      </Route>
    )
  }
  return routes
}

function pagesToMenu(activeItem: string, setActiveItem: Function): Array<JSX.Element> {
  const pages = pagesToMap()
  const menuItems: Array<any> = []

  for (const key of pages.keys()) {
    const value = pages.get(key)
    menuItems.push(
      <Menu.Item
        key={`menu-${key}`}
        name={key}
        active={activeItem === key}
        onClick={() => setActiveItem(key)}
        as={Link}
        to={key}
        color='red'
      >
        {value}
      </Menu.Item>
    )
  }
  return menuItems
}

export {
  pagesToRoutes,
  pagesToMenu,
}
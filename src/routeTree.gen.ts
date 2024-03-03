/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SignupLazyImport = createFileRoute('/signup')()
const SigninLazyImport = createFileRoute('/signin')()
const HomeLazyImport = createFileRoute('/home')()
const CategoriesLazyImport = createFileRoute('/categories')()
const CalendarLazyImport = createFileRoute('/calendar')()
const UserIdLazyImport = createFileRoute('/user/$id')()

// Create/Update Routes

const SignupLazyRoute = SignupLazyImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup.lazy').then((d) => d.Route))

const SigninLazyRoute = SigninLazyImport.update({
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signin.lazy').then((d) => d.Route))

const HomeLazyRoute = HomeLazyImport.update({
  path: '/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home.lazy').then((d) => d.Route))

const CategoriesLazyRoute = CategoriesLazyImport.update({
  path: '/categories',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/categories.lazy').then((d) => d.Route))

const CalendarLazyRoute = CalendarLazyImport.update({
  path: '/calendar',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/calendar.lazy').then((d) => d.Route))

const UserIdLazyRoute = UserIdLazyImport.update({
  path: '/user/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/user.$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/calendar': {
      preLoaderRoute: typeof CalendarLazyImport
      parentRoute: typeof rootRoute
    }
    '/categories': {
      preLoaderRoute: typeof CategoriesLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      preLoaderRoute: typeof SigninLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      preLoaderRoute: typeof SignupLazyImport
      parentRoute: typeof rootRoute
    }
    '/user/$id': {
      preLoaderRoute: typeof UserIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  CalendarLazyRoute,
  CategoriesLazyRoute,
  HomeLazyRoute,
  SigninLazyRoute,
  SignupLazyRoute,
  UserIdLazyRoute,
])

/* prettier-ignore-end */

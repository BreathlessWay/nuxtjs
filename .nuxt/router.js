import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6dc124ab = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _608d8b47 = () => import('../pages/phone.vue' /* webpackChunkName: "pages/phone" */).then(m => m.default || m)
const _21b08a8f = () => import('../pages/article.vue' /* webpackChunkName: "pages/article" */).then(m => m.default || m)
const _33c6418f = () => import('../pages/me.vue' /* webpackChunkName: "pages/me" */).then(m => m.default || m)
const _3f96fd38 = () => import('../pages/share.vue' /* webpackChunkName: "pages/share" */).then(m => m.default || m)
const _dfda5a5e = () => import('../pages/work-detail/_id.vue' /* webpackChunkName: "pages/work-detail/_id" */).then(m => m.default || m)
const _34b19eac = () => import('../pages/article-detail/_id.vue' /* webpackChunkName: "pages/article-detail/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6dc124ab,
			name: "index"
		},
		{
			path: "/phone",
			component: _608d8b47,
			name: "phone"
		},
		{
			path: "/article",
			component: _21b08a8f,
			name: "article"
		},
		{
			path: "/me",
			component: _33c6418f,
			name: "me"
		},
		{
			path: "/share",
			component: _3f96fd38,
			name: "share"
		},
		{
			path: "/work-detail/:id?",
			component: _dfda5a5e,
			name: "work-detail-id"
		},
		{
			path: "/article-detail/:id?",
			component: _34b19eac,
			name: "article-detail-id"
		}
    ],
    fallback: false
  })
}

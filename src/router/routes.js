
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/mypage', component: () => import('pages/PageProfile.vue') },
      { path: '/recommendations', component: () => import('pages/PageRecommendations.vue') },


      
      // { path: '/profile', component: () => import('pages/Profile.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
//   {
//     path: '/recommendations',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '/', component: () => import('pages/PageRecommendations.vue') },
//     ]
//   },
]

export default routes

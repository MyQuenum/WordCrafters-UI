import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/posts',
      name: 'post',
      component: () => import ('../views/PostsPage.vue')
    },
    {
      path: '/craft',
      name: 'craft',
      component: () => import ('../views/CraftingPage.vue')
    }
  ]
});

const isAuthenticated = () =>{
  const token = localStorage.getItem('WC-token');
  return (token !== null);
};

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la route nécessite une authentification
    if (isAuthenticated()) {
      // L'utilisateur est authentifié, continuez la navigation
      next();
    } else {
      // L'utilisateur n'est pas authentifié, effectuez la redirection
      next('/login'); // Redirigez vers la page de connexion ou une autre vue appropriée
    }
  } else {
    // La route n'a pas besoin d'authentification, continuez la navigation
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from "vue-router";


import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
  
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      meta: {
        title: 'Home'
      },
    },

    {
      path: '/projects',
      name: 'projectList',
      component: ProjectList,
      meta: {
        title: 'I miei progetti'
      }
    },

    {
      path: '/about',
      name: 'about',
      component: AppAbout,
      meta: {
        title: 'Chi sono'
      }
    }
  ],

});

// funzione per modificare il titolo da visualizzare per ogni pagina
router.beforeEach((to) => {
  // if(to.meta?.title) {
  //   document.title ='Boolfolio - ' + to.meta.title;
  // } else {
  //   document.title = 'Boolfolio';
  // }
  document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
});

export {router};
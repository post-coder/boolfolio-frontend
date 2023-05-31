<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';

export default {
  name: 'ProjectList',
  data() {
    return {

      apiURL: 'http://127.0.0.1:8000/api/projects',

      projects: [],

      pagination: {}, 

    }
  },

  components: {
    ProjectItem,
  },  

  mounted() {
    this.getProjects(this.apiURL);

    console.log('Rotta:', this.$route);
  },

  methods: {
    getProjects(apiURL) {
      axios.get(apiURL).then(response => {
        console.log(response.data.results);
        
        // mi salvo i progetti
        this.projects = response.data.results.data;

        // mi salvo anche le variabili di paginazione
        this.pagination = response.data.results;
      });
    },
  }
}

</script>

<template>
  <div>
    <h1>I miei progetti</h1>

    <div class="row">
      <div v-for="project in projects" class="col-md-6 col-lg-4 mb-3">
        <ProjectItem :project="project"></ProjectItem>
      </div>
    </div>

    <hr>

    <div class="projects-navigation">

      <button v-for="link in pagination.links"
        class="btn" 
        :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" 
        v-html="link.label" 
        :disabled="link.url == null ? true : false" 
        @click="getProjects(link.url)">
        
      </button>

    </div>
  </div>
</template>

<style lang="scss">
  .projects-navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
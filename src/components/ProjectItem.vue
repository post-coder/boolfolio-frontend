<script>
export default {
  name: 'ProjectItem',
  data() {
    return {

    }
  },

  props: {
    project: Object,
  },

  computed: {
    description() {
      if(this.project.description.length > 30) {
        return this.project.description.substring(0, 30) + '...';
      } else {
        return this.project.description;
      }
    },

    coverImage() {
      if(this.project.cover_image) {
        return 'http://127.0.0.1:8000/storage/' + this.project.cover_image;
      } else {
        return 'https://www.schiffner.com/wp-content/themes/schiff-responsive/images/noimage.jpg';
      }
    }

  }
}
</script>

<template>
  <div class="project">
    <div class="project-cover">
      <img :src="coverImage" alt="copertina del progetto">
    </div>

    <div class="project-text">
      <strong>
        {{project.title}}
      </strong>
      <em>
        ({{ project.type ? project.type.name : 'Nessuna tipologia'}})
      </em>
      <div class="technologies">
        <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-secondary">{{ technology.name }}</span>
      </div>
  
      <p>
        {{ description }}
      </p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
$accent: #ee3399;
.project {
  border: 1px solid #883377;
  border-radius: 8px;

  overflow: hidden;

  .project-text {
    padding: 4px;
    
    strong {
      display: block;
      color: $accent;
  
      margin-bottom: .4em;
    }
  
    p {
      opacity: .8;
    }

    .technologies {
      display: flex;
      gap: .4em;

      margin-bottom: 1em;
    }
  }
  

  .project-cover {
    img {
      height: 200px;
      width: 100%;

      object-fit: cover;
      object-position: center;
    }
  }
}


</style>
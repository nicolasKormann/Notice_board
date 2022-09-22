import * as uuid from 'uuid';

export const posts = {
  posts: [
    {
      id: "4c3ed04b-5c23-437b-88c1-072a53a79c5f",
      title: "teste do mural",
      description: "teste"
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    let id = uuid.v4();

    this.posts.push({id, title, description});    
  }
}



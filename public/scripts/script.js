document.addEventListener('DOMContentLoaded', () => {
  updatePosts()
})

async function updatePosts() {

  const URL = '/api/all'

  const promise = await fetch(URL);

  const posts = await promise.json()

  let postElements = '';

  console.log(posts)

  posts.map((post) => {
    let postElement = `<div id="${post.id}" class="card mb-3">
                        <h5 class="card-header" class="card-title">${post.title}</h5>
                        <div class="card-body" class="card-text">${post.description}</div>
                      </div>\n`
    postElements += postElement;
  });

  const board = document.querySelector('.board');

  board.innerHTML = postElements;
}


async function newPost() {
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#description').value;

  const post = { title, description };

  const URL = '/api/new';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  }

  const req = await fetch(URL, options);

  updatePosts();

  document.querySelector('#title').value = '';
  document.querySelector('#description') = '';
}
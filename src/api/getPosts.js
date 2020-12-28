//TODO: implement styled components with DOM manipulation
//BUG: Posts doesn't load on DOM render change (but multi-loads on hot reloads?)

// https://github.com/kriasoft/react-starter-kit/issues/983
// This is not a bug my friend.

// since the routes are universal, it will first run on the server and then run again on the client.

// This is basically one of the major point of using isomorphic architecture: to prefetch the data on the server.

// I personally use redux for data handling. So basically when request comes in, on server side I would fetch the data, put the data in redux store, render the route, and at last, pass down the rendered page with the redux state to the client.

// Then on the client side, I would check if the data is already in the redux store. if it is, then there is no need to fetch the data again.
export const displayPosts = () => {
  fetchPosts().then((res) => {
    if (res !== undefined) {
      res.forEach((item) => {
        //Creates the list item
        let post_item = document.createElement('li');
        post_item.setAttribute('class', 'post');

        //Creates and adds the title to the list item
        let post_header = document.createElement('h1');
        const header = document.createTextNode(item.title);
        post_header.appendChild(header);
        post_header.setAttribute('class', 'post_header');
        post_item.appendChild(post_header);

        //Creates and adds the author to the list item
        let post_author = document.createElement('h2');
        const author = document.createTextNode("Written by: "+item.author);
        post_author.appendChild(author);
        post_author.setAttribute('class', 'post_author');
        post_item.appendChild(post_author);

        //Creates and adds the author to the list item
        let post_content = document.createElement('p');
        const content = document.createTextNode(item.content);
        post_content.appendChild(content);
        post_item.appendChild(post_content);

        //Renders the DOM element
        document.getElementById('posts_area').appendChild(post_item);
      });
    }
  });
};

const fetchPosts = async () => {
  try {
    const req = await fetch('http://localhost:5000/api/posts');
    const body = await req.json();

    let res = body.map((data) => {
      return data;
    });
    return res;
  } catch (e) {
    console.error('Something went wrong!-- ' + e);
  }
};

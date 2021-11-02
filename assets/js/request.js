const hashNode = () => {
  fetch("https://api.hashnode.com/", {
    method: "POST",
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "31a778a9-95cf-431d-b63f-8bce8e567881",
    },
    body: JSON.stringify({
      query: `
        {
            user(username: "iresharma") {
              blogHandle
              tagline
              numFollowers
              numReactions
              numFollowing
              publication {
                posts(page: 0) {
                  title
                  brief
                  slug
                  coverImage
                      totalReactions
                }
              }
            }
          }
          `,
    }),
  }).then((response) => {
    console.log(
      response.json().then((json) => {
        const metaData = json.data.user;
        const blogs = json.data.user.publication.posts;
        const blogHandle = document.querySelector("#blog__handle");
        blogHandle.innerHTML = metaData.blogHandle;
        const tagline = document.querySelector("#blog__tagline");
        tagline.innerHTML = metaData.tagline;
        const numFollowers = document.querySelector("#blog__followers");
        numFollowers.innerHTML = metaData.numFollowers;
        const numReactions = document.querySelector("#blog__reactions");
        numReactions.innerHTML = metaData.numReactions;
        const numFollowing = document.querySelector("#blog__following");
        numFollowing.innerHTML = metaData.numFollowing;
        let HTML = "";
        blogs.pop();
        blogs.pop();
        blogs.forEach((blog) => {
          HTML += `
        <div class="services__content" style="height: 100%">
          <div>
            <img src="${blog.coverImage}" alt="" style="height: 200px; border-radius: 1rem;">
            <h3 class="services__title">
              ${blog.title}
            </h3>
          </div>
          <p>
            ${blog.brief}
          </p>
          <a href="http://watchireshstruggle.hashnode.dev/${blog.slug}"
            class="
              button button--flex button--small button--link
              services__button
            "
          >
            Read more
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>`;
        });
        const blogContext = document.querySelector(".blog .right");
        blogContext.innerHTML = HTML;
      })
    );
  });
};

const joke = () => {
  let type = Math.random() < 0.5;
  console.log(type);
  let joke = document.querySelector("#joke");
  joke.innerHTML = `Loading ${type ? "Programming" : "Dark"} joke`;
  fetch(
    `https://v2.jokeapi.dev/joke/${type ? "Programming" : "Dark"}?type=single`
  ).then((response) => {
    response.json().then((data) => (joke.innerHTML = data.joke));
  });
};

hashNode();
joke();

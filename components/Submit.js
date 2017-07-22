import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

function Submit({ createPost }) {
  function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.elements.title.value;
    let url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = ''; // eslint-disable-line no-param-reassign
    e.target.elements.url.value = ''; // eslint-disable-line no-param-reassign
  }

  return (
    <div className="field" onSubmit={handleSubmit}>
      <div className="container">
        <div className="field">
          <label className="label">Name</label> { // eslint-disable-line
          }
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label> { // eslint-disable-line
          }
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
      </div>
      <h1>Submit</h1>
      <input placeholder="title" name="title" />
      <input placeholder="url" name="url" />
      <button type="submit">Submit</button>
      {/*
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
      */}
    </div>
  );
}

Submit.propTypes = {
  createPost: PropTypes.func.isRequired,
};

const createPost = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (title, url) => mutate({
      variables: { title, url },
      updateQueries: {
        allPosts: (previousResult, { mutationResult }) => {
          const newPost = mutationResult.data.createPost;
          return Object.assign({}, previousResult, {
            // Append the new post
            allPosts: [newPost, ...previousResult.allPosts],
          });
        },
      },
    }),
  }),
})(Submit);

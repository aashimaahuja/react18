import * as React from 'react';
import { Suspense } from 'react';
import './style.css';

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => data);
}

function fetchData() {
  const postsPromise = fetchPosts();
  return {
    posts: wrapPromise(postsPromise),
  };
}

const resource = fetchData();

const PostDetails = () => {
  const posts = resource.posts.read();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default function SuspenseDemo() {
  return (
    <div>
      <h3 className="note"> Note: Test this on slow network </h3>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostDetails />
      </Suspense>
    </div>
  );
}

const color = require('../color');
const moment = require('moment');
const React = require('react');

module.exports = ({ post }) => (
  <section className="mv4">
    <time dateTime={post.createdOn} className="f6">
      {moment(post.createdOn).format('MMMM DD, YYYY')}
    </time>
    <h2 className={`f3 fw5 mv3 lh-title ${color(post.slug)}`}>
      <a href={post.url} className="no-underline">
        {post.title}
      </a>
    </h2>
    <article
      className="PostContent f5 lh-copy serif justify"
      dangerouslySetInnerHTML={{ __html: post.excerpt }}
    />
    <p>
      <a href={post.url} className={`f6 fw5 no-underline ${color(post.slug)}`}>
        Continue reading...
      </a>
    </p>
  </section>
);

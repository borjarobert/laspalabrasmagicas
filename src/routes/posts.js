const getPosts = async () => {
  const res = await fetch('https://blog.vps.brobert.net/ghost/api/v3/posts/?key=59fe182cd749ef21320efd7af3');
  const allPosts = await res.json();
  const posts = await allPosts.posts;
  return {
    posts
  }
}
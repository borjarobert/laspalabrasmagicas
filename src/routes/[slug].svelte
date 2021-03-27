<script context="module">
	export const prerender = true;
  const url = "https://blog.vps.brobert.net/ghost/api/v3/content/posts/?key=59fe182cd749ef21320efd7af3";
	export async function load({ page, fetch }) {
		const res = await fetch(`https://blog.vps.brobert.net/ghost/api/v3/content/posts/slug/${page.params.slug}/?key=59fe182cd749ef21320efd7af3`);
    const post = await res.json();
    console.log("El post: ", post.posts[0])
		return {
			props: {
				post: post.posts[0]
			}
		};
	}
</script>
<script>
  export let post
  let featureImage = 'yoal-desurmont-jqgsM3B9Fpo-unsplash-1.jpg';
  if (post.feature_image) {
    featureImage = post.feature_image;
  }
</script>
<svelte:head>
  <title>{post.title}</title>
  <link rel="stylesheet" href="posts.css">
</svelte:head>
<div class="header" style="background-image: url({featureImage});">
  <div class="header-content">
    <h3>Artículo</h3>
    <h1>{post.title}</h1>
    <div class="meta"></div>
  </div>
</div>
<main>{@html post.html}</main>

<style>
  main {
    max-width: 1140px;
    margin: 4rem auto;
    color: #eee;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
  }
  .header {
    min-height: calc(16rem + 14vh);
		background-position-x: center;
		background-position-y: -400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-origin: initial;
    background-clip: initial;
    background-color: #222426;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
  }
  .header-content {
    max-width: 1140px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  h1 {
    color: #fefefe;
    font-family: 'Fira Sans',sans-serif;
    font-size: 3rem;
  }
  h3 {
    color: #ddd;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    .header {
      min-height: 50vh;
      padding: 1rem;
      background-position-y: -200px;
    }
    h1 {
      font-size: 2.5rem;
    }
    main {
      padding: 1rem;
      margin: 0 auto;
    }
  }
</style>
<script context="module">
	export async function load({page, fetch, session, context }) {
		const url = "https://blog.vps.brobert.net/ghost/api/v3/content/posts/?key=59fe182cd749ef21320efd7af3";
		const res = await fetch(url);
		const allPosts = await res.json();
		const posts = allPosts.posts;

		return {
			props: {
				posts: await posts
			}
		};
	}
</script>
<script>
	export let posts;
	console.log(posts);
	const parseDate = (d) => {
		const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
		const year = d.split("-")[0];
		const month = d.split("-")[1];
		const day = d.split("-")[2].split("T")[0];

		console.log(year, months[month-1], day);

		return `${day} ${months[month-1]}. ${year}`
	}
</script>

<svelte:head>
	<title>Las palabras mágicas</title>
</svelte:head>

<main>
	<div class="header" style="background-image: url('yoal-desurmont-jqgsM3B9Fpo-unsplash-1.jpg');">
		<h1>Las palabras mágicas</h1>
		<h2>«We be of one blood, ye and I»</h2>
	</div>

	<div class="content">
		{#each posts as post}
		<div class="post">
			<div class="title">
				<a href="{post.slug}">{post.title}</a>
			</div>
			<div class="meta">
				Por Borja, el {parseDate(post.updated_at)}
			</div>
			<div class="excerpt">
				{post.excerpt}
			</div>
		</div>
		{/each}
	</div>
</main>

<style>
	h1, h2 {
		margin: 0;
		color: #fefefe;
		grid-row: 1/2;
		grid-column: 1/2;
		display: block;
		text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
	}
	h1 {
		font-family: "Fira Sans", sans-serif;
		font-size: 3rem;
		/* margin-bottom: 1rem; */
		font-weight: 700;
	}
	h2 {
		font-family: 'Cormorant Garamond', serif;
		font-style: italic;
		font-weight: 300;
		font-size: 2.5rem;
	}
	.header {
		min-height: calc(16rem + 14vh);
		background-image: url('yoal-desurmont-jqgsM3B9Fpo-unsplash-1.jpg');
		background-position-x: center;
		background-position-y: -400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-origin: initial;
    background-clip: initial;
    background-color: rgba(0, 0, 0, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.content {
		max-width: 1140px;
		margin: 2rem auto;
		padding: 0 2rem;
	}
	.post {
		margin: 1rem 0;
		padding: 2rem 0 5rem 0;
		border-bottom: 1px solid grey;
	}
	.title {
		font-family: 'Fira Sans', sans-serif;
		font-size: 2.5rem;
		margin: 1rem auto;
		
	}
	.title a {
		text-decoration: none;
		color: #eee;
		padding: 0 8px;
	}
	.title a:hover {
		box-shadow:inset 0 -20px 0 0 rgba(150, 199, 115, 0.05);
	}
	.meta {
		font-family: 'Fira Sans', sans-serif;
		color: #eee;
		font-weight: 300;
		padding: 0 8px;
	}
	.excerpt {
		font-family: 'Cormorant Garamond',serif;
		color: #eee;
		font-size: 1.4rem;
		line-height: 2rem;
		font-weight: 300;
		margin: 1rem 0;
		padding: 0 8px;
	}
</style>

<script context="module">
	export async function load({page, fetch, session, context }) {
		// const url = "https://blog.vps.brobert.net/ghost/api/v3/content/posts/?key=59fe182cd749ef21320efd7af3";
		const url = "https://cockpit.vps.brobert.net/api/collections/get/Posts/entries"
		const res = await fetch(url);
		const allPosts = await res.json();
		const posts = allPosts.entries;
	

		return {
			props: {
				posts: await posts
			}
		};
	}
</script>
<script>
	export let posts;
	const parseDate = (d) => {
		const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
		const year = d.split("-")[0];
		const month = d.split("-")[1];
		const day = d.split("-")[2].split("T")[0];
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
				<a rel="prefetch" href="{post.slug}">{post.title}</a>
			</div>
			<div class="meta">
				<!-- Por Borja, el {parseDate(post.updated_at)} -->
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
		padding: 0 1rem;
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
		font-size: 2.2rem;
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
		max-width: 900px;
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
	}
	.meta {
		font-family: 'Fira Sans', sans-serif;
		color: #eee;
		font-weight: 300;
	}
	.excerpt {
		font-family: 'Cormorant Garamond',serif;
		color: #eee;
		font-size: 1.4rem;
		line-height: 2rem;
		font-weight: 300;
		margin: 1rem 0;
	}
	@media (max-width: 768px) {
		.header {
			background-position-y: -200px;
			background-position-x: -200px;
			min-height: 50vh;
		}
		h1, h2 {
			padding: 0 1rem;
		}

		h1 {
			font-size: 2.5rem;
			text-align: center;
		}
		h2 {
			font-size: 1.5rem;
			text-align: center;
			padding-top: 2rem;
		}
		.content {
			padding: 1rem;
			margin: 0 auto;
		}
		.post {
			padding: 2rem 0;
		}
	}
</style>

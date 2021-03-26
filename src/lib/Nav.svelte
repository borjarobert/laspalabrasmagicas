<script></script>
<nav>
  <a href="/">Portada</a>
</nav>

<style>
  nav {
    position: absolute;
    top: 0;
    width: auto;
    background: transparent;
    height: 5rem;
    padding: 0 5rem;
    display: flex;
    align-items: center;
  }
  a, a:visited {
    font-size: 0.9rem;
    padding: 0.5rem 0;
    font-family: 'Fira Sans', sans-serif;
    text-decoration: none;
    color: #ccc;
    font-weight: 500;
  }
  a:hover {
    /* box-shadow: inset 0 -1px 0 0 white; */
    color: #fff;
    outline: none;
    transition:ease-in-out 300ms;
  }
  @media (max-width: 768px) {
    nav {
      padding: 0 1rem;
      height: 3rem;
    }
  }
</style>
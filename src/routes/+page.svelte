<script>
    import Band from "$lib/components/Band.svelte";
    import Bio from "$lib/components/Bio.svelte";
    import Contacts from "$lib/components/Contacts.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Media from "$lib/components/Media.svelte";
</script>

<Header />
<main>
  <Hero />
  <Bio />
  <Band />
  <Media />
  <Contacts />
</main>
<Footer />
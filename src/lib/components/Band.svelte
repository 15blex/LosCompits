<script lang="ts">
  import abraham from "$lib/assets/images/band/abraham.jpeg";
  import facundo from "$lib/assets/images/band/facu.jpeg";
  import lalo from "$lib/assets/images/band/lalo.jpeg";
  import lucas from "$lib/assets/images/band/lucas.jpeg";
  import omar from "$lib/assets/images/band/omar.jpeg";
  import ricardo from "$lib/assets/images/band/ricardo.jpeg";

  const members = [
    {
      name: "Omar Alejandro Ramos Narváez",
      role: "Percusiones, Voz",
      country: "Colombia",
      img: omar,
    },
    {
      name: "Facundo López",
      role: "Percusiones, Voz",
      country: "Argentina",
      img: facundo,
    },
    {
      name: "Ricardo Garcia Gutierrez",
      role: "Trompeta",
      country: "Argentina",
      img: ricardo,
    },
    {
      name: "Lucas Raiquen Pereyra",
      role: "Trompeta",
      country: "Mexico",
      img: lucas,
    },
    {
      name: "Abraham Ruvalcaba",
      role: "Guitarra, Voz",
      country: "Brazil",
      img: abraham,
    },
    {
      name: "Lalo Abbadié",
      role: "Contrabajo, Voz",
      country: "Mexico",
      img: lalo,
    },
  ] as const;
</script>

<section id="band">
  <h2>Los Compits</h2>
  <article>
    <p>Los Compits es una banda de cumbia, salsa y son cubano con sede en Barcelona. Fundada en 2024, la banda se ha ganado un lugar destacado en la escena musical local gracias a su energía contagiosa y su habilidad para fusionar ritmos tradicionales con un toque moderno.</p>
    <div class="members">
      {#each members as member}
        <div class="member">
          <img src={member.img} alt={member.name} />
          <p><strong>{member.name}</strong></p>
          <p>{member.role}</p>
          <p>{member.country}</p>
        </div>
      {/each}
    </div>
  </article>
</section>

<style>
  .members {
    display: grid;
  }

  @container content (width > 42rem) {
    .members {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

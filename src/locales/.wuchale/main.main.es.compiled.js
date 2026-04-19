
                /** @type import('wuchale').CompiledElement[] */
export let c = ["Los Compits | Cumbia, Salsa y Son Cubano en Barcelona","Grupo de músicos de Barcelona que interpreta cumbia, salsa y son cubano para eventos, calles y celebraciones.","Los Compits","La Banda","Biografía","Toggle color scheme","Inicio","Medios","Contactos","Los Compits logo","Cerrar el menú de navegación","Abrir el menú de navegación","Cumbia, Salsa y Son Cubano","Español","Català","Italiano","Français","Deutsch","English","Idiomma","Selecciona el idioma","Este grupo se forma en las calles de Barcelona trasladando cada uno de sus integrantes el sabor de sus tierras lanzando un mensaje de alegria y igualdad que no dejará indiferente a nadie.","El nombre de la banda define el carnalismo amistad y buena onda que representan siendo de diferentes partes del mundo y sin tener lazos de sangre (los compit’s) nos harán bailar y olvodarnos de los prejuicios que envuelven este mundo.","Nuestros Contactos","¿Quieres que toquemos en tu evento?","Estamos listos para llevar la magia de Los Compits a tu próxima celebración.",[[0]," Email: ",[1,"info@loscompits.com"]],[[0]," Teléfono: ",[1]],"Facebook","Instagram",[[0]," Redes sociales: ",[1]],"Omar Alejandro Ramos Narváez","Percusiones, Voz","Colombia","Facundo López","Argentina","Ricardo Garcia Gutierrez","Trompeta","Lucas Raiquen Pereyra","Mexico","Abraham Ruvalcaba","Guitarra, Voz","Brazil","Lalo Abbadié","Contrabajo, Voz","Los Compits es una banda de cumbia, salsa y son cubano con sede en Barcelona. Fundada en 2024, la banda se ha ganado un lugar destacado en la escena musical local gracias a su energía contagiosa y su habilidad para fusionar ritmos tradicionales con un toque moderno.",["Copyright © 2024 Los Compits. Todos los derechos reservados. ",[0]," Hecho con ",[1]," y ",[2]," por Los Compits"]]
                // only during dev, for HMR
                let latestVersion = -1
                // @ts-ignore
                export function update({ version, data }) {
                    if (latestVersion >= version) {
                        return
                    }
                    for (const [ index, item ] of data['es'] ?? []) {
                        c[index] = item
                    }
                    latestVersion = version
                }
            

class perfil { 
    constructor(img, nombre , año , descr) {
        this.img = img
        this.nombre = nombre
        this.año = año
        this.descr = descr
    }



}

const personalidad1 = new perfil('/img/sarmi.jpg',"Domingo Faustino Sarmiento",1811,"Presidente-Profesor-Mason")
const personalidad2 = new perfil('/img/sanma.jpg',"José de San Martín",1778,"Militar-Libertador-Gobernador")
const personalidad3 = new perfil('/img/gardel.jpg',"Carlos Gardel",1890,"Actor-Compositor-Cantante")
const personalidad4 = new perfil('/img/fangio.jpg',"Juan Manuel Fangio",1911,"Corredor,Mecanico,Publicista")
const personalidad5 = new perfil('/img/evita.jpg',"María Eva Duarte de Perón",1919,"Actriz-Politica-Activista")
const personalidad6 = new perfil("https://w7.pngwing.com/pngs/434/127/png-transparent-mystery-mysterious-man-s-woman-silhouette-thriller-thumbnail.png",prompt("¿Quien sera su personalidad Argentina?"),parseInt(prompt("¿En que año nacio?")),prompt("Realice una pequeña descripcion"))


let historia = [personalidad1,personalidad2,personalidad3,personalidad4,personalidad5,personalidad6]

let similWiki = document.getElementById("similWiki")
let subir = document.getElementById("subir")

subir.addEventListener('click',() => { 
    historia.forEach((persoArray,indice) => { 
        similWiki.innerHTML += `
        <div class="card" id="${indice}" style="width: 18rem;">
        <img src=${persoArray.img} class="card-img-top"  width="350" height="350" alt="...">
        <div class="card-body">
              <h5 class="card-title">${persoArray.nombre}</h5>
              <p class="card-text">Año de Nacimiento: ${persoArray.año}</p>
              <p class="card-text">Breve Descripcion: ${persoArray.descr}</p>
             
  </div>
</div>

`
})

})

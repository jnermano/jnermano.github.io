var galerie = [
    {
        id : 1,
        img: "https://www.igc-construction.fr/images/modeles/plans/plan-maison-lumineuse-gaia-105m.jpg",
        titre: "Modèle Maison Gaïa 105",
        sous_titre: "Une maison contemporaine dans l'esprit du modèle Gaïa",
        description_courte: "Gaïa 105 est un <b>modèle moderne</b>, privilégiant le <b>confort</b> dans toute la maison.",
        description: `Gaïa 105 est un <b>modèle moderne</b>, privilégiant le <b>confort</b> dans toute la maison. Elle dispose d’une surface de 105 m² optimisée, composée de <b>3 grandes chambres et un bureau</b>. Le salon séjour de 35 m² bénéficie de larges baies vitrées pour un plein ensoleillement. Les menuiseries aluminium noires apportent cachet et élégance à l'ensemble de la maison.<br/>
                        <br/>Selon l'orientation du terrain et selon vos préférences, de nombreuses options et aménagements sont possibles.`,
        photos : [
            "https://www.igc-construction.fr/images/modeles/plans/plan-maison-lumineuse-gaia-105m.jpg",
            "https://www.igc-construction.fr/images/modeles/styles/maison-lumineuse-gaia-105-facade-arriere.jpg"
        ]
    },
    {
        id: 1,
        img: "https://www.igc-construction.fr/images/modeles/plans/Lisy_surface1_75.jpg",
        titre: "Modèle Maison moderne Lisy",
        sous_titre: "Lisy, un modèle spacieux et stylisé",
        description_courte: "Lisy est une maison spacieuse et résolument contemporaine.",
        description: `Lisy est une maison spacieuse et résolument contemporaine. Son plan en L permet une organisation judicieuse et une circulation aisée entre l'espace nuit et l’espace jour. <br/><br/>Le séjour, baigné de lumière, bénéficie d’une large ouverture sur l’arrière.

<br/><br/>Ajoutez ce modèle à votre sélection pour recevoir une documentation gratuite complète.`,
        photos: [
            "https://www.igc-construction.fr/images/modeles/plans/Lisy_surface1_75.jpg",
            "https://www.igc-construction.fr/images/modeles/styles/lisy---ar-2.jpg"
        ]
    },
    {
        id: 1,
        img: "https://www.igc-construction.fr/images/modeles/plans/maison-baia-moderne-plan.jpg",
        titre: "Modèle Maison Baïa moderne",
        sous_titre: "Une belle maison contemporaine de plain pied",
        description_courte: "<b>Dans sa version moderne, la maison Baïa</b> propose de nombreux styles à la fois élégants et contemporains.",
        description: `<b>Dans sa version moderne, la maison Baïa</b> propose de nombreux styles à la fois élégants et contemporains. Le vaste salon séjour bénéficie d'un bel ensoleillement grâce à ses baies coulissantes et ouvre sur une terrasse couverte idéale pour les journées d'été. <br/><br/>Baïa offre une circulation facilitée entre espace jour et espace nuit, tous deux délimités par une division originale de la toiture en 2 pentes et en 3 pentes. `,
        photos: [
            "https://www.igc-construction.fr/images/modeles/plans/maison-baia-moderne-plan.jpg",
            "https://www.igc-construction.fr/images/modeles/styles/maison-moderne-baia.jpg"
        ]
    },
    {
        id: 1,
        img: "https://www.igc-construction.fr/images/modeles/plans/maison-moderne-elbe-planetage.jpg",
        titre: "Modèle Maison contemporaine Elbe",
        sous_titre: "Une maison moderne avec toit terrasse très design",
        description_courte: "Le modèle Elbe est une <b>maison à étage avec toit terrasse</b> résolument contemporaine aux lignes pures et aux  façades rythmées.",
        description: `Le modèle Elbe est une <b>maison à étage avec toit terrasse</b> résolument contemporaine aux lignes pures et aux  façades rythmées. Elle propose un toit terrasse de près de 30 m² et de larges ouvertures vitrées offrant un ensoleillement optimal aux pièces de vie. 
        <br/><br/>A l'intérieur, la distribution des pièces est optimisée. Le rez-de-chaussée bénéficie d'un vaste salon - séjour très lumineux de près de 60 m² et une vaste suite parentale de 13 m² avec son dressing et sa salle d'eau privative. <br/><br/>A l'étage, 3 grandes chambres et leur salle d'eau respective. Une passerelle permet d'accéder à l'espace multimédia.`,
        photos: [
            "https://www.igc-construction.fr/images/modeles/plans/maison-moderne-elbe-planetage.jpg",
            "https://www.igc-construction.fr/images/modeles/styles/maison-moderne-elbe3d-05.jpg"
        ]
    },
    {
        id: 1,
        img: "https://www.igc-construction.fr/images/modeles/plans/plan-maison-classique-baia.jpg",
        titre: "Modèle Maison Baïa classique",
        sout_titre: "Une maison de plain pied confortable au plan fonctionnel",
        description_courte: "Dans sa version classique, <b>le modèle de maison Baïa</b> propose un porche abritant la porte d'entrée et permettant d'accéder au vaste salon séjour.",
        description: `Dans sa version classique, <b>le modèle de maison Baïa</b> propose un porche abritant la porte d'entrée et permettant d'accéder au vaste salon séjour. Ce dernier bénéficie d'un bel ensoleillement grâce à de larges baies vitrées et ouvre sur une terrasse couverte sous toiture idéale pour les journées estivales. <br/><br/>Le modèle Baïa offre une circulation facilitée dans la maison entre espace jour et espace nuit, tous deux délimités par une division originale de la toiture en 2 pentes et en 3 pentes.`,
        photos: [
            "https://www.igc-construction.fr/images/modeles/plans/plan-maison-classique-baia.jpg",
            "https://www.igc-construction.fr/images/modeles/styles/maison-classique-baia-facade-avant.jpg"
        ]
    }
]


for (let i = 0; i < galerie.length; i++) {
    const element = galerie[i];

    var content = `
        <div class="grid-item">
            <h3>${element.titre}</h3>
            <img src="${element.img}" alt="${element.titre}" onclick="show_details(${i})" >
            <p>${element.description_courte}</p>
        </div>
    `;

    var grid_container = document.getElementById('grid_container');
    grid_container.innerHTML += content;
    
}

function show_details(pos) {
    const ele = galerie[pos];

    var ps = "";
    for (let i = 0; i < ele.photos.length; i++) {
        const p = ele.photos[i];
        ps += `
            <div class="grid-item">
                <img class="details_img" src="${p}" alt="${p}">
            </div>
        `;
    }

    var content = `
        <div class="grid-container" id="details_container">
            ${ps}
        </div>
        <p>${ele.description}</p>
    `;

    document.getElementsByClassName('modal-content')[0].style.width = '80%';
    add_content(ele.titre, content);
}
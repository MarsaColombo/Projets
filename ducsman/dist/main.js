fetch("vitrine.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    data.articles.forEach(function (article) {
    
      let zoneAffichage = document.getElementById("zoneAffichage");
      let articleDiv = document.createElement("div");
      articleDiv.innerHTML = `
                    <img class="img" src="${article.img}" alt="${article.nom}"/>
                    <p class="produit">${article.nom}</p>
                    <p class="prix">${article.prix}€</p>
                    <p class="produit">${article.designation}</p>`;
      zoneAffichage.appendChild(articleDiv);
    });
  });

// const min1 = 0;
// const max1 = 2;
// const randomInteger1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
// console.log(randomInteger1);

// let zoneAffichage1 = document.getElementById("1");
// let affichageArticle1 = `<img src="${data.articles[randomInteger1].img}"<p>${data.articles[randomInteger1].nom}</p>${data.articles[randomInteger1].prix}€<p><p>${data.articles[randomInteger1].designation}</p>`
// zoneAffichage1.innerHTML = affichageArticle1

// const min2 = 3;
// const max2 = 4;
// const randomInteger2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
// console.log(randomInteger2);

// let zoneAffichage2 = document.getElementById("2");
// let affichageArticle2 = `<img src="${data.articles[randomInteger2].img}"<p>${data.articles[randomInteger2].nom}</p>${data.articles[randomInteger2].prix}€<p><p>${data.articles[randomInteger2].designation}</p>`
// zoneAffichage2.innerHTML = affichageArticle2

// const min3 = 5;
// const max3 = 6;
// const randomInteger3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
// console.log(randomInteger3);

// let zoneAffichage3 = document.getElementById("3");
// let affichageArticle3 = `<img src="${data.articles[randomInteger3].img}"<p>${data.articles[randomInteger3].nom}</p>${data.articles[randomInteger3].prix}€<p><p>${data.articles[randomInteger3].designation}</p>`
// zoneAffichage3.innerHTML = affichageArticle3

// const min4 = 7;
// const max4 = 9;
// const randomInteger4 = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
// console.log(randomInteger4);

// let zoneAffichage4 = document.getElementById("4");
// let affichageArticle4 = `<img src="${data.articles[randomInteger4].img}"><p>${data.articles[randomInteger4].nom}</p>${data.articles[randomInteger4].prix}€<p><p>${data.articles[randomInteger4].designation}</p>
// `
// zoneAffichage4.innerHTML = affichageArticle4

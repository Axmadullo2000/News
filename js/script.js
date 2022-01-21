/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];
/** 1-task */
let newsButton = document.querySelector(".promo__btn button");

newsButton.remove();
/** 2-task */
let promoGenre = document.querySelector(".promo__genre");

promoGenre.textContent = "UzNews";

promoGenre.style.color = "red";

console.log(promoGenre);
/** 3-task */
let promoBackground = document.querySelector(".promo__bg");

promoBackground.classList.add("promoBackground");


/** 4-task and 5-task */
let promoInteractive = document.querySelector("ul.promo__interactive-list");
news.forEach((item, index, arr) => {
  let list = document.createElement("li");
  let deleteElement = document.createElement("div");
  promoInteractive.append(list);
  list.textContent = `${index + 1}) ${item}`;
  list.classList.add("promo__interactive-item");
  list.append(deleteElement);
  deleteElement.classList.add("delete");
  console.log(item);
});
console.log(promoInteractive);


/** 6-task */
let readMore = document.querySelector(".promo__btn button");
readMore.style.borderRadius = "20px";

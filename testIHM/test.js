import {Selector} from "testcafe";

fixture("Test des fonctionnalités - Stockcar")
.page("https://cours-qualite.groupe-esiea.fr/esieaFront/");

  test('Filtrage des voitures', async t=> {

      await t.typeText("#saisieRecherche", "Renault")
      .wait(1000)
      .click(Selector("button").withExactText("Rechercher"))
     .wait(2000)
      .click(Selector("a").withExactText("Accueil"))
.wait(2000);
  });

const carburantSelect = Selector('select[name="nvlle_carburant"]');
const carburantOption = carburantSelect.find("option");

  test('Ajout de voiture', async t=> {

     await t.click(Selector("a").withExactText("Ajouter une voiture"))
    .wait(2000)
    .typeText(Selector('input[name="nvlle_marque"]'), "Renault")
    .wait(1000)
    .typeText(Selector('input[name="nvlle_modele"]'), "Clio")
    .wait(1000)
    .typeText(Selector('input[name="nvlle_finition"]'), "grise")
    .wait(1000)
     .click(carburantSelect)
     .click(carburantOption.withText("Electrique"))
    .wait(2000)
    .typeText(Selector('input[name="nvlle_km"]'), "20")
    .wait(1000)
    .typeText(Selector('input[name="nvlle_annee"]'), "1998")
    .wait(1000)
    .typeText(Selector('input[name="nvlle_prix"]'), "3000")
    .wait(2000)
     .click(Selector("button").withExactText("Ajouter"))
     .wait(3000);
 });
 
test('Consultation du détail et suppresion de la première voiture', async t=> {

    await t.click(Selector("a").withExactText("Détails"))
    .wait(3000)
    .click(Selector("button").withExactText("Supprimer"))
    .wait(3000);
});

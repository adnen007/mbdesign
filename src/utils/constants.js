import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Accueil",
    url: "/",
  },
  {
    id: 3,
    text: "Produits",
    url: "/products",
  },
  {
    id: 2,
    text: "À propos",
    url: "/about",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Notre mission est de redéfinir votre expérience du mobilier. Nous nous efforçons de créer des pièces personnalisées qui rehaussent votre espace de vie, alliant fonctionnalité et savoir-faire exquis.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Notre vision est de devenir votre référence en matière de mobilier personnalisé, en offrant des créations uniques et intemporelles qui transcendent les tendances.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "histoire ",
    text: "Notre parcours humble commence avec une passion pour le mobilier sur mesure. Guidés par notre dévouement à l'artisanat de qualité, nous nous sommes progressivement établis comme une présence respectée dans l'industrie",
  },
];

export const products_url = "https://www.mbdesign.tn/jsonDB/all_products.json";
//"https://www.mbdesign.tn/jsonDB/all_products.json"
// "https://www.course-api.com/react-store-products";

// export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;

export const colors = ["#ff0000", "#00ff00", "#0000ff", "#000000", "#ffb900"];

export const text =
  "Bienvenue chez MDdesign, où nous nous spécialisons dans la création de meubles sur mesure adaptés à votre goût. Concevez votre espace de confort avec nous et créez un lieu qui reflète votre style unique et améliore votre relaxation. Explorez notre collection soigneusement sélectionnée et transformez votre maison en un sanctuaire de luxe et de confort.";

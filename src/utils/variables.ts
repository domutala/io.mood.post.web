export const categories = [
  { text: "hôtel" },
  { text: "restaurant" },
  { text: "évènement" },
  { text: "boutique" },
  { text: "entreprise" },
  { text: "parc" },
  { text: "plage" },
  { text: "activité" },
];

export const scores = [
  { text: "excellent", value: 5 },
  { text: "très bon", value: 4 },
  { text: "moyen", value: 3 },
  { text: "médiocre", value: 2 },
  { text: "horrible", value: 1 },
];

export const serverErrorTexts: { [key: string]: string } = {
  notAuthorised: "Vous n'avez pas l'autorisation pour cet action.",
  noAppRecongnized: "Votre session n'est valide.",
  noAccountFound: "Accun compte utilisateur n'est trouvé.",
  notValidData: "Veuillez vérifier les données transmises.",
  notElementFound: "Les données que vous essayez d'accéder sont introuvables.",
};

export const services: { [key: string]: { icon: string; en: string } } = {
  parking: {
    icon: "<img src='/img/services/outdoor-parking.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  piscine: {
    icon: "<img src='/img/services/swimming-pool.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "salle de sport": {
    icon: "<img src='/img/services/dumbbells.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "bar/lounge": {
    icon: "<img src='/img/services/cocktail.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "navette aéroport": {
    icon: "<img src='/img/services/transfer.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "salles de conférence": {
    icon: "<img src='/img/services/house.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "wi-fi gratuit": {
    icon: "<img src='/img/services/wifi.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "serviettes et draps": {
    icon: "<img src='/img/services/towel.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  sauna: {
    icon: "<img src='/img/services/soap.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  restaurant: {
    icon: "<img src='/img/services/food-tray.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "petit-déjeuner": {
    icon: "<img src='/img/services/breakfast.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "petit-déjeuner dans la chambre": {
    icon: "<img src='/img/services/breakfast.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "piscine avec bar intégré": {
    icon: "<img src='/img/services/outdoor-parking.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "internet haut débit": {
    icon: "<img src='/img/services/browser.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "location de voitures": {
    icon: "<img src='/img/services/taxi.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "location de bateaux et chaloupiers": {
    icon: "<img src='/img/services/sailboat.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "service de taxi": {
    icon: "<img src='/img/services/taxi.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "visite guidée et découverte": {
    icon: "<img src='/img/services/map 2.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "activités en mer": {
    icon: "<img src='/img/services/float.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  randonné: {
    icon: "<img src='/img/services/map 2.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "salle de réception": {
    icon: "<img src='/img/services/house.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "salles de réunion": {
    icon: "<img src='/img/services/house.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  spa: {
    icon: "<img src='/img/services/towel.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "soins du visage": {
    icon: "<img src='/img/services/nail-polish.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "massage corporel": {
    icon: "<img src='/img/services/nail-polish.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  hammam: {
    icon: "<img src='/img/services/nail-polish.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "salon de coiffure": {
    icon: "<img src='/img/services/hair-straightener.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "bain de vapeur": {
    icon: "<img src='/img/services/shower.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "sécurité 24 heures sur 24": {
    icon: "<img src='/img/services/cctv.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "stockage des bagages": {
    icon: "<img src='/img/services/cctv.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "concierge et portier": {
    icon: "<img src='/img/services/chef.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "change des devises": {
    icon: "<img src='/img/services/chat.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  boutiques: {
    icon: "<img src='/img/services/ticket-office.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "plage et services intégrés": {
    icon: "<img src='/img/services/sun-umbrella.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "réception 24 heures sur 24": {
    icon: "<img src='/img/services/badge.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  nettoyage: {
    icon: "<img src='/img/services/mop.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
  "service de blanchisserie et repassage": {
    icon: "<img src='/img/services/washing-machine 2.png' style='width: 100%'; height: 100%' />",
    en: "",
  },
};

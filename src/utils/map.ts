import * as leaflet from "leaflet";
import Axios from "axios";

export const create = (
  element: string | HTMLElement,
  pos: leaflet.LatLngExpression,
  zoom = 14
) => {
  const map = leaflet.map(element).setView(pos, zoom);

  leaflet
    .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  // leaflet.control.
  return map;
};

export const draw = ({ map, element }: { map: leaflet.Map; element: any }) => {
  const pos: leaflet.LatLngExpression = element.address.coordinates;
  const icons = [
    "boutique",
    "activité",
    "entreprise",
    "évènement",
    "hôtel",
    "parc",
    "restaurant",
  ];

  let icon = "pin";

  if (icons.includes(element.category)) {
    icon = element.category;
  }

  leaflet
    .marker(pos)
    .addTo(map)
    .bindPopup(element.name, { closeButton: false })
    .setIcon(
      leaflet.icon({
        iconUrl: `/img/map-${icon}.png`,
        iconSize: [36, 36],
      })
    );
};

export const geocoding = async (city: string) => {
  const res = await Axios.get(
    `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${city}`
  );

  if (!res || !res.data) {
    return [];
  }

  return res.data.features as any[];
};

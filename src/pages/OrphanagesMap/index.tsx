import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMakerImg from '../../images/map-marker.svg';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import './styles.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,
  iconSize: [58,68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Petrolina</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map 
        center={[-9.3638924,-40.5432299]}
        zoom={20}
        style={{ width: '100%', height: '100%' }}
      >

        <TileLayer 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker 
          icon={mapIcon}
          position={[-9.3638924,-40.5432299]}
        >
          <Popup 
            closeButton={false} 
            minWidth={240} 
            maxWidth={240} 
            className="map-popup"
          >
            Lar das meninas
            <Link to="/organages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>

        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

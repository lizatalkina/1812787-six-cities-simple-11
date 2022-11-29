import { Hotel } from '../types/hotels';

export const nearbyHotels: Hotel[] = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 222,
      isPro: true,
      name: 'Max',
    },
    id: 1234,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg' ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 3.4,
    title: 'Wood and stone place',
    type: 'Private room',
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: ['Wi-Fi','Towels', 'Cabel TV'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 333,
      isPro: true,
      name: 'Angelina',
    },
    id: 12345,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 150,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  }, {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 111,
      isPro: false,
      name: 'Angelina',
    },
    id: 123,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    maxAdults: 5,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.7,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Nice!',
    goods: [],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 444,
      isPro: false,
      name: 'Mary',
    },
    id: 1223,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 1,
    previewImage: 'img/apartment-03.jpg',
    price: 100,
    rating: 2.3,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  }
];

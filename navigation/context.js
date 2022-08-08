import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from '../Config/firebase';
import db from '../Config/database';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [user, setUser] = useState([]);
  const [categories, setCategories] = useState([]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image:
        'https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2021/04/evento-h%C3%ADbrido.jpg',
      title: 'Vitrine Pub',
      day: '30',
      month: 'MAR.',
      hours: '18:00 - 7:00',
      type: 'privado',
      location: 'Rua Antonio Neco 552',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2',
      day: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '11',
      day: '',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      day: '',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      day: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      day: '',
    },
  ];

  useEffect(() => {
    db.collection('categories').onSnapshot((querySnapshot) => {
      var dt = []
      querySnapshot.forEach((doc) => {
        dt.push({ ...doc.data(), id: doc.id });
      });
      setCategories(dt);
    });
  });

  const dataProvider = {
    user,
    DATA,
    categories,
  };

  return (
    <DataContext.Provider value={dataProvider}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  const { user, DATA, categories } = context;

  return {
    user,
    DATA,
    categories,
  };
}

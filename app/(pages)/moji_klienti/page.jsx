"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function MojiKlienti() {
  const [emails, setEmails] = useState([]); // Stav pro uchovávání emailů

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/klienti");
        setEmails(res.data.emails); // Uložení emailů do stavu
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // useEffect bez závislostí spustí fetchData pouze jednou při mountnutí komponenty

  return (
    <div className='h-screen'>
      {emails.length > 0 ? (
        emails.map((email, index) => {
          return <p key={index}>{email}</p> // Přidání klíče při mapování
    })
      ) : (
        <p>Načítání emailů...</p>
      )}
    </div>
  );
}

export default MojiKlienti;

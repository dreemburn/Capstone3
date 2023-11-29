import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading/Loading';
import Pagination from './Pagination';
import { API_BASE_URL } from '../Api/api'; 
import './Houses.css';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);

  const getIdFromUrl = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  };

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const apiUrl = `${API_BASE_URL}/houses?page=${currentPage}&pageSize=${pageSize}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setHouses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, [currentPage, pageSize]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="houses-container">
      {houses.map((house) => (
        <div key={house.url} className="house-card">
          <h2>{house.name}</h2>
          <p>Titles: {house.titles.join(', ') || 'N/A'}</p>
          <p>Current Lord: {house.currentLord ? <Link to={`/characters/${getIdFromUrl(house.currentLord)}`}>{house.currentLord}</Link> : 'N/A'}</p>
          <p>Sworn Members: {house.swornMembers.length > 0 ? house.swornMembers.map((member) => <Link key={member} to={`/characters/${getIdFromUrl(member)}`}>{member}</Link>).join(', ') : 'N/A'}</p>
        </div>
      ))}

      <div className="pagination-container">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>{'<'}</button>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={(newPage) => setCurrentPage(newPage)}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
        />
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>{'>'}</button>
      </div>
    </div>
  );
};

export default Houses;

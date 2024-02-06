'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Footer from '../assets/footer';
export default function Home() {
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'https://www.top-7.net/api/fetch-home-data'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endpoint, options)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        const decodedData = JSON.parse(responseData);
        console.log(decodedData)
        setJsonData(decodedData);
      } catch (err) {
        setError(JSON.stringify({ error_code: "api_one", message: (err as Error).message }));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
     <section className="hero-section">
    <div className="container">
      <div className="banner-text text-center">
        <h1 className="hero-heading wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
          Beyond the Buzz
        </h1>
        <p className="hero-content wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
          <span>Discover the Top 7 Essentials in Every Category!</span><br />
          <b>Start your search today!</b>
        </p>
        <div className="banner-search hidden">
          <form className="d-flex flex-wrap align-items-center hero-search-form" action="step-1-success.html">
            <input type="text" className="form-control search-input" placeholder="Enter the city name..." />
            <button type="submit" className="btn btn-primary">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 118.783 118.783"  xmlSpace="preserve">
                <g>
                  <path d="M115.97,101.597L88.661,74.286c4.64-7.387,7.333-16.118,7.333-25.488c0-26.509-21.49-47.996-47.998-47.996
                    S0,22.289,0,48.798c0,26.51,21.487,47.995,47.996,47.995c10.197,0,19.642-3.188,27.414-8.605l26.984,26.986
                    c1.875,1.873,4.333,2.806,6.788,2.806c2.458,0,4.913-0.933,6.791-2.806C119.72,111.423,119.72,105.347,115.97,101.597z
                     M47.996,81.243c-17.917,0-32.443-14.525-32.443-32.443s14.526-32.444,32.443-32.444c17.918,0,32.443,14.526,32.443,32.444
                    S65.914,81.243,47.996,81.243z"></path>
                </g>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  <div className="footer-others">
   
   {jsonData && (
    <ul className="also-list">
       {jsonData.map((item: any, index: number) => (
        <li key={index}>
          {/* Render your data here */}
          <a>{item.slug}</a>
          {/* You can access other properties similarly */}
        </li>
      ))}
      </ul>
      )}
    
</div>
    </>
  );
}

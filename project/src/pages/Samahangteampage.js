import React from 'react';
import NavBar from './components/navbar';

const SamahangteamPage = () => {
    
    const marginTopValue = '60px'; 

    return (
        <div>
            <NavBar />
            <div style={{ width: '100%', height: '500px', overflow: 'hidden', marginTop: marginTopValue }}>
                
                <img src="/samahangteampic.png" alt="Samahang Team Photo" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>About Us</h2>
                <p>
                    Established in 1986 for the annual Samahang Pilipino Cultural Night, Samahang Modern is UCLA's premiere competitive dance team.
                    Composed of students balancing their academic goals with their creative passions, Samahang Modern is dedicated to dance, professionalism, family, and cultural roots.
                    We come together to cultivate a space to share a love for dance and each other, for there are Good Days Ahead.
                </p>
            </div>

            {/* Additional sections for Samahang team page */}
            {/* ... */}


        </div>
    );
};

export default SamahangteamPage;

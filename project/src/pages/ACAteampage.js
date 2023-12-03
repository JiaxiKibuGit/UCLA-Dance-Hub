import React from 'react';
import NavBar from './components/navbar';

const ACAteampage = () => {
    return (
        <div>
            <NavBar />
            <div style={{ width: '100%', height: '500px', overflow: 'hidden', marginTop: '60px' }}>
                <img src="/acateampic.jpg" alt="ACA Team Photo" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>About Us</h2>
                <p>
                    ACA is a competitive dance team based at UCLA, composed of dancers who share a love for all styles of dance and performance.
                    We are a family that values and encourages dedication, teamwork, and growth.
                    With all the late nights dancing in parking lots while balancing jobs, extracurriculars, and rigorous academics, our dancers achieve the discipline and work ethic that will make them influential leaders in the community.
                    he skills we learn and the strong friendships we make contribute to how ACA has become a supportive network that goes beyond just dancing.
                    With this foundation in our professionalism and love for one another,
                    we hope to inspire and be inspired as we continue to strengthen our presence in the dance community!
                </p>
            </div>

            {/* Additional content can go here. . */}
            <div style={{ marginTop: '20px' }}>
                <h2>More About Us</h2>
                <p>
                    {/* Add more descriptive content here */}
                    add additional sections about the team, such as achievements, upcoming events
                </p>
                {/* sff images, videos, etc., as needed. */}
            </div>

        </div>
    );
};

export default ACAteampage;

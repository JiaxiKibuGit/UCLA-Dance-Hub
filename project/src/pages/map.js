import NavBar from './components/navbar';

export default function Map() {
  return (
    <div>
      <NavBar />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src="map.png"
          alt="UCLA Map"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Creating a resizable circle */}
        <div
          style={{
            position: 'absolute',
            bottom: '14%', // Adjust position from bottom
            left: '30%', // Adjust position from left
            width: '3%', // Adjust the relative size
            paddingBottom: '2.75%', // Maintain aspect ratio for circle
            borderRadius: '50%',
            backgroundColor: 'black', // Change the inside color of the circle
            backgroundImage: 'radial-gradient(circle at 50% 50%, #7ef542, #5ae813)', // Change the inside color using a gradient
            border: '1.5px solid black', // Add a black border or outline to the circle
            boxSizing: 'border-box', // Ensure the border size doesn't increase the circle's overall size
          }}
        ></div>
      </div>
    </div>
  );
}

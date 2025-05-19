export const Contact_us = () => {
  return (
    <>
      <div className="detailsection">
        <div className="details">
          <p>Discover top-rated options like:</p>
          <div className="detaillist">
            <p>Spicy Delight (Indian) from Delhi, India 🌶️</p>
            <p>Sakura Sushi Bar (Japanese) in Tokyo, Japan 🍣</p>
            <p>Pasta Paradise (Italian) in Rome, Italy 🍝</p>
            <p>Uncle Jii Restaurant (French) in Paris, France 🥐</p>
            <p>Burger King (Mexican) from Mexico City, Mexico 🍔</p>
          </div>
        </div>
        <div className="msg_box">
          <div className="contact_section inputbox1">
            <input type="text" name="" id="" placeholder="enter your name" />
          </div>
          <div className="contact_section inputbox2">
            <input type="email" name="" id="" placeholder="enter your email" />
          </div>
          <div className="contact_section inputbox3">
            <textarea
              placeholder="Enter your message"
              rows="5"
              cols="40"
            ></textarea>
          </div>
          <button className="search-btn">submit</button>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

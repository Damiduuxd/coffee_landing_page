import React from 'react';

function Page() {
  return (
    <div className="bg-accent p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-full mx-auto">
        <div className="flex flex-col items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tripadvisor.com/Restaurant_Review-g304138-d24894099-Reviews-Kandy_Catering_Service_Viyana_Cafe_Family_Restaurant-Kandy_Kandy_District_Centra.html"
            className="flex justify-center items-center mb-4"
          >
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
              alt="TripAdvisor"
              className="w-full max-w-[200px] text-left items-left justify-left flex"
            />
          </a>
          <div className="text-left text-black">
            <h2 className="text-xl font-bold mb-2 text-center">Zenbew coffee</h2>
             <p className="text-lg mb-2">TripAdvisor Traveler Rating</p>
            <p className="text-lg font-bold mb-4">🟢🟢🟢◯◐  5 reviews</p>
            <p className="text-lg mb-4">TripAdvisor Ranking</p>
            <p className="text-lg font-bold">#229 of 370 places to drink in Kandy</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Recent Traveler Reviews</h3>
              <ul className="list-disc pl-5">
                <li className="mb-2">
                  <p><strong>Food was amazing and great service by the staff</strong> We didn't wait much longer until food..."</p>
                </li>
                <li className="mb-2">
                  <p><strong>"The coffee is delicious, their extensive menu offers a wide variety of choices</strong> Perfect convenient location…"</p>
                </li>
                <li className="mb-2">
                  <p><strong>"Total rip-off! They have charged 5200 rupees for 2x Lattee. Tourists better not go there,"</strong> the...</p>
                </li>
                <li>
                  <p><strong>"Attention rip-off! Overpriced prices! Prices are created arbitrarily depending on the situation. Never again!"</strong></p>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-blue-500 underline"
              >
                Read reviews
              </a>
              <span className="mx-2">|</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-blue-500 underline"
              >
                Write a review
              </a>
            </div>
          </div>
        </div>
      </div>
      <script
        async
        src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=994&amp;locationId=24894099&amp;lang=en_US&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=true&amp;display_version=2"
        data-loadtrk
      ></script>
    </div>
  );
}

export default Page;

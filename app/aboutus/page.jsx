import React from 'react';

const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: "Our Journey",
        description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we are known for our commitment to quality and sustainability. Driven by passion, we create memorable coffee experiences, inviting you to join us in exploring the rich world of coffee, one cup at a time. Our journey is rooted in the belief that coffee is more than just a beverage; it's an art form that connects people. We source our beans ethically, ensuring that every cup you enjoy supports farmers and promotes environmental stewardship.\n\nAt Zenbrew, every sip tells a story of dedication, care, and a relentless pursuit of excellence. Our skilled baristas are trained to bring out the best flavors in every brew, using techniques honed over years of experience. We offer a diverse range of blends and single-origin coffees, each with its own unique profile, ensuring there's something for every palate. Our cozy cafes are designed to be welcoming spaces where you can relax, work, or catch up with friends.\n\nIn addition to our focus on quality coffee, we are committed to sustainability. We use eco-friendly packaging, support reforestation projects, and continuously seek ways to reduce our carbon footprint. We believe that great coffee and environmental responsibility go hand in hand. Join us in savoring the moments that matter, one perfect brew at a time, and become part of the Zenbrew family, where every cup is brewed with love and respect for our planet.",
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting process ensures a rich, satisfying experience in every cup. We are committed to quality, sustainability, and community.\n\nOur promise extends beyond just delivering exceptional coffee. We believe in building lasting relationships with the farmers who cultivate our beans, ensuring they receive fair wages and work in safe conditions. This ethical approach helps create a sustainable livelihood for those who are at the heart of our coffee production.\n\nQuality is paramount at Zenbrew. Our expert roasters carefully monitor each batch, bringing out the unique flavors and aromas of our premium beans. From the moment the beans are harvested to the final brew, every step is handled with precision and care.\n\nSustainability is woven into the fabric of everything we do. We use eco-friendly packaging, promote recycling, and support environmental initiatives to reduce our carbon footprint. By choosing Zenbrew, you’re making a conscious choice to support a brand that values the environment.\n\nCommunity is at the core of our mission. We aim to create a welcoming space where coffee lovers can come together, share stories, and build connections. Whether you visit one of our cozy cafes or enjoy our coffee at home, you are part of the Zenbrew family.\n\nJoin us in our commitment to exceptional coffee, ethical practices, and a positive impact on the world. With Zenbrew, every cup you enjoy contributes to a better future for our planet and the people who inhabit it.",
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Our Team",
        description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.\n\nOur team is a diverse group of coffee enthusiasts, each bringing their own unique talents and backgrounds to Zenbrew. From the early morning hours when our roasters begin their meticulous work, to the friendly smiles of our baristas as they craft your favorite drink, every member of our team is committed to excellence.\n\nOur roasters are true artisans, mastering the delicate balance of time and temperature to unlock the full potential of our beans. They are passionate about their craft, constantly experimenting with new techniques and blends to ensure we offer the best possible coffee. Their dedication to quality and innovation is the cornerstone of our brand.\n\nOur baristas are the face of Zenbrew, creating the perfect cup of coffee and providing exceptional customer service. They are trained to bring out the best in our beans, using precise brewing methods to highlight the unique flavors of each blend. Beyond their technical skills, our baristas are warm, approachable, and always eager to share their coffee knowledge with our customers.\n\nWe believe that a great coffee experience goes beyond the beverage itself; it's about the people who make it possible. Our team members are not just employees; they are part of the Zenbrew family. We take pride in fostering a supportive and inclusive work environment where everyone can thrive.\n\nEach member of our team has a unique story to tell, and we celebrate the diverse paths that have brought them to Zenbrew. Whether it's a lifelong passion for coffee, a love of culinary arts, or a commitment to sustainability, our team's collective experiences enrich our brand and enhance the experience we offer to our customers.\n\nJoin us at Zenbrew and get to know the talented individuals who pour their hearts into every cup. We invite you to experience the creativity, care, and dedication that define our team and make Zenbrew a beloved coffee destination.",
    }
];

function Page() {
    return (
        <div className="bg-white">
        <div className="container mx-auto mt-20 bg-gray-400">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <article className="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-all hover:shadow-xl mb-8 mt-5">
                    <h2 className='h2 text-black mb-4 flex justify-center cursor-default'>
                                {item.title.split('').map((char, i) => (
                                    <span key={i} className={i === 1 ? 'text-accent' : ''}>
                                        {char}
                                    </span>
                                ))}
                            </h2>
                        <div className="bg-white p-4 sm:p-6 text-center mt-14">
                        
                            <p className="text-sm leading-relaxed text-black cursor-default">
                                {item.description}
                            </p>
                        </div>
                    </article>
                    {index < data.length - 1 && <hr className="border-t border-white my-4" />}
                </React.Fragment>
            ))}
        </div>
        </div>
    );
}

export default Page;

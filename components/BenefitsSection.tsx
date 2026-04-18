import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "CELL RENEWAL (AUTOPHAGY)",
      image: "/images/Rectangle 112.png",
      desc: "Autophagy, a \"biological miracle\" triggered by fasting and awarded the Nobel Prize in Medicine in 2016, is a cellular renewal process essential for vitality, emotional balance, performance, mental clarity, healthy aging, and longevity."
    },
    {
      title: "FOCUSED ON THE WEIGHT LOSS",
      image: "/images/Rectangle 112.png",
      desc: "Kickstart weight loss (average 2.5 kg) with targeted action on abdominal fat while maintaining lean mass—ideal for athletes and those seeking high performance. The secret? Your body thinks it's fasting, but you're still eating."
    },
    {
      title: "CHANGE YOUR RELATIONSHIP WITH FOOD",
      image: "/images/Rectangle 112.png",
      desc: "With ProLon, in 5 days you'll learn to understand and transform your relationship with food. You can feel good and active, even without compulsive eating or overindulging."
    },
    {
      title: "GREATER SENSE OF WELL-BEING",
      image: "/images/Rectangle 112.png",
      desc: "Your emotional well-being is one of the great benefits: after ProLon, most people finally feel satisfied, unlike long diets that often lead to giving up. You feel more energetic, regenerated, vital, and with a clearer mind."
    },
    {
      title: "HEALTHIER SKIN AND YOUNG",
      image: "/images/Rectangle 112.png",
      desc: "Clinically proven to reduce wrinkles and fine lines after 3 ProLon cycles (15 days total). Your skin regenerates from within, an effect users have come to love!"
    },
    {
      title: "COMFORTABLE, IT ADAPTS TO EVERY LIFESTYLE",
      image: "/images/Rectangle 112.png",
      desc: "With ProLon, in 5 days you'll learn to understand and transform your relationship with food. You can feel good and active, even without compulsive eating or overindulging."
    }
  ];

  return (
    <section className="w-full bg-white pt-0 pb-16 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        <div className="w-[1px] h-[72px] bg-[#1E4036] mb-12 origin-top" />

        <div className="max-w-[1222px] text-center mb-16">
          <h2 className="text-[#1E4036] text-[24px] md:text-[38px] leading-[30px] md:leading-[40px] font-sans font-normal">
            Thanks to technology that simulates fasting, <br className="hidden md:block" />
            our products help you regain energy and well-being from within. <br className="hidden md:block" />
            Find out why more and more people are choosing to fast...while eating.
          </h2>
        </div>

        {/* Updated Gap to 23px (gap-[23px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[23px] justify-items-center">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="w-full max-w-[394px] min-h-[346px] bg-white/50 backdrop-blur-sm rounded-[20px] p-4 md:p-5 flex flex-col items-center text-center border border-gray-100/50 shadow-sm"
            >
              <div className="w-[363px] max-w-full h-[104px] rounded-[12px] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-[#1E4036] font-sans font-bold text-[14px] tracking-[0.05em] uppercase mb-3">
                {item.title}
              </h3>
              
              <div className="w-[296px] max-w-full h-[2px] bg-[#56A511] mb-4" />
              
              <p className="text-[#1E4036] text-[13px] leading-[18px] font-sans opacity-80 px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
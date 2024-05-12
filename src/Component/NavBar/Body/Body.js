import React from "react";

import Card2 from "./Card2";
import Card3 from "./Card3";
import Card1 from "./Card1";
import Card4 from "./Card4";
function Body() {
  const cardData1 = [
    {
      title: "250+",
      image:
        "https://th.bing.com/th/id/OIP.9iuW9DlW4mdGjO1mSc4xDgHaFl?w=1324&h=999&rs=1&pid=ImgDetMain",
      text1: "Cities covered",
      text2: "Across India, Australia, New Zealand and the UK",
    },
    {
      title: "55 Cr+",
      image: "https://cdn.buttercms.com/TxWkEkAbShKtaTRpL9Qu",
      text1: "Yearly rides",
      text2: "Booked by our customers every year",
    },
    {
      title: "12 Cr+",
      image:
        "https://wealden.greenparty.org.uk/wp-content/uploads/sites/86/2021/04/undraw_Ride_a_bicycle_2yok.png",
      text1: "Kilometers on S1",
      text2: "Distance covered on Ola S1 scooters within a year of launch",
    },
  ];
  const cardData2 = [
    {
      title: "For any budget",
      image:
        "https://envato-shoebox-0.imgix.net/7840/3b9c-f437-459b-99c7-e45a20981bb0/2020_10_25_gleb_81781.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=ec157406df1da56da90a1f9a27831f34",
      text: "From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.",
    },
    {
      title: "For any distance",
      image:
        "https://envato-shoebox-0.imgix.net/902b/3179-636d-47e9-ac0c-210c1c9a2a84/FD2A8053.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=1e3a092bc1182f53e6361bc9ecf61519",
      text: "Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.",
    },
    {
      title: "For any duration",
      image:
        "https://envato-shoebox-0.imgix.net/4882/5005-93d0-4e7d-8f11-68cfbd537a44/B94A8658.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=ae8e9f9bfb1ee5fc7b5453ace0e474ba",
      text: "Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.",
    },
  ];
  const cardData3 = [
    {
      title: "Ola signs PLI agreement",
      image:
        "https://cdn.pixabay.com/photo/2020/10/10/14/31/windmills-5643293_1280.jpg",
      buttonText: "Know More",
    },
    {
      title: "Ola to invest $500 million",
      image:
        "https://media.istockphoto.com/id/1459438017/photo/close-up-of-businessmen-shaking-hands-with-glowing-forex-chart-on-blurry-office-interior.jpg?s=1024x1024&w=is&k=20&c=S4jRRyQuZyWgXNkwBCLFdY7S6j7ltlbjMOHsPZqXUng=",
      buttonText: "Know More",
    },
    {
      title: "India's first indigenous cell",
      image:
        "https://cdn.pixabay.com/photo/2016/10/22/20/20/battery-1761602_1280.jpg",
      buttonText: "Know More",
    },
  ];
  const cardData4 = [
    {
      title: "Ola",
      image:
        "https://th.bing.com/th/id/OIP.45uU2drwtTGpE1iy05FscAHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      text: "Book cabs, buy insurance, access Ola Money and much more",
    },
    {
      title: "Ola Driver",
      image:
        "https://th.bing.com/th/id/OIP.45uU2drwtTGpE1iy05FscAHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      text: "Register as a driver to take rides, see your earnings and incentives",
    },
  ];

  return (
    <>
      <div>
        <h1 className="p-4 font-Font font-medium text-5xl  [text-shadow:_0_2px_0_rgb(192_242_100_/_80%)] pt-32">
          Global mobility ecosystem driving{" "}
        </h1>
        <h1 className="gap-1 font-Font font-medium text-5xl [text-shadow:_0_2px_0_rgb(192_242_100_/_90%)]">
          communities forward
        </h1>
      </div>
      <div className="flex flex-wrap p-5 justify-center">
        {cardData1.map((data, index) => (
          <Card1
            key={index}
            title={data.title}
            image={data.image}
            text1={data.text1}
            text2={data.text2}
          />
        ))}
      </div>
      <div>
        <h1 className="pt-56 pb-10 font-Font font-medium text-5xl [text-shadow:_0_2px_0_rgb(192_242_100_/_95%)]">
          There's an Ola ride for everyone
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap p-5 gap-6 justify-center">
          {cardData2.map((data, index) => (
            <Card2
              key={index}
              title={data.title}
              image={data.image}
              text={data.text}
            />
          ))}
        </div>
      </div>
      <div className="bg-lime-50 h-full mt-64 ">
        <h1 className="pt-24 p-8 font-Font font-medium text-5xl  [text-shadow:_0_2px_0_rgb(192_242_100_/_80%)]">
          Recent from our blogs{" "}
        </h1>
        <div className="flex flex-wrap  gap-6 justify-center  pb-24">
          {cardData3.map((cards, index) => (
            <Card3
              key={index}
              title={cards.title}
              image={cards.image}
              buttonText={cards.buttonText}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="pt-32 font-Font font-medium text-5xl text-left pl-44 p-3">
          {" "}
          Download our apps to{" "}
        </h1>
        <h1 className=" font-Font font-medium text-5xl text-left pl-44 pb-5 ">
          {" "}
          get the best experience
        </h1>
        <div className="flex flex-wrap p-5 gap-6 justify-left pl-44 pb-40 ">
          {cardData4.map((data, index) => (
            <Card4
              key={index}
              title={data.title}
              image={data.image}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;

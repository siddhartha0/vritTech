import Image from "next/image";
import ambassador from "../../assets/topsection.jpg";
import React from "react";

const TopSection = () => {
  return (
    <main className="relative">
      <section className="z-[-99]">
        <Image src={ambassador} alt="img" height={150} width={1350} />
      </section>

      <section className="absolute flex flex-col gap-4 top-32 right-20">
        <header className="text-4xl"> Glamourous Collection</header>
        <p>From Classic to Stylish, We've got you covered</p>
        <button className="flex place-items-center bg-brand-bg mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-3xl place-content-center hover:animate-slide-in-left">
          <article>Shop Collection</article>
          {/* <Icon name={ChevronRight} /> */}
        </button>
      </section>
    </main>
  );
};

export default TopSection;

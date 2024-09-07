import React from "react";
import { FaHome } from "react-icons/fa";

const Add: React.FC = () => {
  return (
    <div className="bg-[#ffedd5]">
      <section className="page-hero py-12 flex justify-center bg-[#ffedd5]">
        <div className="container w-full text-center">
          <ul className="bg-[#ffffff] inline-flex h-12 w-[200px] items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
            <li className="leading-none text-dark">
              <a className="inline-flex items-center gap-2" href="#">
                <FaHome className="text-lg text-[#39b19d]" />
                <span className="text-lg font-semibold text-[#39b19d]">
                  Home
                </span>
              </a>
            </li>
            <li className="leading-none text-dark">
              <span className="text-base leading-none">/ About Us </span>
            </li>
          </ul>

          <div className="page-hero-content mx-auto max-w-[768px]">
            <h1 className="text-3xl md:text-6xl mb-10 mt-12 merriweather">
              Rejoignez Lmo9f
            </h1>
            <p className="karla max-w-[600px] md:max-w-[800px] mx-auto text-[#7e7575]">
              Prêt à simplifier votre recherche de services ? Rejoignez la
              communauté Lmo9f dès aujourd'hui. Publiez vos besoins, explorez
              les offres disponibles, et découvrez la facilité de trouver un
              prestataire qualifié en quelques clics.
            </p>
            <div className="mt-11 justify-center sm:flex">
              <a
                className="m-3 px-5 py-5 rounded-full text-white merriweather text-md block sm:inline-block bg-[#39b19d] hover:bg-[#39b19d]"
                href="#"
              >
                Découvrir les Gigs
              </a>
              <a
                className="m-3 px-5 py-5 rounded-full border-2 border-[#39b19d] text-[#39b19d] karla block min-w-[160px] sm:inline-block hover:bg-[#39b19d] hover:text-white"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 lg:pt-10 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-4xl leading-tight font-bold mb-10 merriweather">
              Une Communication Directe et Efficace
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Lmo9f facilite la communication entre les clients et les
              prestataires. Une fois que vous avez posté votre demande, vous
              pouvez échanger directement avec les prestataires pour clarifier
              les détails du service, négocier les prix, et fixer un
              rendez-vous. Tout se fait de manière simple et rapide, sans
              intermédiaires inutiles.
            </p>
          </div>

          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/coummunicate2.jpeg"
              className="w-full rounded-lg"
              alt="Communication"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 lg:py-32 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/communicate.jpg"
              className="w-full rounded-lg"
              alt="Communicate"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-3xl text-[#39b19d] leading-tight font-bold mt-4 mb-10 merriweather">
              Un Service Géolocalisé Unique
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Notre plateforme propose également un service unique basé sur la
              géolocalisation. Imaginez que vous avez une urgence - une fuite
              d'eau, une panne électrique, ou tout autre problème nécessitant
              une intervention rapide. Grâce à notre carte interactive, vous
              pouvez poster votre problème en temps réel, et les prestataires de
              services à proximité reçoivent instantanément une notification.
              Ils peuvent alors vous proposer leurs services, et vous pouvez
              choisir l'offre qui vous convient le mieux.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 lg:py-32 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-3xl text-[#39b19d] leading-tight font-bold mt-4 mb-10 merriweather">
              Une Large Gamme de Services
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Chez Lmo9f, nous offrons une vaste sélection de services pour
              répondre à tous vos besoins domestiques ou professionnels. Nos
              prestataires peuvent facilement publier leurs services sous forme
              de cartes, similaires à des 'gigs', vous permettant de parcourir
              et de choisir les offres qui correspondent le mieux à vos
              attentes.
            </p>
          </div>

          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/services.jpg"
              className="w-full rounded-lg"
              alt="Services"
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 lg:py-32 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/communicate.jpg"
              className="w-full rounded-lg"
              alt="Communicate"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-3xl text-[#39b19d] leading-tight font-bold mt-4 mb-10 merriweather">
              Des Prestataires de Confiance
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Tous les prestataires inscrits sur Lmo9f sont soigneusement
              sélectionnés et évalués par notre communauté d'utilisateurs. Vous
              pouvez consulter les avis et les évaluations laissés par d'autres
              clients pour vous assurer que vous faites le bon choix. Nous nous
              engageons à vous offrir des services fiables et de haute qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-16 lg:py-32 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-3xl text-[#39b19d] leading-tight font-bold mt-4 mb-10 merriweather">
              Pourquoi Lmo9f ?
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Lmo9f n'est pas simplement une plateforme de mise en relation.
              C'est un outil conçu pour rendre votre vie plus simple et plus
              efficace. Que vous soyez un particulier à la recherche d'un
              service ponctuel ou un professionnel ayant besoin d'une assistance
              continue, Lmo9f vous offre la flexibilité et la commodité
              nécessaires pour gérer vos besoins en toute sérénité.
            </p>
          </div>

          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/services.jpg"
              className="w-full rounded-lg"
              alt="Services"
            />
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="py-16 lg:py-32 flex justify-center text-center">
        <div className="flex flex-col lg:flex-row lg:-mx-8 items-center">
          <div className="w-[350px] md:w-[600px] mt-12 lg:mt-0 flex justify-center">
            <img
              src="/assets/images/communicate.jpg"
              className="w-full rounded-lg"
              alt="Communicate"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-xl md:text-3xl text-[#39b19d] leading-tight font-bold mt-4 mb-10 merriweather">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="mt-2 max-w-[600px] mx-auto text-[#7e7575] text-lg font-semibold">
              Bienvenue chez Lmo9f, votre plateforme de référence pour trouver
              et réserver des services professionnels de qualité. Que vous ayez
              besoin d'un plombier, d'un électricien, d'un peintre, ou de tout
              autre artisan, Lmo9f vous simplifie la vie en vous mettant
              directement en contact avec des prestataires de services
              qualifiés, où que vous soyez.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;

import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard
            name="Samudra"
            email="samudra@gmail.com"
            street="Desa Klegen"
            city="Pemalang"
          />
          <UserCard
            name="Habibi"
            email="habibi@gmail.com"
            street="Desa Petarukan"
            city="Pemalang"
          />
          <UserCard
            name="Arka"
            email="arka@gmail.com"
            street="Desa Pati"
            city="Pati"
          />
        </div>
      </div>
    </>
  );
}

export default Exercise;

import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:scale-105 hover:bg-red-100 hover:border hover:border-red-300 flex flex-col justify-between"
    >
      {/* Judul */}
      <h2 className="text-lg font-bold text-gray-800 mb-3">{title}</h2>

      {/* Isi post */}
      <p className="text-gray-600 mb-4 text-sm">{body}</p>

      {/* Tombol */}
      <button
        onClick={() => setClicked(!clicked)}
        className={`px-4 py-2 text-white rounded-md transition-all duration-300 ${
          clicked
            ? "bg-special-red2 hover:bg-[#d84e36]"
            : "bg-gray-400 hover:bg-gray-500"
        }`}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;

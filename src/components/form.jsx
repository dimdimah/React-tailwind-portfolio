import { useState } from "react";
import Swal from "sweetalert2";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Terkirim!", "Pesan Anda telah terkirim.", "success");
  };

  return (
    <div className="flex items-center justify-center my-8 bg-white">
      <form onSubmit={handleSubmit} className="p-6 rounded shadow-md">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none bg-[#FFF8F8] focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="message"
          >
            Pesan
          </label>
          <textarea
            className="w-full h-20 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none resize-none bg-[#FFF8F8] no-resize focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

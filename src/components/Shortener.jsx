import React, { useState } from "react";
import { bgShortenDesktop, bgShortenMobile, logo } from "../assets/images";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!url.trim()) {
      return;
    }

    const response = await fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    });

    const data = await response.json();
    setLinks((prevLinks) => [
      ...prevLinks,
      {
        original: url,
        shortened: data.data.tiny_url,
        copied: false,
      },
    ]);

    setUrl("");
  }

  async function handleLinkCopy(shortenedUrl) {
    try {
      await navigator.clipboard.writeText(shortenedUrl);

      setLinks((prevLinks) =>
        prevLinks.map((link) => ({
          ...link,
          copied: link.shortened === shortenedUrl,
        })),
      );
    } catch (error) {
      console.error("Failed to copy", error);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center p-8">
        <div className="relative w-[50em] rounded-xl overflow-hidden p-4 md:p-8">
          <picture>
            <source media="(max-width: 768px)" srcSet={bgShortenMobile} />
            <img
              className="absolute top-0 left-0 -z-10 w-full h-full bg-slate-900"
              src={bgShortenDesktop}
              alt=""
            />
          </picture>
          <form
            onSubmit={handleFormSubmit}
            className="flex gap-3 justify-center items-center w-full"
          >
            {links.map((link) => {
              <span>{link}</span>;
            })}
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="px-6 py-3 w-180 bg-white rounded-lg border-none outline-none"
              placeholder="paste your link here..."
              type="url"
            />
            <button className="px-6 py-3 bg-teal-500 font-bold text-white rounded-md cursor-pointer hover:bg-teal-600">
              Shorten
            </button>
          </form>
        </div>
      </div>
      {/* Output */}
      <div className="py-4 px-16 md:px-32">
        {links.map((link) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-between items-center p-4"
              key={link.shortened}
            >
              <p className="text-slate-600">{link.original}</p>
              <div className="flex gap-4 items-center">
                <p className="font-medium text-teal-600">{link.shortened}</p>
                <button
                  onClick={() => handleLinkCopy(link.shortened)}
                  className="text-md md:text-lg font-bold text-white bg-teal-500 px-4 py-2 rounded-full cursor-pointer hover:bg-teal-600"
                >
                  {link.copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shortener;

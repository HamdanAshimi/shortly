import { useState } from "react";

export default function Shorten() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([
    {
      original: "https://frontendmentor.io",
      shortened: "https://rel.ink/k4IKyk",
    },
    {
      original: "https://twitter.com/frontendmentor",
      shortened: "https://rel.ink/gxOXp9",
    },
    {
      original: "https://linkedin.com/frontend-mentor",
      shortened: "https://rel.ink/gob3X9",
    },
  ]);

  const [copied, setCopied] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!link.trim()) {
      setError("Please add a link");
      return;
    }

    setError("");

    const newLink = {
      original: link,
      shortened:
        "https://rel.ink/" + Math.random().toString(36).substring(2, 8),
    };

    setLinks((prevLinks) => [newLink, ...prevLinks]);
    setLink("");
  };

  const handleCopy = async (shortenedLink) => {
    await navigator.clipboard.writeText(shortenedLink);

    setCopied(shortenedLink);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section id="shorten" className="relative bg-gray-100">
      {/* Shorten Container */}
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        {/* Form */}
        <form
          id="link-form"
          onSubmit={handleSubmit}
          className="relative -mt-20 flex w-full flex-col space-y-4 rounded-lg bg-darkViolet p-10 md:flex-row md:space-x-3 md:space-y-0"
        >
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={`flex-1 rounded-lg border-2 bg-gray-100 p-3 focus:outline-none ${
              error ? "border-red" : "border-transparent"
            }`}
            placeholder="Shorten a link here"
            id="link-input"
          />

          <button
            type="submit"
            className="rounded-lg bg-cyan px-10 py-3 text-white transition-transform duration-200 ease-out hover:scale-105 hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten It!
          </button>

          {/* Error Message */}
          {error && (
            <div
              id="err-msg"
              className="absolute bottom-3 left-7 text-sm italic text-red"
            >
              {error}
            </div>
          )}
        </form>

        {/* Links */}
        {links.map((item) => (
          <div
            key={item.shortened}
            className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row"
          >
            <p className="text-center font-bold text-veryDarkViolet md:text-left">
              {item.original}
            </p>

            <div className="flex flex-1 flex-col items-center justify-end space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">{item.shortened}</div>

              <button
                type="button"
                onClick={() => handleCopy(item.shortened)}
                className={`rounded-lg p-2 px-8 text-white transition-transform duration-200 ease-out hover:scale-105 hover:opacity-70 focus:outline-none ${
                  copied === item.shortened ? "bg-darkViolet" : "bg-cyan"
                }`}
              >
                {copied === item.shortened ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

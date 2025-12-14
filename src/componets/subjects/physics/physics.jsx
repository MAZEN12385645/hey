const Physics = () => {
  // استيراد كل ملفات PDF من نفس الفولدر
  const pdfFiles = import.meta.glob("./*.pdf", { eager: true });

  // تحويلهم لـ array + ترتيبهم أبجديًا
  const pdfs = Object.entries(pdfFiles).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  return (
    <div className="container w-90 max-lg:w-60 pt-2 bg-white/5 text-white mt-5 rounded-lg transition duration-300 ease-in-out">
      {pdfs.map(([path, file], index) => {
        const fileName = path
          .split("/")
          .pop()
          .replace(".pdf", "");

        return (
          <div
            key={index}
            className="border border-blue-700 bg-blue-300/10 mt-2 rounded-lg w-full flex justify-center items-center hover:bg-blue-300/20 transition"
          >
            <a
              href={file.default}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-center max-lg:text-sm no-underline text-white w-full"
            >
              {fileName}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Physics;

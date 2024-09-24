import React, { useEffect, useState } from "react";

function KeyFiguresP() {
  const [keyFigures, setKeyFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeyFigures = async () => {
      try {
        const response = await fetch("https://rabbit-api.onrender.com/api/key-figures?populate=*");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setKeyFigures(data.data);
      } catch (error) {
        console.error("Error fetching key figures:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKeyFigures();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="p-5">
      <h1 className="text-center mt-5 text-[20px] font-bold text-[#276BA3]">KEY FIGURES</h1>
      <div className="block lg:hidden flex flex-col items-center mt-10">
        {keyFigures.map((figure) => (
          <div key={figure.id} className="w-[80%] mb-5 bg-[#276BA3] rounded-lg">
            <div className="h-[100px] bg-[#276BA3] flex justify-center items-center">
              <h1 className="font-bold text-[30px] text-white">
                {figure.attributes.number}
              </h1>
            </div>
            <div className="h-[60px] bg-[#276BA3] bg-opacity-50 flex justify-center items-center">
              <p className="text-center w-[90%] text-[18px] text-white">
                {figure.attributes.desrciption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyFiguresP;

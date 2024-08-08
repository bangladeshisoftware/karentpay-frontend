import Image from 'next/image';

const GlobalAvailability = async () => {
  const response = await fetch(
    'https://countriesnow.space/api/v0.1/countries/flag/images',
    {
      method: 'GET'
    }
  );
  const result = await response?.json();
  const countries = result?.data ?? [];
  const minifiedCountries = countries?.slice(0, 32);

  return (
    <section className="bg-gradient-2 py-[70px] mt-[90px] mb-[40px] text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">
          All payment systems will be available in the future.
        </h2>
        <p className="mt-3">
          We currently supported in 2 countries, with more to come. Once future
          is supported in your country, you&apos;ll be able to sell to customers
          anywhere in the world.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 justify-center mt-16">
          {minifiedCountries.map((country, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={country.flag}
                alt={country.name}
                width={20}
                height={10}
                className="w-7 rounded"
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GlobalAvailability;

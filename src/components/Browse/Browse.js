import Header from "../Header";

const Browse = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Header />
      <div className="flex items-center justify-center h-[70vh]">
        <h2 className="text-3xl">Welcome to your dashboard!</h2>
      </div>
    </div>
  );
};

export default Browse;

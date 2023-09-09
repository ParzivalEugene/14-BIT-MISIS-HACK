import Header from "@/components/Header";

const page = () => {
  return (
    <div className="p-6">
      <Header />
      <main>
        <div className="bg-secondary-50">
          <h1>test</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
          <div className="bg-secondary-50 w-full">
            <h1>test</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;

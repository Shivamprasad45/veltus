"use client";
const StatsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Stat Item 1 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              1,542<span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Satisfied Clients
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">182</div>
            <div className="text-lg uppercase tracking-wider">Expert Team</div>
          </div>

          {/* Stat Item 3 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              285<span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Activate Products
            </div>
          </div>

          {/* Stat Item 4 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              27<span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Awards Winning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

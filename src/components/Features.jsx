import BrandRecognition from "../assets/images/icon-brand-recognition.svg";
import DetailedRecords from "../assets/images/icon-detailed-records.svg";
import FullyCustomizable from "../assets/images/icon-fully-customizable.svg";

export default function Features() {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="relative container mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        {/* Horizontal Line */}
        <div className="absolute left-16 top-24 hidden h-3 w-10/12 bg-cyan md:block"></div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 h-full w-2 -ml-1 bg-cyan md:hidden"></div>

        {/* Box 1 */}
        <div className="relative flex flex-col space-y-6 rounded-lg bg-white p-6 md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            {/* Image Container */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <img src={BrandRecognition} alt="" />
            </div>
          </div>

          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Brand Recognition
          </h5>

          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* Box 2 */}
        <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-8 md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            {/* Image Container */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <img src={DetailedRecords} alt="" />
            </div>
          </div>

          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Detailed records
          </h5>

          <p className="text-center text-gray-400 md:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Box 3 */}
        <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-16 md:w-1/3">
          {/* Image Positioning */}
          <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
            {/* Image Container */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
              <img src={FullyCustomizable} alt="" />
            </div>
          </div>

          <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
            Fully customizable
          </h5>

          <p className="text-center text-gray-400 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

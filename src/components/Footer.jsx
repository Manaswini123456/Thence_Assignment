import '../index.css'
const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-200 py-4 mt-auto rounded-2xl m-5 ">
      <div className="flex container mx-auto justify-between items-center w-full" style={{height:'200px'}}>
        <div className="text-left pl-4 text-2xl copyright font-bold font-manrope">
        © Talup 2023. All rights reserved.
        </div>
        <div className="flex justify-between text-right pr-4 text-2xl side_copy font-bold font-manrope">
          <a href="#" className="mr-4">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

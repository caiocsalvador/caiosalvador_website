import Social from "../social/social";

const Footer = () => {
  return (
    <footer className="border-white mt-10 border-t-[1px] py-6">
      <div className="container mx-auto flex justify-between">
        <p>&copy; Caio Salvador - 2023</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;

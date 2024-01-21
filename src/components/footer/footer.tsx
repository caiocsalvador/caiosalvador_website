import Social from "../social/social";

const Footer = () => {
  return (
    <footer className="mt-10 border-t-[1px] border-white px-4 py-6 lg:px-0">
      <div className="container mx-auto flex justify-between">
        <p>&copy; Caio Salvador - 2023</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;

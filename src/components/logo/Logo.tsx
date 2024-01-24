import './Logo.css';
// import next from '../../assets/logo/Next.png';
// import gen from '../../assets/logo/Gen.png';

const Logo = () => {
  return (
    <p>
      {/* font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#5C43F6] to-pink-[#BC61F3] */}
      <span className="l1">Next</span> <span className="l2 ">Gen</span>
      {/* <img src={next} alt="" />
      <img src={gen} alt="" /> */}
    </p>
  );
};

export default Logo;

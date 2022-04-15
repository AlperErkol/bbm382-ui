import { Link } from "react-router-dom";
import Register from "../components/Register";
import "antd/dist/antd.css";
import Header from "../components/Header";

const Account = () => {
  return (
    <div className="login">
		<Header/>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="mb-8">
          <span className="text-default-white text-lg font-bold uppercase">
            I already have an account.
          </span>
          <Link
            className="text-default-white text-lg font-bold uppercase"
            to={"/account/signin"}
          >
            <span className="text-tertiary"> Sign In.</span>
          </Link>
        </div>
        <div className="w-1/3 h-1/2">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Account;

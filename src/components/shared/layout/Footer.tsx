import { Heading4 } from "@/components/ui/Headings";
import { HeadphonesIcon, HelpCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-sky-500 py-6">
        <div className="px-6">
          <Heading4 className="text-white text-center">
            Still Have A Query?
          </Heading4>
          <p className="text-center text-white">
            You can feel free to contact us by initiating a query or email us.
          </p>
          <div className="flex max-w-2xl mx-auto mt-4">
            <div className="flex items-center gap-3 px-8">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-sky-500">
                <HelpCircleIcon size="40" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xl">Initiate Query</div>
                <div>Click here</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-8 border-s">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-sky-500">
                <HeadphonesIcon size="40" />
              </div>
              <div className="text-white">
                <div className="font-semibold text-xl">Call us</div>
                <div>+91 9213412038</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-3 bg-white">
        <div className="px-6 flex items-center justify-between">
          <div className="text-sm">
            &copy; Semantic Technologies Pvt. Ltd. {new Date().getFullYear()}.
            All Rights Reserved.
          </div>
          <div className="flex divide-solid divide-x text-sm text-center">
            <div className="px-3 border-slate-400">
              <Link to="/">Term Of Use</Link>
            </div>
            <div className="px-3 border-slate-400">
              <Link to="/">Disclaimer</Link>
            </div>
            <div className="px-3 border-slate-400">
              <Link to="/">Refund Policy</Link>
            </div>
            <div className="px-3 border-slate-400">
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

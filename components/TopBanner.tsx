// import { ShieldCheck } from "lucide-react";

export default function TopBanner() {
  /*
    Thin banner displayed above the navbar.
    Highlights NGO registration and legitimacy.
    Also shows committee contact number.
  */

  return (
    <div className="bg-yellow-400 text-black text-sm text-center py-2 px-4">
      {/* <ShieldCheck size={16} /> */}
      Registered Non-Profit Organization | Registration No. S/1L/31619 | A Voice
      for the Voiceless |
      <span className="font-semibold ml-1">
        Committee Phone: +91 70030 36536
      </span>
    </div>
  );
}

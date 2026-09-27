import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const headOffice = {
  country: "UAE",
  name: "Head office, Dafza",
  address: "D-07, Dafza, Dubai–UAE PO Box: 121743",
  phone: "+971 (4) 295 2885",
  email: "salesdwc@shepherdshipping.com",
  hours: "Mon to Sat, 8:30am to 5:00 pm",
  offDay: "Sun off",
};

const branches = [
  {
    country: "UAE",
    name: "Naif Branch",
    address: "Al Daari Building, 507b, Naif, Dubai",
    phone: "+971 56 175 7275",
    secondPhone: "+971 (4) 320001",
    hours: "Mon to Sat, 11 am to 11:30 pm, Sun off",
    email: "",
  },
  {
    country: "UAE",
    name: "Jebel Ali Branch",
    address: "Building no. BA06P021, near Gate No.7, Jebel Ali",
    phone: "+971 56 175 7275",
    secondPhone: "+971 (4) 345 3005",
    hours: "Mon to Sat, 8:30am to 6:30 pm, Sun off",
    email: "",
  },
  {
    country: "UAE",
    name: "DWC Branch Warehouse",
    address: "MKS 9 Freight Complex, Dubai South free zone, Dubai, UAE",
    phone: "+971 56 175 7275",
    secondPhone: "",
    hours: "9:00am to 5:00pm",
    email: "",
  },
  {
    country: "Hong Kong",
    name: "Hong Kong Branch",
    address:
      "Unit 12, 1/F, Pei Bun Industrial Building, No. 8 Wing Yip Street, Kwun Tong",
    phone: "+852 9446 9564",
    secondPhone: "",
    hours: "",
    email: "",
  },
  {
    country: "USA",
    name: "Miami Branch",
    address: "1791 NW 84th Ave, Suite B-65, Miami, FL 33126",
    phone: "1 (673) 643 1364",
    secondPhone: "",
    hours: "",
    email: "infous@shepherdshipping.com",
  },
  {
    country: "China",
    name: "China Branch",
    address:
      "Warehouse D-3, Building C, Zhongjie Storage Park, No. 83, Junon Avenue, Shimin Street, Baiyun District, Guangzhou",
    phone: "",
    secondPhone: "",
    hours: "9:00am to 5:00pm",
    email: "",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our offices and warehouses
          </h2>
          <p className="text-text-gray text-base leading-relaxed max-w-2xl">
            Find the Shepherd team nearest to you across the UAE, Hong Kong, the
            USA and China.
          </p>
        </div>

        {/* Head Office - Full Width Dark Card */}
        <div className="bg-primary rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                {headOffice.country}
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                {headOffice.name}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    {headOffice.address}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    {headOffice.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    {headOffice.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 md:text-right">
              <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0 md:hidden" />
              <div className="text-white/80 text-sm">
                <p>{headOffice.hours}</p>
                <p>{headOffice.offDay}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="location-card bg-white rounded-xl p-6 shadow-sm border border-border-light"
            >
              <span className="inline-block bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                {branch.country}
              </span>
              <h3 className="text-base font-bold text-primary mb-3">
                {branch.name}
              </h3>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-text-gray mt-0.5 flex-shrink-0" />
                  <span className="text-text-gray text-xs leading-relaxed">
                    {branch.address}
                  </span>
                </div>
                {branch.phone && (
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-text-gray mt-0.5 flex-shrink-0" />
                    <div className="text-text-gray text-xs">
                      <p>{branch.phone}</p>
                      {branch.secondPhone && <p>{branch.secondPhone}</p>}
                    </div>
                  </div>
                )}
                {branch.email && (
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-text-gray mt-0.5 flex-shrink-0" />
                    <span className="text-text-gray text-xs">
                      {branch.email}
                    </span>
                  </div>
                )}
                {branch.hours && (
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-text-gray mt-0.5 flex-shrink-0" />
                    <span className="text-text-gray text-xs">
                      {branch.hours}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CardTitle } from "@/components/ui/Headings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewspaperIcon, PanelsTopLeftIcon } from "lucide-react";
import ECARDLOGO from "@/assets/img/logo/ecard-logo-white.png";
import ECARDQR from "@/assets/img/eacard_qr.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const MyBenefits = () => {
  return (
    <div className="p-4 bg-white rounded mt-4">
      <Tabs defaultValue="groupMediClaim">
        <div className="flex gap-4 justify-between">
          <CardTitle className="flex gap-2 items-center">
            <NewspaperIcon /> My Benefits
          </CardTitle>
          <div>
            <TabsList className="TabsList">
              <TabsTrigger value="groupMediClaim" className="TabsTrigger">
                Group Medi-claim
              </TabsTrigger>
              <TabsTrigger value="termLifePolicy" className="TabsTrigger">
                Term Life Policy
              </TabsTrigger>
              <TabsTrigger
                value="groupPersonalAccident"
                className="TabsTrigger"
              >
                Group Personal Accident
              </TabsTrigger>
              <TabsTrigger value="gmcParentalCover" className="TabsTrigger">
                GMC (Parental Cover)
              </TabsTrigger>
              <TabsTrigger value="opd" className="TabsTrigger">
                OPD
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="groupMediClaim" className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 flex flex-col items-start p-4 rounded gap-4">
              <div className="bg-sky-200 text-theme-blue-500 rounded-full flex justify-center items-center w-12 h-12">
                <PanelsTopLeftIcon />
              </div>
              <div className="text-theme-blue-500 font-bold">
                Enrolment <br />
                Window
              </div>
              <div className="text-theme-blue-500 mt-auto">
                <div className="font-bold text-4xl">19</div>
                <div className="text-xs">Days remaining</div>
              </div>
            </div>
            <div className="bg-slate-100 flex flex-col items-start p-4 rounded gap-4">
              <div className="bg-sky-200 text-theme-blue-500 rounded-full flex justify-center items-center w-12 h-12">
                <PanelsTopLeftIcon />
              </div>
              <div className="text-theme-blue-500 font-bold">Insurance</div>
              <div className="text-theme-blue-500 mt-auto">
                <div className="font-bold text-4xl">126</div>
                <div className="text-xs">Days remaining</div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <Carousel className="h-full ecard-slider">
              <CarouselContent className="h-full ">
                <CarouselItem className="h-full">
                  <div className="gradient-ecard p-4 grid grid-cols-3 rounded h-full">
                    <div className="col-span-2">
                      <h4 className="text-white text-sm font-semibold mb-3">
                        Health & Wellness Card
                      </h4>
                      <table className="ecard-table w-full">
                        <tbody>
                          <tr>
                            <td>Policy Number</td>
                            <td>: xxx.xxxx.xxxxxxxxx</td>
                          </tr>
                          <tr>
                            <td>Valid Upto</td>
                            <td>: xx.xx.xxxx</td>
                          </tr>
                          <tr>
                            <td>Name</td>
                            <td>: xxxxxxx xxxxxxxxx</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>: xxxx</td>
                          </tr>
                          <tr>
                            <td>Age</td>
                            <td>: xx</td>
                          </tr>
                          <tr>
                            <td>ID Card No.</td>
                            <td>: xxxxx</td>
                          </tr>
                          <tr>
                            <td>Company’s Name</td>
                            <td>: xxxxxxx xxxxxxxxx</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-span-1">
                      <div className="flex justify-end mb-4">
                        <img src={ECARDLOGO} alt="ecard" />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src={ECARDQR} alt="ecardqr" />
                        <div className="text-xs text-white text-center">
                          Scan QR Code to access customer portal
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full">
                  <div className="gradient-ecard p-4 grid grid-cols-3 rounded h-full">
                    <div className="col-span-2">
                      <h4 className="text-white text-sm font-semibold mb-3">
                        Health & Wellness Card
                      </h4>
                      <table className="ecard-table w-full">
                        <tbody>
                          <tr>
                            <td>Policy Number</td>
                            <td>: xxx.xxxx.xxxxxxxxx</td>
                          </tr>
                          <tr>
                            <td>Valid Upto</td>
                            <td>: xx.xx.xxxx</td>
                          </tr>
                          <tr>
                            <td>Name</td>
                            <td>: xxxxxxx xxxxxxxxx</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>: xxxx</td>
                          </tr>
                          <tr>
                            <td>Age</td>
                            <td>: xx</td>
                          </tr>
                          <tr>
                            <td>ID Card No.</td>
                            <td>: xxxxx</td>
                          </tr>
                          <tr>
                            <td>Company’s Name</td>
                            <td>: xxxxxxx xxxxxxxxx</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-span-1">
                      <div className="flex justify-end mb-4">
                        <img src={ECARDLOGO} alt="ecard" />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src={ECARDQR} alt="ecardqr" />
                        <div className="text-xs text-white text-center">
                          Scan QR Code to access customer portal
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div>asd</div>
        </TabsContent>
        <TabsContent value="termLifePolicy">
          Change your password here.
        </TabsContent>
        <TabsContent value="groupPersonalAccident">
          Change your password here.
        </TabsContent>
        <TabsContent value="gmcParentalCover">
          Change your password here.
        </TabsContent>
        <TabsContent value="opd">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default MyBenefits;

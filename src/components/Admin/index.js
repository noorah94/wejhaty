import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AdminHotels from "./../AdminHotels";
import AdminDestinations from "./../AdminDestinations";
import AdminFestivals from "./../AdminFestivals";
import AdminTransportation from "./../AdminTransportation";
import AdminTouristGuides from "./../AdminTouristGuides";
import AdminFlights from "./../AdminFlights";
import Signup from "./../Signup";
import AdminDayInYourCity from "./../AdminDayInYourCity";
import AdminOrders from "./../AdminOrders";

export default function Admin() {
  const [adminRole, setAdminRole] = useState("61a48ba362b112055163b918");
  return (
    <div>
      <Tabs variant="enclosed" margin="5%">
        <TabList>
          <Tab>الفنادق</Tab>
          <Tab>الأماكن السياحية</Tab>
          <Tab>المواصلات</Tab>
          <Tab>المرشد السياحي</Tab>
          <Tab>التذاكر</Tab>
          <Tab>الوجهات</Tab>
          <Tab>يوم في مدينتك</Tab>
          <Tab>تسجيل الآدمن</Tab>
          <Tab>الطلبات</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AdminHotels />
          </TabPanel>
          <TabPanel>
            <AdminFestivals />
          </TabPanel>
          <TabPanel>
            <AdminTransportation />
          </TabPanel>
          <TabPanel>
            <AdminTouristGuides />
          </TabPanel>
          <TabPanel>
            <AdminFlights />
          </TabPanel>
          <TabPanel>
            <AdminDestinations />
          </TabPanel>
          <TabPanel>
            <AdminDayInYourCity />
          </TabPanel>
          <TabPanel>
            <Signup adminRole={adminRole} />
          </TabPanel>
          <TabPanel>
            <AdminOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

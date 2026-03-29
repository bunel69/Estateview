import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./layouts/PublicLayout";
import { ClientLayout } from "./layouts/ClientLayout";
import { StaffLayout } from "./layouts/StaffLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { LandingPage } from "./pages/public/LandingPage";
import { AboutPage } from "./pages/public/AboutPage";
import { PropertiesPage } from "./pages/public/PropertiesPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { ClientHome } from "./pages/client/ClientHome";
import { ClientAbout } from "./pages/client/ClientAbout";
import { ClientProperties } from "./pages/client/ClientProperties";
import { ClientAppointments } from "./pages/client/ClientAppointments";
import { ClientReservations } from "./pages/client/ClientReservations";
import { ClientCostBreakdown } from "./pages/client/ClientCostBreakdown";
import { ClientBills } from "./pages/client/ClientBills";
import { ClientNotifications } from "./pages/client/ClientNotifications";
import { ClientAccount } from "./pages/client/ClientAccount";
import { BillDetails } from "./pages/client/BillDetails";
import { BillPayment } from "./pages/client/BillPayment";
import { PaidBillDetails } from "./pages/client/PaidBillDetails";
import { StaffDashboard } from "./pages/staff/StaffDashboard";
import { StaffProperties } from "./pages/staff/StaffProperties";
import { StaffAppointments } from "./pages/staff/StaffAppointments";
import { StaffReservations } from "./pages/staff/StaffReservations";
import { StaffPayments } from "./pages/staff/StaffPayments";
import { StaffClients } from "./pages/staff/StaffClients";
import { StaffProfile } from "./pages/staff/StaffProfile";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminStaff } from "./pages/admin/AdminStaff";
import { AdminProperties } from "./pages/admin/AdminProperties";
import { AdminAppointments } from "./pages/admin/AdminAppointments";
import { AdminReservations } from "./pages/admin/AdminReservations";
import { AdminPayments } from "./pages/admin/AdminPayments";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminReports } from "./pages/admin/AdminReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "about", Component: AboutPage },
      { path: "properties", Component: PropertiesPage },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignUpPage },
    ],
  },
  {
    path: "/client",
    Component: ClientLayout,
    children: [
      { index: true, Component: ClientHome },
      { path: "about", Component: ClientAbout },
      { path: "properties", Component: ClientProperties },
      { path: "appointments", Component: ClientAppointments },
      { path: "reservations", Component: ClientReservations },
      { path: "cost-breakdown", Component: ClientCostBreakdown },
      { path: "bills", Component: ClientBills },
      { path: "bills/:billId", Component: BillDetails },
      { path: "bills/:billId/payment", Component: BillPayment },
      { path: "bills/paid/:billId", Component: PaidBillDetails },
      { path: "notifications", Component: ClientNotifications },
      { path: "account", Component: ClientAccount },
    ],
  },
  {
    path: "/staff",
    Component: StaffLayout,
    children: [
      { index: true, Component: StaffDashboard },
      { path: "properties", Component: StaffProperties },
      { path: "appointments", Component: StaffAppointments },
      { path: "reservations", Component: StaffReservations },
      { path: "payments", Component: StaffPayments },
      { path: "clients", Component: StaffClients },
      { path: "profile", Component: StaffProfile },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "staff", Component: AdminStaff },
      { path: "properties", Component: AdminProperties },
      { path: "appointments", Component: AdminAppointments },
      { path: "reservations", Component: AdminReservations },
      { path: "payments", Component: AdminPayments },
      { path: "users", Component: AdminUsers },
      { path: "reports", Component: AdminReports },
    ],
  },
]);
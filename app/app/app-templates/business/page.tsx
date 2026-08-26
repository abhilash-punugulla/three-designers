"use client";

import { useState } from "react";

const orders = [
  {
    id: "#ORD-1048",
    customer: "Rahul Sharma",
    product: "Premium Package",
    amount: "₹4,999",
    status: "Completed",
  },
  {
    id: "#ORD-1047",
    customer: "Ananya Rao",
    product: "Business Plan",
    amount: "₹2,499",
    status: "Processing",
  },
  {
    id: "#ORD-1046",
    customer: "Vikram Kumar",
    product: "Starter Package",
    amount: "₹1,999",
    status: "Completed",
  },
  {
    id: "#ORD-1045",
    customer: "Sneha Reddy",
    product: "Premium Package",
    amount: "₹4,999",
    status: "Pending",
  },
];

const menu = [
  { icon: "⌂", name: "Dashboard" },
  { icon: "▣", name: "Orders" },
  { icon: "♙", name: "Customers" },
  { icon: "▤", name: "Products" },
  { icon: "◒", name: "Analytics" },
];

export default function BusinessTemplate() {
  const [active, setActive] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#15171b]">

      {/* MOBILE HEADER */}
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/10 bg-white px-5 lg:hidden">

        <div>
          <p className="text-lg font-bold">NEXA</p>
          <p className="text-[10px] text-black/40">BUSINESS</p>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-xl border border-black/10 px-3 py-2 text-sm"
        >
          ☰
        </button>

      </div>


      {/* MOBILE MENU */}

      {mobileMenu && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-black/10 bg-white p-4 lg:hidden">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setMobileMenu(false);
              }}
              className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm ${
                active === item.name
                  ? "bg-black text-white"
                  : "text-black/60 hover:bg-black/5"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}

        </div>
      )}


      <div className="flex min-h-screen">


        {/* SIDEBAR */}

        <aside className="hidden w-64 shrink-0 border-r border-black/10 bg-white lg:block">

          <div className="sticky top-0 flex h-screen flex-col">

            {/* LOGO */}

            <div className="border-b border-black/10 px-7 py-7">

              <p className="text-xl font-black tracking-tight">
                NEXA
              </p>

              <p className="mt-1 text-[10px] font-medium tracking-[0.2em] text-black/40">
                BUSINESS PLATFORM
              </p>

            </div>


            {/* NAVIGATION */}

            <div className="px-4 py-6">

              <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-widest text-black/30">
                Workspace
              </p>

              <div className="space-y-1">

                {menu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActive(item.name)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                      active === item.name
                        ? "bg-[#15171b] font-medium text-white"
                        : "text-black/50 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    <span className="flex w-5 justify-center text-base">
                      {item.icon}
                    </span>

                    {item.name}
                  </button>
                ))}

              </div>

            </div>


            {/* BOTTOM */}

            <div className="mt-auto border-t border-black/10 p-4">

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-black/5">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  AS
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    Admin
                  </p>
                  <p className="truncate text-xs text-black/40">
                    Business Owner
                  </p>
                </div>

              </button>

            </div>

          </div>

        </aside>


        {/* MAIN APPLICATION */}

        <section className="min-w-0 flex-1">


          {/* DESKTOP TOP BAR */}

          <header className="hidden h-20 items-center justify-between border-b border-black/10 bg-white px-8 lg:flex">

            <div>
              <p className="text-sm text-black/40">
                Workspace
              </p>

              <p className="text-lg font-semibold">
                {active}
              </p>
            </div>


            <div className="flex items-center gap-5">

              <button className="relative rounded-xl p-2 text-black/50 hover:bg-black/5">
                ♧
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <div className="h-8 w-px bg-black/10" />

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  AS
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Admin
                  </p>
                  <p className="text-xs text-black/40">
                    Business Owner
                  </p>
                </div>

              </div>

            </div>

          </header>


          {/* CONTENT */}

          <div className="mx-auto max-w-[1500px] p-5 sm:p-7 lg:p-10">


            {/* WELCOME */}

            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <p className="text-sm font-medium text-black/40">
                  Monday, August 25, 2026
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                  Good morning, Admin.
                </h1>

                <p className="mt-2 text-sm text-black/40">
                  Here's what's happening with your business today.
                </p>

              </div>


              <button className="w-fit rounded-xl bg-[#15171b] px-5 py-3 text-sm font-medium text-white transition hover:bg-black">
                + New Order
              </button>

            </div>


            {/* STATS */}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <StatCard
                title="Total Revenue"
                value="₹84,250"
                change="+18.4%"
                positive
              />

              <StatCard
                title="Orders"
                value="128"
                change="+12.8%"
                positive
              />

              <StatCard
                title="Customers"
                value="842"
                change="+8.2%"
                positive
              />

              <StatCard
                title="Pending"
                value="17"
                change="-4.6%"
                positive
              />

            </div>


            {/* CHART + QUICK ACTIONS */}

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">


              {/* REVENUE CHART */}

              <div className="rounded-2xl border border-black/10 bg-white p-6">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm font-semibold">
                      Revenue overview
                    </p>

                    <p className="mt-1 text-xs text-black/40">
                      Revenue performance over the last 7 days
                    </p>
                  </div>

                  <button className="rounded-lg border border-black/10 px-3 py-2 text-xs">
                    Last 7 days
                  </button>

                </div>


                <div className="mt-8 flex h-56 items-end gap-3 sm:gap-6">

                  {[42, 57, 48, 72, 64, 88, 76].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 flex-col justify-end"
                      >

                        <div
                          className="w-full rounded-t-lg bg-[#15171b] transition hover:bg-black"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                        <p className="mt-3 text-center text-[10px] text-black/30">
                          {
                            [
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                              "Sun",
                            ][index]
                          }
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>


              {/* QUICK ACTIONS */}

              <div className="rounded-2xl border border-black/10 bg-white p-6">

                <p className="text-sm font-semibold">
                  Quick actions
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Manage your business faster.
                </p>


                <div className="mt-5 space-y-2">

                  <QuickAction
                    icon="+"
                    title="Create order"
                  />

                  <QuickAction
                    icon="♙"
                    title="Add customer"
                  />

                  <QuickAction
                    icon="□"
                    title="Add product"
                  />

                  <QuickAction
                    icon="↗"
                    title="View analytics"
                  />

                </div>

              </div>

            </div>


            {/* ORDERS */}

            <div className="mt-6 rounded-2xl border border-black/10 bg-white">

              <div className="flex flex-col justify-between gap-3 border-b border-black/10 p-6 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-semibold">
                    Recent orders
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Latest activity from your customers.
                  </p>
                </div>

                <button className="text-xs font-medium text-black/50 hover:text-black">
                  View all →
                </button>

              </div>


              {/* DESKTOP TABLE */}

              <div className="hidden overflow-x-auto md:block">

                <table className="w-full text-left">

                  <thead>
                    <tr className="border-b border-black/5 text-[11px] uppercase tracking-wider text-black/30">

                      <th className="px-6 py-4 font-medium">
                        Order
                      </th>

                      <th className="px-6 py-4 font-medium">
                        Customer
                      </th>

                      <th className="px-6 py-4 font-medium">
                        Product
                      </th>

                      <th className="px-6 py-4 font-medium">
                        Amount
                      </th>

                      <th className="px-6 py-4 font-medium">
                        Status
                      </th>

                    </tr>
                  </thead>


                  <tbody>

                    {orders.map((order) => (

                      <tr
                        key={order.id}
                        className="border-b border-black/5 last:border-0 hover:bg-black/[0.015]"
                      >

                        <td className="px-6 py-5 text-sm font-semibold">
                          {order.id}
                        </td>

                        <td className="px-6 py-5 text-sm text-black/60">
                          {order.customer}
                        </td>

                        <td className="px-6 py-5 text-sm text-black/60">
                          {order.product}
                        </td>

                        <td className="px-6 py-5 text-sm font-semibold">
                          {order.amount}
                        </td>

                        <td className="px-6 py-5">
                          <Status status={order.status} />
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>


              {/* MOBILE ORDERS */}

              <div className="divide-y divide-black/5 md:hidden">

                {orders.map((order) => (

                  <div key={order.id} className="p-5">

                    <div className="flex items-start justify-between">

                      <div>

                        <p className="text-sm font-semibold">
                          {order.id}
                        </p>

                        <p className="mt-1 text-xs text-black/40">
                          {order.customer}
                        </p>

                      </div>

                      <Status status={order.status} />

                    </div>

                    <div className="mt-4 flex justify-between">

                      <p className="text-xs text-black/40">
                        {order.product}
                      </p>

                      <p className="text-sm font-semibold">
                        {order.amount}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* BOTTOM INFORMATION */}

            <div className="mt-6 grid gap-6 lg:grid-cols-2">


              {/* ACTIVITY */}

              <div className="rounded-2xl border border-black/10 bg-white p-6">

                <p className="text-sm font-semibold">
                  Recent activity
                </p>

                <div className="mt-5 space-y-5">

                  <Activity
                    title="New order received"
                    text="Order #ORD-1048 was placed"
                    time="5 min ago"
                  />

                  <Activity
                    title="New customer joined"
                    text="Rahul Sharma created an account"
                    time="18 min ago"
                  />

                  <Activity
                    title="Payment received"
                    text="₹4,999 payment completed"
                    time="32 min ago"
                  />

                </div>

              </div>


              {/* BUSINESS HEALTH */}

              <div className="rounded-2xl border border-black/10 bg-white p-6">

                <p className="text-sm font-semibold">
                  Business health
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Overview of your current performance.
                </p>


                <div className="mt-6 space-y-5">

                  <Progress
                    name="Customer satisfaction"
                    value="94%"
                    progress={94}
                  />

                  <Progress
                    name="Order completion"
                    value="87%"
                    progress={87}
                  />

                  <Progress
                    name="Monthly target"
                    value="76%"
                    progress={76}
                  />

                </div>

              </div>

            </div>


            {/* TEMPLATE NOTICE */}

            <div className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white/50 p-5">

              <p className="text-sm font-semibold">
                Business App Template
              </p>

              <p className="mt-1 text-xs leading-5 text-black/40">
                This is a sample application interface created by Three
                Designers. The final application can be customized with
                your business name, colors, features, database and branding.
              </p>

            </div>


          </div>

        </section>

      </div>

    </main>
  );
}


/* STAT CARD */

function StatCard({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">

      <div className="flex items-center justify-between">

        <p className="text-xs font-medium text-black/40">
          {title}
        </p>

        <span className="text-black/20">
          ↗
        </span>

      </div>

      <p className="mt-4 text-2xl font-bold tracking-tight">
        {value}
      </p>

      <p
        className={`mt-2 text-xs font-medium ${
          positive ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {change} from last month
      </p>

    </div>
  );
}


/* QUICK ACTION */

function QuickAction({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl border border-black/5 px-4 py-4 text-left transition hover:border-black/15 hover:bg-black/[0.02]">

      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm text-white">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {title}
      </span>

      <span className="ml-auto text-black/30">
        →
      </span>

    </button>
  );
}


/* STATUS */

function Status({ status }: { status: string }) {

  const styles =
    status === "Completed"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Processing"
      ? "bg-blue-50 text-blue-700"
      : "bg-amber-50 text-amber-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium ${styles}`}
    >
      {status}
    </span>
  );
}


/* ACTIVITY */

function Activity({
  title,
  text,
  time,
}: {
  title: string;
  text: string;
  time: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-black" />

      <div className="min-w-0 flex-1">

        <div className="flex justify-between gap-3">

          <p className="text-sm font-medium">
            {title}
          </p>

          <p className="shrink-0 text-[10px] text-black/30">
            {time}
          </p>

        </div>

        <p className="mt-1 text-xs text-black/40">
          {text}
        </p>

      </div>

    </div>
  );
}


/* PROGRESS */

function Progress({
  name,
  value,
  progress,
}: {
  name: string;
  value: string;
  progress: number;
}) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <p className="text-xs text-black/50">
          {name}
        </p>

        <p className="text-xs font-semibold">
          {value}
        </p>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-black/5">

        <div
          className="h-full rounded-full bg-black"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}
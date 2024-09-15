import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/user/UserNavBar";
import PageAnimate from "./PageAnimate";

export default function UserLayout() {
    return (
        <div>
            <UserNavBar></UserNavBar>
            <main className="p-5">
                <PageAnimate>
                    <Outlet />
                </PageAnimate>
            </main>
        </div>
    );
}

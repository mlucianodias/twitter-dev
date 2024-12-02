import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function main() {
    return (
        <>
        <Header />

        <Outlet />
        </>
    )
}
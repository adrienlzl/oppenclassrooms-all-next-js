import React from "react";
import OhmyfoodHeader from '@/components/oMyFoodComponent/OhmyfoodHeader/OhmyfoodHeader';
import "../globals.css";
import OhmyfoodFooter from "@/components/oMyFoodComponent/OmyfoodFooter/OhmyfoodFooter";

export default async function Layout({children}: { children: React.ReactNode }) {

    return (
        <body>
        <div className={"min-h-full"}>
            <OhmyfoodHeader/>
            <main>
            {children}
            </main>
            <OhmyfoodFooter/>
        </div>
        </body>
    )
}
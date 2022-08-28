import React, { useEffect, useState } from "react";
import { ShopHeader } from "./shopheader";
import { ShopLinks } from "./shoplinks";

export function ShopNav() {

    return (
        <div id="shopNavContainer">
            <ShopHeader />
            <ShopLinks />
        </div>
    )
}
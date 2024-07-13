import { type ReactElement } from "react";
import { PageHero } from "../components/Hero/Hero";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components/Footer/Footer";

export default async function DashboardPage():Promise<ReactElement> {        
    return(
        <>                                   
            <PageHero/>
            <Testimonial/>
            <Footer/>
        </>
    )
}
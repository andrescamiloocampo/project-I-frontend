"use client"

import { type ReactElement,useRef } from "react";
import { PageHero } from "../components/Hero/Hero";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components/Footer/Footer";

export default function DashboardPage():ReactElement {        
    const testimonialRef = useRef<HTMLDivElement>(null);

    const scrollToTestimonial = () => {
        testimonialRef.current?.scrollIntoView({behavior:'smooth'});
    }

    return(
        <>                                   
            <PageHero action={scrollToTestimonial}/>
            <div ref={testimonialRef}>
                <Testimonial/>
            </div>            
        </>
    )
}
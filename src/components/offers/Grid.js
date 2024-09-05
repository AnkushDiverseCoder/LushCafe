import React from "react";
import { BentoGrid, BentoGridItem } from "@/src/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { Cards } from "./Cards";

export function Grid() {
    return (

        <section className="">

            {/* Section Focus Card */}
            <section
                className="section kf-menu kf-parallax"
                style={{ backgroundImage: "url(images/category_bg.jpg)" }}
            >
                <div className="container">
                    <div className="kf-titles align-center">
                        <div
                            className="kf-subtitle element-anim-1 scroll-animate"
                            data-animate="active"
                        >
                            Choose Best Coffee
                        </div>
                        <h3
                            className="kf-title element-anim-1 scroll-animate"
                            data-animate="active"
                        >
                            Kaffen Popular Coffee Menu
                        </h3>
                    </div>
                    <div
                        className="kf-menu-items"
                        style={{ backgroundImage: "url(images/menu_logo.png)" }}
                    >
                        <Cards />
                    </div>
                </div>
            </section>
            {/* Section BENTO GIRD */}
            <div className="kf-titles align-center pt-14">
                <div
                    className="kf-subtitle element-anim-1 scroll-animate"
                    data-animate="active"
                >
                    Choose Best Coffee
                </div>
                <h3
                    className="kf-title element-anim-1 scroll-animate"
                    data-animate="active"
                >
                    Lush Cafe Popular Offers
                </h3>
            </div>
            (<BentoGrid className="container mx-auto md:auto-rows-[20rem] pb-24">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon} />
                ))}
            </BentoGrid>)
            {/* Section CTA */}
            <section
                className="section kf-cta kf-parallax"
                style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="kf-titles">
                                <div
                                    className="kf-subtitle element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    Need a Table On Coffee House
                                </div>
                                <h3
                                    className="kf-title element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    Booking Table For Your &amp; Family Members
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

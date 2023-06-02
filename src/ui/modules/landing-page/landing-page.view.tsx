import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";
import { CodersMonkeysSlackView } from "./components/coders-monkeys-slack/coders-monkeys-slack.view";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top";
import { HighLightListView } from "./components/highlight-list/highlight-list.view";
import Timeline from "@/ui/components/timeline/timeline.view";
import { Breadcrumbs } from "@/ui/components/breadcrumbs/breadcrumbs";

export const LandingPageView = () => {
    return (
        <>
            
            <HeroTopView />
            <FeaturedView />
            <CodersMonkeysSlackView />
            <CurrentCourseCtaView />
            <HighLightListView />
            <CallToActionView />
            <Timeline />
        </>
    );
    
};
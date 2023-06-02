import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-button";

export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const footerNavigationList = footerLinks.map((colomnLinks) => (
        <FooterLink key={uuidv4()} data={colomnLinks}/>

        ));
    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Formations gratuites

                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"
                    >
                        Abonne-toi à la chaîne
                    </Typography>
                    <a href="https://www.youtube.com/@remotemonkey" target="_blank" rel="noreferrer">
                        <Image
                            src="/assets/svg/YTB.svg"
                            alt="Remote Monkey | Youtube"
                            width={229}
                            height={216}
                        />  
                    </a>

                </div>
                <div className="flex gap-7">{footerNavigationList}</div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${currentYear} | Propulsed by `}
                        <a 
                            href="https://arnaud-desportes.fr"
                            target="_blank"
                            className="underline"
                        >
                            Arnaud Desportes
                        </a>
                        {`- Remote monkey SASU`} 
                    </Typography>
                    <div className="">
                        <SocialNetworksButtons theme="gray" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

interface FooterLinkProps {
    data: FooterLinks;
}


const FooterLink = ({data}: FooterLinkProps) => {

    const linksList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
        </div>
        ));

    return (
        <div className="min-w-[190px]">
            <Typography
                variant="caption2"
                theme="white"
                weight="medium"
                className="pb-5"
            >
                {data.label}
            </Typography>
            <Typography
                variant="caption3"
                theme="gray"
                className="space-y-4"
            >
                {linksList}
            </Typography>
        </div>
    );
}


// Component: DesignSystem
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
//Design System
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
//Ico
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo title="Design System" description="Description..." />
            <Layout>
            <Container className="py-10 space-y-20">
                {/* Typography */} 
                <div className="space-y-2">
                    <Typography variant="caption2" weight="medium">
                        Typography
                    </Typography>
                    <div className="flex flex-col gap-2">
                        <Typography variant="h1">
                            H1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="h2">
                            H2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="h3">
                            H3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="h4">
                            H4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
            </div>
                </div>
                {/* Spinner */}
                <div className="flax items-start gap-7">
                    <div className="space-y-2">

                        <Typography variant="caption2" weight="medium">
                            Spinner
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Spinner size="small" />
                            <Spinner />
                            <Spinner size="large" />
                        </div>
                    </div>
                </div>
                {/* Logo */}
                <div className="flax items-start gap-7">
                    <div className="space-y-2"> 
                        <Typography variant="caption2" weight="medium">
                            Logo
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">    
                            <Logo size="very-small" />
                            <Logo size="small" />
                            <Logo />   
                            <Logo size="large" />
                        </div>  
                    </div>
                </div>
                {/* Avatar */}
                <div className="flax items-start gap-7">
                    <div className="space-y-2">

                        <Typography variant="caption2" weight="medium">
                            Avatar
                        </Typography>


                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Avatar src="/assets/images/avatar.png" alt="Avatar de daniel lincoln" size="small" />  
                            <Avatar src="/assets/images/cedric.jpg" alt="Avatar de cédric" />
                            <Avatar src="/assets/images/cedric.jpg" alt="Avatar de cédric" size="large" />
                        </div>  
                    </div>
                </div>
                {/* Button */}  
                <div className="space-y-2">
                    <Typography variant="caption2" weight="medium">
                        Button
                    </Typography>

                    <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                        <Button variant="secondary" size="small">
                            Small
                        </Button>
                        <Button variant="accent">
                            Default
                        </Button>

                        <Button variant="ico" size="large">
                            Large
                        </Button>
                    </div>
                </div>
            </Container>

            </Layout>
            
        </>
    )   
}

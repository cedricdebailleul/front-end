import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Cv() {
    return(
        <>
        <Seo title="Cédric Debailleul CV" description="Curiculum vitae de Cédric Debailleul" />
        <Layout>
            <Container className="py-10 space-y-20"> 
                <div className="space-y-2">
                    <Typography variant="caption2" weight="medium">
                        Cédric Debailleul
                    </Typography>
                </div>
            </Container>
            
        </Layout>

        </>
    )
}
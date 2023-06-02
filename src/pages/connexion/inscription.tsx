import { Layout } from '@/ui/components/layout/layout';
import { Seo } from '@/ui/components/seo/seo';
import { RegisterContainer } from '@/ui/modules/authentification/register/register.container';

export default function Inscription() {
  return (
    <>
      <Seo 
        title="Inscription sur Coders Monkeys" 
        description="Page d'inscription" 
      />
      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
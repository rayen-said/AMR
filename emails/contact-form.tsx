import { Html, Head, Preview, Body, Container, Section, Text, Heading, Hr, Tailwind } from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  org: string;
  hectares: string;
  message: string;
}

const hectareLabels: Record<string, string> = {
  "under-100": "Under 100 Hectares",
  "100-500": "100 - 500 Hectares",
  "500-2000": "500 - 2,000 Hectares",
  "over-2000": "Over 2,000 Hectares",
};

export default function ContactFormEmail({
  name,
  email,
  org,
  hectares,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-8 max-w-[600px]">
            <Section className="bg-white rounded-lg shadow-sm p-8">
              <Heading className="text-2xl font-bold text-gray-900 mb-6">
                New Contact Form Submission
              </Heading>

              <Section className="mb-6">
                <Heading as="h3" className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Contact Details
                </Heading>
                <table className="w-full">
                  <tr>
                    <td className="py-1.5 pr-4 text-sm text-gray-500 w-32 align-top">Name</td>
                    <td className="py-1.5 text-sm text-gray-900 font-medium">{name}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-4 text-sm text-gray-500 w-32 align-top">Email</td>
                    <td className="py-1.5 text-sm text-gray-900">{email}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-4 text-sm text-gray-500 w-32 align-top">Organization</td>
                    <td className="py-1.5 text-sm text-gray-900">{org}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-4 text-sm text-gray-500 w-32 align-top">Acreage</td>
                    <td className="py-1.5 text-sm text-gray-900">{hectareLabels[hectares] || hectares}</td>
                  </tr>
                </table>
              </Section>

              <Hr className="border-gray-200 my-6" />

              <Section>
                <Heading as="h3" className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Message
                </Heading>
                <Text className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>

            <Text className="text-xs text-gray-400 text-center mt-6">
              AMR Solutions — early-stage agritech startup
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

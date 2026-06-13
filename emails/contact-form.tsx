import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Tailwind } from "@react-email/tailwind";

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
      <Preview>New enquiry from {name} at {org}</Preview>
      <Tailwind>
        <Body className="bg-[#e5e2e1] font-sans antialiased mx-auto py-8 px-4">
          <Container className="w-full max-w-3xl rounded-xl border border-[#c0c9be]/30 overflow-hidden shadow-lg mx-auto bg-[#FAF9F7]">
            <Section className="w-full bg-white border-b border-[#c0c9be]/30 px-8 py-6">
              <Row>
                <Column align="left">
                  <Text className="text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-[#236137] m-0">
                    AMR Solutions
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="w-full relative h-[280px] overflow-hidden bg-[#F5F3EF]">
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,69,38,0.8), transparent)",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: "40px" }}>
                <Heading className="text-[48px] leading-[56px] tracking-[-0.02em] font-semibold text-white m-0">
                  New Contact Enquiry
                </Heading>
              </div>
            </Section>

            <Section className="px-10 py-12">
              <Section className="mb-6">
                <Text className="text-[20px] leading-[32px] text-[#1c1b1b] font-medium mb-4">
                  Dear AMR Team,
                </Text>
                <Text className="text-[16px] leading-[26px] text-[#404941] mb-2">
                  You have received a new enquiry from the contact form. Details are outlined below.
                </Text>
              </Section>

              <Section className="bg-[#F5F3EF] border border-[#c0c9be]/30 rounded-lg px-8 py-6 mb-8">
                <Row className="mb-4">
                  <Column className="w-1/2 align-top">
                    <Text className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#236137] uppercase m-0 mb-1">Name</Text>
                    <Text className="text-[16px] leading-[26px] text-[#1c1b1b] m-0">{name}</Text>
                  </Column>
                  <Column className="w-1/2 align-top">
                    <Text className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#236137] uppercase m-0 mb-1">Business Email</Text>
                    <Text className="text-[16px] leading-[26px] text-[#1c1b1b] m-0">{email}</Text>
                  </Column>
                </Row>
                <Row className="mb-4">
                  <Column className="w-1/2 align-top">
                    <Text className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#236137] uppercase m-0 mb-1">Organization</Text>
                    <Text className="text-[16px] leading-[26px] text-[#1c1b1b] m-0">{org}</Text>
                  </Column>
                  <Column className="w-1/2 align-top">
                    <Text className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#236137] uppercase m-0 mb-1">Acreage Managed</Text>
                    <Text className="text-[16px] leading-[26px] text-[#1c1b1b] m-0">{hectareLabels[hectares] || hectares}</Text>
                  </Column>
                </Row>
              </Section>

              <Section className="border border-[#c0c9be]/30 rounded-lg overflow-hidden flex flex-col md:flex-row mb-8">
                <div className="md:w-1/2 p-8 bg-white">
                  <Heading className="text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-[#236137] m-0 mb-4">
                    Message
                  </Heading>
                  <Text className="text-[16px] leading-[26px] text-[#404941] whitespace-pre-wrap">
                    {message}
                  </Text>
                </div>
              </Section>

              <Section className="text-center pt-8">
                <Link
                  href={`mailto:${email}`}
                  className="inline-block bg-[#3d7a4e] text-[#c6ffcf] text-[14px] leading-[20px] tracking-[0.02em] font-semibold px-8 py-4 rounded-full font-bold no-underline"
                >
                  Reply to {name}
                </Link>
              </Section>
            </Section>

            <Section className="bg-[#f0edec] border-t border-[#c0c9be]/30 px-10 py-12 mt-4 text-center">
              <Row className="mb-8">
                <Column align="center">
                  <Row>
                    <Column className="pr-6">
                      <Link href="#" className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#404941] no-underline uppercase">
                        Architecture
                      </Link>
                    </Column>
                    <Column className="pr-6">
                      <Link href="#" className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#404941] no-underline uppercase">
                        Technical Specs
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#" className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#404941] no-underline uppercase">
                        Privacy Policy
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Text className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#717970] m-0">
                © 2026 AMR Solutions. Precision Agriculture for the Future of Farming.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

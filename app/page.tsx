import type { Metadata } from "next";
import BlogSummary from "../components/BlogSummary";
import ContactForm from "../components/ContactForm";
import Jumbotron from "../components/Jumbotron";
import ReadLink from "../components/ReadLink";
import Link from "next/link";

export const metadata: Metadata = {
	// Default title is used from the layout
	description:
		"Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot",
};

export default function Home() {
	return (
		<>
			<Jumbotron />
			<div className="bg-orange">
				<div className="wrapper py-24 tablet:py-32">
					<div className="inner-wrapper">
						<span className="block text-blue text-12 uppercase mb-2">Jobb</span>
						<Link href="/jobb">
							<div className="text-blue text-20 leading-normal mb-4 laptop:text-32">Vill du bygga bolag med oss?</div>
						</Link>
						<p>
							<ReadLink href="/jobb/litium-arkitekt/" title="Litium-arkitekt" />
						</p>
						<p>
							<ReadLink href="/jobb/litium-utvecklare/" title="Litium-utvecklare" />
						</p>
						<p>
							<ReadLink href="/jobb/frontend-utvecklare/" title="Frontend-utvecklare" />
						</p>
					</div>
				</div>
			</div>
			<BlogSummary />
			<ContactForm name="startpage-form" />
		</>
	);
}
